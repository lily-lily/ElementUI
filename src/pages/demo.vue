<style lang="less" scoped> 
	.demo{
		margin-top: 35px;
		.mainTable{
			margin:0 30px;
			border: 1px solid #0082E6;
			.el-row {
			    background: #e0ecff;
			    height: 60px;
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
					background: #fafafa;
					.el-col{
						border:none;
						.el-form-item{
							label{
								padding-right: 0px;
								white-space: nowrap;
								font-size: 13px;
							}
						}
					}
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
				<el-form ref="designerForm" :model="designerForm" label-width="80px">
					<el-row>
					  <el-col :span="8"><div class="grid-content bg-purple">深圳珈伟光伏照明股份有限公司</div></el-col>
					  <el-col :span="8"><div class="grid-content bg-purple">日常费用报销单</div></el-col>
					  <el-col :span="8"><div class="grid-content bg-purple"><img src="" alt="条形码" /></div></el-col>
					</el-row>
					<div class="form-content">
						<el-row>
							<el-col :span="8">
							  	<el-form-item label="申请人：" prop="name">
								    <el-input v-model="designerForm.name"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="联系电话：" prop="tel">
								    <el-input v-model="designerForm.tel"></el-input>
								</el-form-item>
							</el-col>
						  	<el-col :span="8">
								<el-form-item label="单据编号：" prop="contactNo">
								    <el-input v-model="designerForm.contactNo"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						
						
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
				designerForm:{
					name:'于志秋'
				}
			}
		}
	}
</script>

