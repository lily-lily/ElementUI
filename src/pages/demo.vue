<style lang="less" scoped> 
	.demo{
		margin-top: 35px;
		.mainTable{
			margin:0 30px;
			border: 1px solid #0082E6;
			.el-row {
			    background: #e0ecff;
			    /*height: 60px;*/
			    font-size: 13.5px;
			    &:last-child {
			      margin-bottom: 0;
			    }
			    .el-col {
				    border-right: 1px solid #0082E6;
				    margin-bottom: 10px;
				    &:last-child {
				      border-right: 0;
				    }
				    .bg-purple-dark {
					    background: #99a9bf;
					}
					.bg-purple {
					    text-align: center;
					    line-height: 60px;
					    color:#336699;
					}
					.bg-purple-light {
					    background: #e5e9f2;
					}
					.grid-content {
					    height: 60px;
					    border-bottom: 1px solid #0082E6;
					}
				}
			}
			.form-content{
				margin: 10px 0;
				.el-row{
					background: #fafafa;
					.el-col{
						border:none;
						.el-form-item /deep/ .el-form-item__content{
							font-size: 13px;
						}
						.el-form-item /deep/ .el-form-item__label{
							padding-right: 0px;
							white-space: nowrap;
							font-size: 13px;
						}
						.el-form-item /deep/ .el-input{
							font-size:13px;
						}
						.el-form-item{
							margin-bottom:0px;
							.el-date-editor.el-input{
								width:100%;
							}
							.el-select /deep/ .el-input{
								font-size: 13px;
							}
							.el-input__hidden /deep/ .el-input__inner  /*--父组件里面直接改变子组件的样式方法--*/
							{
								border: none;
								background: #fafafa;
							}
							.el-select__hidden /deep/ .el-input__inner{
								border: none;
								background: #fafafa;
								color:#1f2d3d;
							}
							.el-select__hidden /deep/ .el-input__icon{
								opacity: 0;
							}
						}
					}
				}
			}
			.sub-forms{
				.sub-forms-title{
					height:30px;
					text-indent: 10px;
					color:#336699;
					line-height: 28px;
					font-size: 13px;
					background: #e0ecff;
					border-top:1px solid #007CDB;
					border-bottom:1px solid #007CDB;
				}
			}
		}
		.row-bg {
		    padding: 10px 0;
		    background-color: #f9fafc;
		}
	}
