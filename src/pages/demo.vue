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
					background-color: #fafafa;
					.el-col{
						border:none;
						margin-bottom:10px;
						.el-form-item /deep/ .el-form-item__content{
							font-size: 13px;
						}
						.el-form-item /deep/ .el-form-item__label{
							padding-right: 0px;
							/*white-space: nowrap;*/
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
				clear:both;
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
				.form-content{
					background-color: rgb(236, 236, 236);
					padding: 10px;
					.el-row{
						background-color: rgb(236, 236, 236);
					}
					.el-icon-setStyle{
						font-size:10px;
						color:#666;
						float: right;
					}
				}
				.addBtn{
					float: right;
					margin-right:10px;
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
				<el-form  ref="crfyFormData" :model="crfyFormData" label-width="80px" size="mini" v-cloak v-loading="loading2" element-loading-text="拼命加载中"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
					<el-row>
					  <el-col :span="8"><div class="grid-content bg-purple">深圳珈伟光伏照明股份有限公司{{FormTemplate.VersionCode}}</div></el-col>
					  <el-col :span="8"><div class="grid-content bg-purple">{{FormTemplate.Name}}</div></el-col>
					  <el-col :span="8"><div class="grid-content bg-purple"><img src="" alt="条形码" /></div></el-col>
					</el-row>
					<!--start 直接取值-->
					<div class="form-content">
						<el-row>
							<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
							  	<el-form-item label="申请人：" prop="PersonID">
								    <el-input v-model="crfyFormData.FormData.PersonID" :readonly="true"></el-input>
								   <!-- <el-input v-model="item.val" v-if="item.type==='input'&&item.isEdit==true" required="true"></el-input>
								    <el-select v-model="item.val"  placeholder="请选择"  v-if="item.type==='select'&&item.isEdit===true" @change="selectChange" required="true">
									    <el-option
									      v-for="departPerson in item.select"
									      :key="departPerson.value"
									      :label="departPerson.label"
									      :value="departPerson.value">
									    </el-option>
									</el-select>
									<el-input v-model="item.val"  v-if="item.type==='select'&&item.isEdit==false" v-bind:class="{'el-input__hidden':!item.isEdit}"></el-input>
									<el-date-picker v-model="item.val" type="date" placeholder="选择日期" v-if="item.type==='date'&&item.isEdit===true"></el-date-picker>
									<el-input v-model="item.val"  v-if="item.type==='date'&&item.isEdit==false" v-bind:class="{'el-input__hidden':!item.isEdit}"></el-input>
									<el-input type="textarea" v-model="item.val" v-if="item.type==='textarea'&&item.isEdit==true" ></el-input>
									<el-input type="textarea" v-model="item.val" v-if="item.type==='textarea'&&item.isEdit==false" ></el-input>-->
								</el-form-item>
							</el-col>
							<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
								<el-form-item label="联系方式：" prop="Telphone">
								    <el-input v-model="crfyFormData.FormData.Telphone"></el-input>
								</el-form-item>
							</el-col>
							<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
								<el-form-item label="单据编号：" prop="BillCode">
								    <el-input v-model="crfyFormData.FormData.BillCode" :readonly="true"></el-input>
								</el-form-item>
							</el-col>
							<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
								<el-form-item label="申请部门：" prop="DepartmentID">
								    <el-select v-model="crfyFormData.FormData.DepartmentID" :readonly="true"></el-select>
								</el-form-item>
							</el-col>
							<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
								<el-form-item label="附件张数：" prop="AttachmentQuantity">
								    <el-input v-model="crfyFormData.FormData.AttachmentQuantity"></el-input>
								</el-form-item>
							</el-col>
							<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
								<el-form-item label="单据日期：" prop="AuditDate">
								    <el-date-picker  type="date" v-model="crfyFormData.FormData.AuditDate"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col  :xs="24" :sm="24" :md="24" :lg="24" >
								<el-form-item label="OA申请编号：" prop="OAnumber">
								    <el-input  v-model="crfyFormData.FormData.OAnumber"></el-input>
								</el-form-item>
							</el-col>
							<el-col  :xs="24" :sm="24" :md="24" :lg="24" >
								<el-form-item label="单据摘要：" prop="Summary">
								    <el-input  type="textarea" v-model="crfyFormData.FormData.Summary"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<div class="sub-forms" >
							<div class="sub-forms-title">报销明细</div>
							<div class="form-content widget" v-if="crfyFormData.FormData.MXFL_fymx_V2&&crfyFormData.FormData.MXFL_fymx_V2.length > 0" v-for="(item,index) in crfyFormData.FormData.MXFL_fymx_V2">
								<p><b>{{index+1}}</b><span class="el-icon-setStyle" @click="deleteBXMX(index)"><i class="el-icon-close"></i></span></p>
								<el-row>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="费用科目：" prop="Feiyongkemu">
										    <el-input v-model="item.Feiyongkemu" :readonly="true">
										    	<el-button slot="append" icon="search" ></el-button>
										    </el-input>
										</el-form-item>
									</el-col>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="受益部门：" prop="EpenseDepartment">
										    <el-input v-model="item.EpenseDepartment" :readonly="true">
										    	<el-button slot="append" icon="search" ></el-button>
										    </el-input>
										</el-form-item>
									</el-col>
									
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="利润中心：" prop="LIRUN">
										    <el-input v-model="item.LIRUN" :readonly="true">
										    	<el-button slot="append" icon="search" ></el-button>
										    </el-input>
										</el-form-item>
									</el-col>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="受益客户：" prop="Customer">
										    <el-input v-model="item.Customer" :readonly="true">
										    	<el-button slot="append" icon="search" ></el-button>
										    </el-input>
										</el-form-item>
									</el-col>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="部门负责人：" prop="DepartmentHead">
										    <el-input v-model="item.DepartmentHead" :readonly="true"></el-input>
										</el-form-item>
									</el-col>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="费用金额（原）：" prop="Expenseamounty">
										    <el-input v-model="Expenseamounty" ></el-input>
										</el-form-item>
									</el-col>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="币种：" prop="Currency">
										    <el-input v-model="item.Currency" :readonly="true">
										    	<el-button slot="append" icon="search" ></el-button>
										    </el-input>
										</el-form-item>
									</el-col>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="汇率：" prop="Exchangerate">
										    <el-input v-model="Exchangerate"></el-input>
										</el-form-item>
									</el-col>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="费用金额（本）：" prop="AdjustmentAmount">
										    <el-input v-model="item.AdjustmentAmount" :readonly="true"></el-input>
										</el-form-item>
									</el-col>
									<el-col  :xs="8" :sm="8" :md="8" :lg="8" >
										<el-form-item label="调整后金额：" prop="TZHamount">
										    <el-input v-model="item.TZHamount" :readonly="true"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</div>
							<el-form-item>
								<el-button type="primary" @click="addBXMX()" class="addBtn" size="small">添加</el-button>
							</el-form-item>
						</div>
						<el-form-item>
							<el-button type="primary" @click="submitForm()">立即创建</el-button>
				   			<el-button @click="resetForm()">重置</el-button>
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
	import { mapGetters } from 'vuex'
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
				Exchangerate:'1.000',
				Expenseamounty:'0.00',
				crfyFormData:{  //直接页面上写可以输入不报错
					FormTemplate:{
						ID : "138a026c-f4b7-431c-901d-03107c4cac4b",
						TemplateCode : "BXDFY",
						Name : "日常费用报销单",
						TypeID : "41bdbb1d-5f7f-409a-9ec4-37d870d2cff4",
						FormNoRule : "$JW$#yyyy##mm##dd#*(1)4(Year)*",
						VersionCode : "V4"
					},
					FormData:{
						"Telphone" : "",
						"DXamount" : "",
						"BXXJamount" : "",
						"Title" : "",
						"Deptleader" : "",
						"Expenseaccount" : "",
						"OAnumber" : "",
						"Standard" : "",
						"Standardnote" : "",
						"Extend5" : "",
						"BillContent" : "",
						"AdjustAmount" : "",
						"CurrencyTypeID" : "",
						"Extend3" : "",
						"Extend4" : "",
						"Extend1" : "",
						"PayerID" : "",
						"DMBTR" : "",
						"CommitDate" : "",
						"SubmitPersonID" : "",
						"AuditDate" : "",
						"PersonID" : "于志秋",
						"Extend2" : "",
						"PayDate" : "",
						"ID" : "",
						"BillCode" : 0,
						"ExchangeRate" : "",
						"Amount" : "",
						"Repayment" : "",
						"PayStatus" : "",
						"ProjectID" : "",
						"RedBorrowings" : "",
						"DepartmentID" : "财务部门",
						"AttachmentQuantity" : "",
						"AuditAmount" : "",
						"Summary" : "",
						"CompanyID" : "",
						BillInfo_Repayments_V1:[
							{
								"BillID" : "",
								"ID" : "",
								"OrderNumber" : "",
								"LoanBillCode" : "",
								"LoanBillInfoID" : "",
								"SupjectID" : "",
								"LoanBillInfoSubjectID" : "",
								"LoanAmount" : "",
								"RepaymentTotalAmount" : "",
								"DebtAmount" : "",
								"RepaymentAmount" : "",
								"CreateDateTime" : "",
								"CommitDate" : "",
								"LoanDate" : ""
							}
						],
						PaymentInfo_V1:[
							{
								"BillID" : "",
								"ID" : "",
								"ReceiverName" : "",
								"Province" : "",
								"City" : "",
								"BankName" : "",
								"AccountBankName" : "",
								"BankAccount" : "",
								"Amount" : "",
								"OrderIndex" : "",
								"FinancePayMode" : "",
								"IdNumber" : "",
								"Address" : "",
								"CurrencyTypeID" : "",
								"ExchangeRate" : "",
								"DMBTR" : "",
								"Remark" : "",
								"AreaCode" : "",
								"RemittanceUse" : ""
							}
						],
						MXFL_fymx_V2:[
							{
								"Product" : "",
								"BillID" : "",
								"ID" : "",
								"OrderNumber" : "",
								"SupjectID" : "",
								"DepartmentID" : "",
								"Extend1" : "",
								"Extend2" : "",
								"Extend3" : "",
								"Extend4" : "",
								"Extend5" : "",
								"Extend6" : "",
								"Extend7" : "",
								"Extend8" : "",
								"Extend9" : "",
								"Extend10" : "",
								"Feiyongkemu" : "",
								"Riqi" : "",
								"Fyongjine" : "",
								"Shuoming" : "",
								"EpenseDepartment" : "",
								"DepartmentHead" : "",
								"AdjustmentAmount" : "0.00",
								"AdjustmentAmountS" : "",
								"Xuihao" : "",
								"Accountingsubjects" : "",
								"Expenseamounty" : "",
								"Currency" : "人民币",
								"Exchangerate" : "1.000",
								"TZHamount" : "0.00",
								"Customer" : "",
								"Project" : "",
								"LIRUN" : ""
							}
						]
					}
				}

			}
		},
		mounted(){
			/*--获取动态json数据 --*/    //一旦动态获取数据，再输入值时vuex报错，不能更改？??/
			/*crfyFormData() {
				console.log(this.$store.state.table.rcfyList)
                return this.$store.state.table.rcfyList; 
            }*/
           this.changeAmount();
		},
		watch: {
		　　'Exchangerate':'changeAmount',
			'Expenseamounty':'changeAmount'
		},
		methods:{
			changeAmount(){
				var patt = new RegExp(/\.\d{5,}/);
				/*this.AdjustmentAmount = this.TZHamount =
				(parseFloat(this.Exchangerate) *parseFloat(this.Expenseamounty) * 1000) / 1000;
				console.log(this.AdjustmentAmount)*/
				if(this.crfyFormData.FormData.MXFL_fymx_V2.length>0){
					for(var i=0; i< this.crfyFormData.FormData.MXFL_fymx_V2.length;i++){
						this.crfyFormData.FormData.MXFL_fymx_V2[i].Exchangerate = this.Exchangerate;
						this.crfyFormData.FormData.MXFL_fymx_V2[i].Expenseamounty = this.Expenseamounty;
						this.crfyFormData.FormData.MXFL_fymx_V2[i].AdjustmentAmount = ((parseFloat(this.Exchangerate) *parseFloat(this.Expenseamounty) * 1000) / 1000).toFixed(2);
						this.crfyFormData.FormData.MXFL_fymx_V2[i].TZHamount = ((parseFloat(this.Exchangerate) *parseFloat(this.Expenseamounty) * 1000) / 1000).toFixed(2);
						console.log(this.crfyFormData.FormData.MXFL_fymx_V2[i].TZHamount)
					}
				}
			},
			getHttp(){
				let _self= this;
				let url = common.apiUrl.rcfyList;
				httpService.myTable(url,function(suc){
					console.log(suc.body)
					if(suc.status==200){
						_self.$message('获取数据成功');
						/*setTimeout(() => {
				          	param.loading = false;
				        }, 3000);*/
					}
					_self.$store.dispatch('getRcfyList', suc.body);
				},function(err){
					_self.$message({
                    	showClose:true,
                    	message:'服务器内部错误，请重试'
                    });
				})
			},
			deleteBXMX(index){
				console.log(index)
				this.crfyFormData.FormData.MXFL_fymx_V2.splice(index,1);
			},
			addBXMX(){
				const items = [];
				this.crfyFormData.FormData.MXFL_fymx_V2.forEach(function(item) {
					var temp = {
	                    Product : item.Product,
						BillID : item.BillID,
						ID : item.ID,
						OrderNumber : item.OrderNumber,
						SupjectID : item.SupjectID,
						DepartmentID: item.DepartmentID,
						Extend1 : item.Extend1,
						Extend2 : item.Extend2,
						Extend3 : item.Extend3,
						Extend4 : item.Extend4,
						Extend5 : item.Extend5,
						Extend6 : item.Extend6,
						Extend7 : item.Extend7,
						Extend8 : item.Extend8,
						Extend9 : item.Extend9,
						Extend10 : item.Extend10,
						Feiyongkemu :item.Feiyongkemu ,
						Riqi : item.Riqi,
						Fyongjine : item.Fyongjine,
						Shuoming : item.Shuoming,
						EpenseDepartment : item.EpenseDepartment,
						DepartmentHead : item.DepartmentHead,
						AdjustmentAmount :item.AdjustmentAmount ,
						AdjustmentAmountS :item.AdjustmentAmountS ,
						Xuihao : item.Xuihao,
						Accountingsubjects : item.Accountingsubjects,
						Expenseamounty : item.Expenseamounty,
						Currency : item.Currency,
						Exchangerate :item.Exchangerate,
						TZHamount : item.TZHamount,
						Customer : item.Customer,
						Project :item.Project,
						LIRUN : item.LIRUN
	              };
	               items.push(temp);
				});
				this.crfyFormData.FormData.MXFL_fymx_V2.push(items);
				console.log(this.crfyFormData.FormData.MXFL_fymx_V2);
			},
			/*selectChange(val){
				console.log(val);
			},
			submitForm(FormData) {
		        this.$refs[FormData].validate((valid) => {
			        if (valid) {
						//提交时转换时间的值
						console.log(this.FormData)
						console.log(this.FormSub)
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
				        console.log(this.ruleForm.date1)
			            setTimeout(() => {
			            	alert('submit!');
				        }, 50);
			        } else {
			            console.log('error submit!!');
			            return false;
		          	}
			    })
			}*/
		},
		created(){
			/*this.getHttp();*/
			setTimeout(() => {
	          	this.loading2 = false;
	        }, 1000);
		}
	}
</script>

