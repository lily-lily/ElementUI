<style scoped lang="less">
 .demo-ruleForm{
 	.line {
    	text-align: center;
    }
    .el-tag{
    	margin: 0 2px;
    }
    .input-new-tag{
    	max-width:70px;
    }
}
</style>
<template>
	<div class="form">
		<el-form  :model="ruleForm" v-loading="ruleForm.loading" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="活动名称" prop="name">
			    <el-input v-model="ruleForm.name" placeholder="请输入活动名称"></el-input>
			</el-form-item>
			<el-form-item label="活动区域" prop="region">
			    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			</el-form-item>
			<el-form-item label="活动时间" required>
			    <el-col :span="5">
			      <el-form-item prop="date1">
			        <el-date-picker type="date" :editable=false  placeholder="选择开始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
			      </el-form-item>
			    </el-col>
			    <el-col class="line" :span="2">-</el-col>
			    <el-col :span="5">
			      <el-form-item prop="date2">
			         <el-date-picker type="date" :editable=false  placeholder="选择结束日期" v-model="ruleForm.date2" style="width: 100%;" ></el-date-picker>
			      </el-form-item>
			    </el-col>
			</el-form-item>
			<el-form-item label="即时配送" prop="delivery">
			    <el-switch on-text="" off-text v-model="ruleForm.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="活动性质" prop="type">
			    <el-checkbox-group v-model="ruleForm.type">
			      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
			      <el-checkbox label="地推活动" name="type"></el-checkbox>
			      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
			      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
			    </el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源" prop="resource">
			    <el-radio-group v-model="ruleForm.resource">
			      <el-radio label="线上品牌商赞助"></el-radio>
			      <el-radio label="线下场地免费"></el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式" prop="desc">
			    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
			</el-form-item>
			<el-tag
			  :key="tag"
			  v-for="tag in dynamicTags"
			  :closable="true"
			  :close-transition="false"
			  @close="handleClose(tag)"
			>
			{{tag}}
			</el-tag>
			<el-input
			  class="input-new-tag"
			  v-if="inputVisible"
			  v-model="ruleForm.inputValue"
			  ref="saveTagInput"
			  size="mini"
			  @keyup.enter.native="handleInputConfirm"
			  @blur="handleInputConfirm"
			>
			</el-input>
			<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
			<div class="inputNumber">
				<el-input-number size="small" v-model="num6"></el-input-number>
				<el-input-number size="small" v-model="num1"></el-input-number>
				<el-input-number size="small" v-model="num2"></el-input-number>
				<span>总额：{{sum}}</span>
			</div>
			<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
		<el-upload
			class="upload-demo"
			action="https://jsonplaceholder.typicode.com/posts/"
			:on-preview="handlePreview"
			:on-remove="handleRemove"
			:file-list="fileList">
		  	<el-button size="small" type="primary">点击上传</el-button>
		  	<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
		<div>
			<p>上传图片：</p>
			<!--up.qbox.me域名支持http和https上传-->
			<el-upload
			  action="//up.qbox.me/"
			  list-type="picture-card"
			  multiple
			  :thumbnail-mode='true'
			  :on-success="handleSuccess"
			  :data="form"
			  :before-upload="beforeUpload"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog v-model="dialogVisible" size="small">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</div>
		<div class="module-dialog">
			<el-input v-model="customerName"  placeholder="点击选择用户"  @click.native="dialogTableHandle" :readonly="true"></el-input>
			<el-input v-model="account" placeholder="客户账号"   :readonly="true"></el-input>
			<table-dialog :param="dialogParam" v-if="dialogParam.show" @tansferUser="getMsg"></table-dialog>
		</div>
	</div>
</template>