</style>
<template>
	<div class="demo">
		<buttonTop></buttonTop>
		<div class="form-input">
			<div class="mainTable">
				<el-form  ref="FormData" :model="FormData" label-width="80px" size="mini" v-cloak v-loading="loading2" element-loading-text="拼命加载中"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
					<el-row>
					  <el-col :span="8"><div class="grid-content bg-purple">深圳珈伟光伏照明股份有限公司{{FormTemplate.VersionCode}}</div></el-col>
					  <el-col :span="8"><div class="grid-content bg-purple">{{FormTemplate.Name}}</div></el-col>
					  <el-col :span="8"><div class="grid-content bg-purple"><img src="" alt="条形码" /></div></el-col>
					</el-row>
					<div class="form-content">
						<el-row>
							<el-col v-for="(item,index) in FormData" :xs="item.SpaceRow" :sm="item.SpaceRow" :md="item.SpaceRow" :lg="item.SpaceRow" >
							  	<el-form-item :label="item.attrName+'：'" prop="val">
							  		<!--<span v-if="item.type==='input'&&item.isEdit==false">{{item.val}}</span>-->
								    <el-input v-model="item.val" v-bind:readonly="item.isEdit" v-if="item.type==='input'&&item.isEdit==false" v-bind:class="{'el-input__hidden':!item.isEdit}"></el-input>
								    <!--<el-input v-model="item.val" v-bind:disabled="item.disabledInput" v-if="item.type==='input'&&item.disabledInput==true" v-bind:class="{'el-input__hidden':item.disabledInput}"></el-input>-->
								    <el-input v-model="item.val" v-if="item.type==='input'&&item.isEdit==true" required="true"></el-input>
								    <el-select v-model="item.val"  placeholder="请选择"  v-if="item.type==='select'&&item.isEdit===true" @change="selectChange" required="true">
									    <el-option
									      v-for="departPerson in item.departments"
									      :key="departPerson.value"
									      :label="departPerson.label"
									      :value="departPerson.value">
									    </el-option>
									</el-select>
									<el-input v-model="item.val"  v-if="item.type==='select'&&item.isEdit==false" v-bind:class="{'el-input__hidden':!item.isEdit}"></el-input>
									<el-date-picker v-model="item.val" type="date" placeholder="选择日期" v-if="item.type==='date'&&item.isEdit===true"></el-date-picker>
									<el-input v-model="item.val"  v-if="item.type==='date'&&item.isEdit==false" v-bind:class="{'el-input__hidden':!item.isEdit}"></el-input>
									<el-input type="textarea" v-model="item.val" v-if="item.type==='textarea'&&item.isEdit==true" ></el-input>
									<el-input type="textarea" v-model="item.val" v-if="item.type==='textarea'&&item.isEdit==false" ></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<div class="sub-forms">
							<div class="sub-forms-title">报销明细</div>
							<div class="form-content">
									<el-row>
										<el-col :xs="8" :sm="8" :md="8" :lg="8">
										  	<el-form-item label="申请人：" prop="name">
											    <el-input v-model="FormData.name"></el-input>
											</el-form-item>
										</el-col>
										<el-col :xs="8" :sm="8" :md="8" :lg="8">
											<el-form-item label="联系电话：" prop="tel">
											    <el-input v-model="FormData.tel"></el-input>
											</el-form-item>
										</el-col>
									  	<el-col :xs="8" :sm="8" :md="8" :lg="8">
											<el-form-item label="单据编号：" prop="contactNo">
											    <el-input v-model="FormData.contactNo"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row>
									<el-col :xs="8" :sm="8" :md="8" :lg="8">
									  	<el-form-item label="申请部门：" prop="department" >
										    <el-input v-model="FormData.department"></el-input>
										</el-form-item>
									</el-col>
									<el-col :xs="8" :sm="8" :md="8" :lg="8">
										<el-form-item label="附件张数：" prop="attachments">
										    <el-input v-model="FormData.attachments"></el-input>
										</el-form-item>
									</el-col>
								  	<el-col :xs="8" :sm="8" :md="8" :lg="8">
										<el-form-item label="单据日期：" prop="dateTime">
										    <el-date-picker v-model="FormData.dateTime" type="date" placeholder="选择日期" ></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								</div>
						</div>
						<el-form-item>
							<el-button type="primary" @click="submitForm('FormData')">立即创建</el-button>
				   			<el-button @click="resetForm('FormData')">重置</el-button>
			   			</el-form-item>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	import httpService from '../components/tools/httpService.js'
	import common from  '../components/tools/common.js'
	import buttonTop from '../components/common/buttonTop.vue'
	export default{
		components:{
			buttonTop
		},
		data(){
			return{
				loading2:true,
				FormTemplate:{
					ID : "138a026c-f4b7-431c-901d-03107c4cac4b",
					TemplateCode : "BXDFY",
					Name : "日常费用报销单",
					TypeID : "41bdbb1d-5f7f-409a-9ec4-37d870d2cff4",
					FormNoRule : "$JW$#yyyy##mm##dd#*(1)4(Year)*",
					VersionCode : "V4"
				},
				FormData:[{
					id:1,
					attrName:'申请人',
					type:'input',
					isEdit:false,
					disabledInput:false,
					val:'于志秋',
					SpaceRow:8
				},{
					id:2,
					attrName:'联系电话',
					type:'input',
					isEdit:true,
					disabledInput:false,
					val:'',
					SpaceRow:8
				},
				{
					id:3,
					attrName:'单据编号',
					type:'input',
					isEdit:false,
					disabledInput:false,
					val:0,
					SpaceRow:8
				},
				{
					id:4,
					attrName:'申请部门',
					type:'select',
					isEdit:true,
					disabledInput:false,
					val:'',
					SpaceRow:8,
					departments:[{
						id:41,
						value:'财务部门',
						label:''
					},
					{
						id:41,
						value:'技术部门',
						label:''
					}]
				},
				{
					id:5,
					attrName:'附件张数',
					type:'input',
					isEdit:true,
					disabledInput:false,
					val:0,
					SpaceRow:8
				},{
					id:6,
					attrName:'单据日期',
					type:'date',
					isEdit:true,
					disabledInput:false,
					val:'',
					SpaceRow:8
				},
				{
					id:7,
					attrName:'摘要',
					type:'textarea',
					isEdit:true,
					disabledInput:false,
					val:'',
					SpaceRow:24
				}]
			}
		},
		methods:{
			selectChange(val){
				console.log(val);
			},
			submitForm(FormData) {
		        this.$refs[FormData].validate((valid) => {
			        if (valid) {
						//提交时转换时间的值
						/*this.FormData.loading = true;*/
			          	/*var d = new Date(this.FormData.date1);
				        var date = d.getDate();
				        var month = d.getMonth() + 1;
				        if (month < 10) {
					        month = '0' + month;
					    }
					    if (date < 10) {
					        date = '0' + date;
					    }
					    this.ruleForm.date1=d.getFullYear() + '-' + month + '-' + date;  
				        console.log(this.ruleForm.date1)*/
			            setTimeout(() => {
			            	alert('submit!');
				          /*this.FormData.loading = false;*/
				        }, 50);
			        } else {
			            console.log('error submit!!');
			            return false;
		          	}
			    })
			}
		},
		created(){
			setTimeout(() => {
	          	this.loading2 = false;
	        }, 1000);
		}
	}
</script>

