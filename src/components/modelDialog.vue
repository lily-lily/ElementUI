<template>
	<div class="wrap-dialog">
		<el-dialog :title="param.title"  :visible.sync="param.show">
		  <el-table :data="gridData" @row-dblclick="rowDbclick">
		    <el-table-column property="date" label="日期" width="150"></el-table-column>
		    <el-table-column property="name" label="姓名" width="200"></el-table-column>
		    <el-table-column property="address" label="地址"></el-table-column>
		  </el-table>
		</el-dialog>
	</div>
</template>

<script>
	export default{
		props: ['param'],
		data(){
			return {
				gridData:[{
		          id: '12987124',
		          name: '王小虎',
		          date: '2017-09-26',
		          address: '1.9der43rr4',
		          amount3: 9
		        }]
			}
		},
		methods:{
			rowDbclick(row) {
				this.param.show = false;
	            this.$emit("tansferUser",row)  //用 $emit 来遍历 transferUser 事件，并返回 this.msg
	      	}
		},
		created(){
			
		}
	}
</script>

<style>
</style>