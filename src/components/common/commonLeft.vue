<style scoped lang="less">
	@textLeft:left;
	.container{
		padding-top:60px;
		height:100%;
		.menu{
			position:fixed;
			top:60px;
			bottom:0;
			left:0;
			overflow:auto;
			overflow-x:hidden;
			min-width:45px;
			width:180px;
			max-height:100vh;
			height: calc(~"100% - 60px"); //解决less与css3冲突
			box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
			-webkit-box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
			.clickChange{
				height:40px;
				padding:10px;
				border:1px solid rgb(30, 171, 225);
				.hiddenLeft{
					float:left;
				}
				.hiddenRight{
					float:right;
				}
			}
			.el-collapse-item{
				text-align:@textLeft;
			}
			.el-menu{
				text-align:@textLeft;
			} 
			.el-tree{
				border:none;
				text-align:@textLeft;
				background:none;
			}
			*, :after, :before {
			    box-sizing: inherit;
			}
		}
		.menuHidden{
			width:64px;
		}
		.content{
			padding-left:180px;
			height:100%;
			overflow:auto;
		}
		.contentHidden{
			padding-left:64px;
		}
		.el-menu--collapse .el-submenu .el-menu{
			z-index:999;
		}
	}
</style>
<template>
	<div class="container">
    	<!-- 左侧菜单 -->
        <div class="menu" v-bind:class="{ menu: !isCollapse, 'menuHidden': isCollapse }">
	        <!-- <el-tree :data="leftMenu" node-key="id"  :props="defaultProps"  accordion  highlight-current
	         :default-expanded-keys="[2]"  @node-click="handleNodeClick" @current-change="handleCurrentChange" :filter-node-method="filterNode" ref="leftTree">
	        				</el-tree> -->
			<div v-model="isCollapse" @click="handleCollapse"  class="clickChange clearfix">
				<label v-show="!isCollapse">导航菜单</label>
				<span class="hiddenRight" v-show="!isCollapse"><i class="el-icon-d-arrow-left"></i></span>
				<span  class="hiddenLeft"  v-show="isCollapse"><i class="el-icon-d-arrow-right"></i></span>
			</div>
			<el-menu default-active="/home/main" class="el-menu-vertical-demo" :default-openeds="[1]" unique-opened  router :collapse="isCollapse">
				<template v-for="item in leftMenu">
					<el-menu-item v-if="item.hidden&&item.children.length===0" :index="item.path"><i :class="item.icon"></i>{{item.label}}</el-menu-item>
					<el-submenu v-if="!item.hidden&&item.children.length>0" :index="item.label">
					    <template slot="title">
					      <i :class="item.icon"></i>
					      <span slot="title">{{item.label}}</span>
					    </template>
					      <el-menu-item v-for="subcategory in item.children" :key="1" v-if="!subcategory.hidden&&subcategory.children&&subcategory.children.length>0" :index="subcategory.path"><i :class="subcategory.icon"></i>{{subcategory.label}}</el-menu-item>
					</el-submenu>
				</template>
			</el-menu>
        </div>
    </div>
</template>

<script>
	export default{
		data(){
			return{
				isCollapse:false,
				leftMenu:[
				{
					id:2,
					label:'页面一',
					hidden:true,
					path:'/',
					icon:'el-icon-message',
					children:[]
				},{
					id:3,
					label:'页面二',
					hidden:false,
					path:'/home/hello',
					icon:'el-icon-menu',
					children:[{
						id:5,
						label:'页面2-1',
						path:'/home/hello',
						hidden:false,
						icon:'el-icon-menu',
						children:[{
							id:8,
							label:'页面2-1-1',
							path:'/home/hello',
							hidden:false,
							icon:'el-icon-menu',
						},{
							id:9,
							label:'页面2-1-2',
							path:'/home/hello',
							hidden:false,
							icon:'el-icon-menu',
						}]
					}]
				},{
					id:4,
					label:'页面三',
					hidden:false,
					icon:'el-icon-setting',
					path:'/home/form',
					children:[{
						id:6,
						label:'页面3-1',
						path:'/home/form',
						hidden:false,
						icon:'el-icon-setting',
						children:[{
							
						}]
					},{
						id:7,
						label:'页面3-2',
						path:'/home/demo',
						hidden:false,
						icon:'el-icon-setting',
						children:[{
							
						}]
					},{
						id:61,
						label:'页面3-3',
						path:'/home/hello',
						hidden:false,
						icon:'el-icon-setting',
						children:[{
							
						}]
					},{
						id:62,
						label:'页面3-2',
						path:'/home/hello',
						hidden:false,
						icon:'el-icon-setting',
						children:[{
							
						}]
					},{
						id:63,
						label:'页面3-2',
						path:'/home/hello',
						hidden:false,
						icon:'el-icon-setting',
						children:[{
							
						}]
					},{
						id:64,
						label:'页面3-2',
						path:'/home/hello',
						hidden:false,
						icon:'el-icon-setting',
						children:[{
							
						}]
					},{
						id:65,
						label:'页面3-2',
						path:'/home/hello',
						hidden:false,
						icon:'el-icon-setting',
						children:[{
							
						}]
					}]
				},
				/*{
					id:11,
					label:'页面一',
					hidden:true,
					path:'/home/main',
					icon:'el-icon-message',
					children:[]
				},
				{
					id:12,
					label:'页面一',
					hidden:true,
					path:'/home/main',
					icon:'el-icon-message',
					children:[]
				},
				{
					id:13,
					label:'页面一',
					hidden:true,
					path:'/home/main',
					icon:'el-icon-message',
					children:[]
				}*/],
			}
		},
		methods:{
			handleCollapse:function(){
				this.isCollapse = !this.isCollapse;
			},
		}
	}
</script>