<script>
	import common from '../components/tools/common.js'
	import moment from '../../static/moment.js'
	import tableDialog from '../components/modelDialog.vue'
	export default{
		components:{
			common,
			moment,
			tableDialog
		},
		data(){
			var deadlineTime = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请选择结束时间'));
		        } else if (value < this.ruleForm.date1) {
		          callback(new Error('结束日期不能小于开始日期!'));
		        } else {
		          callback();
		        }
		      };
			return{
				inputVisible:false,	
				dialogParam:{
					show:false
				},
				num6:1,
				num1:1,
				customerName:"",
				account:"",
				gridData:[],
				num2:1,
				sum:0,
				dynamicTags:['标签一', '标签二', '标签三'],
				fileList:[],
				dialogImageUrl: '',//图片路径
        		dialogVisible: false,// 是否显示upload组件
			    supportWebp: false,   // 是否支持webp
			    bucketHost: '',   // 上传图片的外链域名
			    form: {},
				ruleForm:{
					loading:false,
					name:'',
					region:'',
					date1:'',
					date2:'',
					delivery:false,
					type:[],
					resource:'',
					desc:'',
					inputValue:''
				},
				rules:{
					name:[{
						required:true,message:'请输入活动名称',trigger:'blur'
					}],
					region:[{
						required:true,message:'请选择活动区域',trigger:'change'
					}],
					date1:[{
						type:'date',required:true,message:'请选择日期',trigger:'change'
					}],
					date2:[{
						type:'date', validator: deadlineTime,trigger:'change'
					}],
					type: [
			            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
			        ],
			        resource: [
			            { required: true, message: '请选择活动资源', trigger: 'change' }
			        ],
			        desc: [
			            { required: true, message: '请填写活动形式', trigger: 'blur' }
			        ]
				}
			}
		},
		computed: {
		　　
		},
		watch: {
		　　'num1':'changeAmount',
			'num2':'changeAmount',
			'num6':'changeAmount',
		},
		methods:{
			getMsg:function(row){
				console.log(row)
				this.customerName = row.name;
				this.account = row.date;
			},
			dialogTableHandle(){
				this.dialogParam.show = true;
				this.dialogParam.title = "收货地址";
			},
			handlePreview(file){
				console.log(file)
			},
			beforeUpload (file) {
				console.log(file)
			      let curr = moment().format('YYYYMMDD').toString()
			      let prefix = moment(file.lastModified).format('HHmmss').toString()
			      let suffix = file.name
			      let key = encodeURI(`${curr}/${prefix}_${suffix}`)
			      return api.getImageToken({ key }).then(response => {
			      	console.log(response)
			        this.bucketHost = response.bucketHost
			        this.supportWebp = response.supportWebp
			        this.form = {
			          key,
			          token: this.upToken
			        }
			      })
		    },
		    handleSuccess (response, file, fileList) { //上传成功
			      let key = response.key
			      let name = file.name
			      let prefix = this.supportWebp ? 'webp/' : ''
			      let img = `![${name}](${this.bucketHost}/${prefix}${encodeURI(key)})`
		    },
			handlePictureCardPreview(file) {
				console.log(file)
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		   },
			handleRemove(file, fileList) {
		        console.log(file, fileList);
		    },
			changeAmount(){
				this.sum = this.num1 + this.num2 - this.num6;
			},
			resetForm(formName){
				this.$refs[formName].resetFields();
			},
			handleClose(tag) {
		        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
		    },
			showInput(){
				this.inputVisible = true;
				this.$nextTick(_ => {
		          this.$refs.saveTagInput.$refs.input.focus();
		        });
			},
			handleInputConfirm() {
		        let inputValue = this.ruleForm.inputValue;
		        if (inputValue) {
		          this.dynamicTags.push(inputValue);
		        }
		        this.inputVisible = false;
		        this.ruleForm.inputValue = '';
		     },
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
					//提交时转换时间的值
					this.ruleForm.loading = true;
		          	var d = new Date(this.ruleForm.date1);
			        var date = d.getDate();
			        var month = d.getMonth() + 1;
			        if (month < 10) {
				        month = '0' + month;
				    }
				    if (date < 10) {
				        date = '0' + date;
				    }
				    this.ruleForm.date1=d.getFullYear() + '-' + month + '-' + date;  
			        console.log(this.ruleForm.date1)
		            setTimeout(() => {
		            	alert('submit!');
			          this.ruleForm.loading = false;
			        }, 3000);
		            /*this.$http.post(config.URL+'platform/user/add',
		              {},
		              {
		              params:{
		                 username:that.newForm.userAccount,
		                 password:that.newForm.userPasswd,
		                 nickname:that.newForm.nickName,
		                 freeTime:that.newForm.useTime,
		                 maxNumber:that.newForm.maxNumber,
		                 remark:that.newForm.remark
		               },
		               emulateJSON:true
		             })
		            .then(
		            function(res){
		              if (res.body.code==1) {
		                that.show();
		                that.$refs[formName].resetFields();
		                that.newDialogVisible = false
		              }
		              else{
		                Message.error(res.body.statusMsg);
		              }
		            },
		            function(err){
		                Message.error('与服务器连接错误！');             
		            }) 
		            */
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    }
		}
	}
</script>

