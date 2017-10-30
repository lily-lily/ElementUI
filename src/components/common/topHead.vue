<style scoped lang="less">
.wrap{
	.header {
	    height: 60px;
	    position: fixed;
	    width: 100%;
	    top: 0;
	    left: 0;
	    padding: 0 20px;
	    z-index: 10;
	    background-color: rgb(15, 135, 255);
	    box-sizing: border-box;
	    .header-logo{
	    	display:inline-block;
	    	vertical-align: middle;
	    	float:left;
	    }
		.header-operations {
		    display: inline-block;
		    float: right;
		    padding-right: 30px;
		    height: 100%;
		    li{
		    	color: #fff;
			    display: inline-block;
			    vertical-align: middle;
			    margin: 0 10px;
			    line-height: 60px;
			    cursor: pointer;
		    }
		}
	}
	.el-row{
		position:relative;
	}
}
</style>
<template>
	<div class="wrap"> 		
		<div class="header">
			<img  class="header-logo" src="../../../static/images/brand.png" alt="element-logo" >
			<ul class="header-operations">
			 	<li>切换主题色</li>
				<li class="header-download is-available">
			        下载主题
			    </li> 
	      		<li>帮助</li>
		       	<li>
			        <span class="header-lang is-active">
			          	中文
			        </span> 
			        <span>/</span> 
			        <span class="header-lang">
			          En
			        </span>
		        </li>
		        <li>
		        	<el-dropdown @command="handleCommand">
		        		<span class="el-dropdown-link" style="color:#fff;">
		        			系统设置
		        		</span>
		        		<el-dropdown-menu slot="dropdown">
						    <el-dropdown-item command="a">修改密码</el-dropdown-item>
						    <el-dropdown-item command="loginOut">注销</el-dropdown-item>
						    <el-dropdown-item command="logoutLogin">退出登录</el-dropdown-item>
						</el-dropdown-menu>
		        	</el-dropdown>
		        </li>
	        </ul>
        </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handleCommand(command) {
				console.log(command)
				if(command=='logoutLogin'){
					const h = this.$createElement;
			        this.$msgbox({
			          title: '提示',
			          message:'确定要退出登录吗？',
			          type: 'warning',
			          showCancelButton: true,
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          beforeClose: (action, instance, done) => {
			            if (action === 'confirm') {
			              instance.confirmButtonLoading = true;
			              instance.confirmButtonText = '执行中...';
			              setTimeout(() => {
			                done();
			                setTimeout(() => {
			                  instance.confirmButtonLoading = false;
			                }, 300);
			              }, 800);
			            } else {
			              done();
			            }
			          }
			        }).then(action => {
			          	this.$message({
			                message: '退出登录成功',
			                duration:'500'
			            });
			          	setTimeout(() => {
				         	this.$router.push({path: '/login'});
				      	},1000);
			        });
				}else if(command==='loginOut'){
					this.$confirm('您确定要注销本次登录吗?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning',
			          beforeClose: (action, instance, done) => {
			            if (action === 'confirm') {
			            	done();
			            } else {
			              done();
			            }
			          }
			        }).then(action => {
			            this.$message({
			                message: '成功注销本次登录',
			                duration:'500'
			            });
			          	setTimeout(() => {
				         	//this.$router.push({path: '/login'});
				      	},1000);
			        });
				}else{
					this.$message('click on item ' + command);
				}
		        
		    }
		}
	}
</script>
