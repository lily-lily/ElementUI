<style scoped lang="less">
.main{
	.el-table {
		.cell{
			text-align:left;
		}
	}
}
</style>
<template>
	<div class="main">
		<div class="table-border">
			<label style="float:left;padding:10px 5px">斑马表格</label>
			<el-table :data="tableData2" empty-text="暂无数据" stripe style="width: 100%" height="200" align="left">
    			<el-table-column prop="date" label="日期" >
				</el-table-column>
			    <el-table-column prop="name"  label="姓名">
			    </el-table-column>
			    <el-table-column prop="province"  label="省" >
			    </el-table-column>
			    <el-table-column prop="city"  label="市" >
			    </el-table-column>
			    <el-table-column prop="address" label="地址">
			    </el-table-column>
			</el-table>
		</div>
		<div class="table-border">
			<p  style="text-align:left;padding:10px 5px">固定表头</p>
			<div>
				<el-row :gutter="10">
  					<el-col :xs="12" :sm="12" :md="8" :lg="10">
  						<el-input placeholder="输入搜索条件" icon="search" v-model="loadParam.name" :on-icon-click="handleIconClick" @keyup.enter.native="handleIconClick" ></el-input>
  					</el-col>
  					<el-col :xs="12" :sm="12" :md="8" :lg="10">
  						<el-input v-model="loadParam.province" placeholder="请输入内容" class="pull-left"></el-input>
  					</el-col>
  					<el-col :xs="12" :sm="12" :md="8" :lg="4">
  						<el-button type="primary" icon="search" calss='pull-right'>搜索</el-button>
  					</el-col>
  				</el-row>
			</div>
			<el-table :data="tableData" v-loading="loadParam.loading" element-loading-text="拼命加载中"  max-height="200"  align="left" highlight-current-row border  style="width: 100%" v-cloak>
    			<el-table-column fixed prop="date"  label="日期" width="160">
				</el-table-column>
			    <el-table-column prop="name"  label="姓名" width="120">
			    </el-table-column>
			    <el-table-column prop="province"  label="省"  width="120">
			    </el-table-column>
			    <el-table-column prop="city"  label="市"  width="120">
			    </el-table-column>
			    <el-table-column prop="address" label="地址" >
			    </el-table-column>
			    <el-table-column prop="zip" label="邮编" width="120">
			    </el-table-column>
			    <el-table-column  fixed="right" label="操作"  width="120">
			      <template scope="scope">
			      	<el-button size="small" type="text"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button type="text" size="small" @click.native="deleteRow(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
			</el-table>
		</div>
		<div class="table-border">
			<label style="float:left;padding:10px 5px">选中数据</label>
			<el-table :data="tableData" ref="multipleTable"  max-height="200" highlight-current-row border  align="left" style="width: 100%" @selection-change="handleSelectionChange" @sort-change="handleSortChange">
				<el-table-column fixed type="selection"  width="55"></el-table-column>
    			<el-table-column  prop="date" sortable="custom" label="日期" width="120">
				</el-table-column>
			    <el-table-column prop="name" sortable="custom" label="姓名" width="120">
			    </el-table-column>
			    <el-table-column prop="province" sortable="custom" label="省"  width="120">
			    </el-table-column>
			    <el-table-column prop="city" sortable="custom" label="市"  width="120">
			    </el-table-column>
			    <el-table-column prop="address" :formatter="formatter" label="地址" >
			    </el-table-column>
			    <el-table-column prop="zip"  label="邮编" width="120">
			    </el-table-column>
			</el-table>
			<div class="block">
			    <el-pagination  style="text-align:right;"
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="loadParam.currentPage"
			      :page-sizes="[10, 20, 50, 100]"
			      :page-size="loadParam.pagesize"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="loadParam.totalCount">
			    </el-pagination>
			</div>
		</div>
		<div class="table-border">
			<label style="float:left;padding:10px 5px">金额计算</label>
			<el-table :data="tableData1"  max-height="200" highlight-current-row border  align="left" style="width: 100%" empty-text :summary-method="getSummaries"show-summary>
				<el-table-column  prop="id" label="ID" width="150"></el-table-column>
				</el-table-column>
			    <el-table-column prop="name" sortable label="姓名" >
			    </el-table-column>
			    <el-table-column prop="amount1" sortable label="数值1（元）">
			    </el-table-column>
			    <el-table-column prop="amount2" sortable label="数值2（元）">
			    </el-table-column>
			    <el-table-column prop="amount3" sortable label="数值3（元）" >
			    </el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import httpService from '../components/tools/httpService.js'
	import common from  '../components/tools/common.js'
	import { mapGetters } from 'vuex'
	export default{
		components:{
			
		},
		data(){
			return{
				loadParam:{
					loading:false,
					currentPage:1,
					pagesize:10,
					totalCount:200,
					name:""  //搜索条件
				},
				multipleSelection:[],
		        tableData1: [{
		          id: '12987122',
		          name: '王小虎1',
		          amount1: '234',
		          amount2: '3.2',
		          amount3: 10
		        }, {
		          id: '12987123',
		          name: '王小虎',
		          amount1: '165',
		          amount2: '4.43',
		          amount3: 12
		        }, {
		          id: '12987124',
		          name: '王小虎',
		          amount1: '324',
		          amount2: '1.9',
		          amount3: 9
		        }, {
		          id: '12987125',
		          name: '王小虎',
		          amount1: '621',
		          amount2: '2.2',
		          amount3: 17
		        }, {
		          id: '12987126',
		          name: '王小虎',
		          amount1: '539',
		          amount2: '4.1',
		          amount3: 15
		        }],
		        tableData2:[],
			}
		},
		computed:{
			/*--循环的变量--*/
			tableData() {
                return this.$store.state.table.tableList;
            }
		},
		methods:{
			getHttp(param){
				let _self= this;
				console.log(param)
				param.loading = true;
				let url = common.apiUrl.list;
				httpService.myTable(url,function(suc){
					if(suc.status==200){
						_self.$message('获取数据成功');
						setTimeout(() => {
				          	param.loading = false;
				        }, 3000);
					}
					_self.$store.dispatch('getTableList', suc.body);
				},function(err){
					_self.$message({
                    	showClose:true,
                    	message:'服务器内部错误，请重试'
                    });
				})
				/*_self.$http.get('/static/data/table.json',param).then(
					(res) => {
					console.log(param)
					if(res.status==200){
						this.$message('获取数据成功');
						setTimeout(() => {
				          	this.loadParam.loading = false;
				        }, 3000);
					}
					_self.$store.dispatch('getTableList', res.body);
                }).catch((err) => {
                    console.log(err);
                    this.$message({
                    	showClose:true,
                    	message:'服务器内部错误，请重试'
                    });
                })*/
			},
			handleIconClick(){
				console.log('sjjkj')
			},
			deleteRow(index, rows) {
				this.$confirm('此操作会删除本条信息, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning',
		          lockScroll:true,
		        }).then(() => {
		          rows.splice(index, 1);
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		                
		        });
		        
		    },
		    handleEdit(index,rows){
		    	console.log(rows)
		    	this.editFormVisible = true;
		    },
		    handleSelectionChange(val){
		    	console.log(val);
		    	this.multipleSelection = val;
		    },
		    handleSortChange(col){
		    	console.log(col);
		    	console.log(col.prop+col.order);
		    },
		    formatter(row,colume,cellvalue){
		    	return row.address;
		    },
		    handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    },
		    getSummaries(param) {
		        const { columns, data } = param;
		        const sums = [];
		        columns.forEach((column, index) => {
		          if (index === 0) {
		            sums[index] = '总价';
		            return;
		          }
		          const values = data.map(item => Number(item[column.property]));
		          if (!values.every(value => isNaN(value))) {
		            sums[index] = values.reduce((prev, curr) => {
		              const value = Number(curr);
		              if (!isNaN(value)) {
		                return prev + curr;
		              } else {
		                return prev;
		              }
		            }, 0);
		            sums[index] += ' 元';
		          } else {
		            sums[index] = 'N/A';
		          }
		        });
		        return sums;
		    }
		},
		created(){
			this.getHttp(this.loadParam);
		}
	}
</script>