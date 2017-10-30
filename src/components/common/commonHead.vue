<style lang="less" scoped>

.thome {
		.header {
			background-color: #2C3E50;
			.nav {
				height: 30px;
				color: #fff;
				font-size: 12px;
				line-height: 30px;
				.nav_left {
					float: left;
					.tab {
						float: left;
						padding: 0px 15px;
						cursor: pointer;
						position: relative;
						.selectDown{
							position: absolute;
							top:30px;
							left:-15px;
						}
					}
					.tab:hover {
						color: #ccc;
					}
				}
				.nav_right {
					float: right;
					.login,
					.tel {
						float: left;
						padding: 0px 15px;
						cursor: pointer;
					}
				}
			}
		}
	}

@keyframes bounceInBottom {
	form 0% {
		height:0px;
	}	
	to {
		height: 100px;
	}
}
@keyframes bounceInBottomNor {
	form 0% {
		height:100px;
	}	
	to {
		height: 0px;
	}
}
.bounceInBottom {
	animation: bounceInBottom 1s forwards;
}
.bounceInBottomNor{
	animation: bounceInBottomNor 1s forwards;
}

</style>
<template>
	<div class="thome">
		<div class="header">
			<div class="nav layout">
				<div class="nav_left">
					<div class="tab" v-for="(todo,index) in tabArr" @click="select(todo.router)" v-on:mouseover="navOver(index)" v-on:mouseout="navOut(index)">
						{{todo.title}}
						<popUp v-if="index==1"  class="selectDown" v-bind:class="{bounceInBottom:show,'bounceInBottomNor':!show}"></popUp>
					</div>
				</div>
				<div class="nav_right">
					<div class="login">
						<span @click="select('login')">登录</span>/<span @click="select('register')">注册</span>
					</div>
					<div class="tel">热线电话：1010-9666</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import popUp from './popUp.vue'
	export default {
		name: 'hello',
		data() {
			return {
				tabArr: [{
					title: '首页',
					router: 0
				}, {
					title: '二手房',
					router: 1
				}, {
					title: '新房',
					router: 2
				}, {
					title: '租房',
					router: 3
				}, {
					title: '小区',
					router: 4
				}],
				show: false
			}
		},
		components: {
			popUp
		},
		methods: {
			select(index) {
				switch(index) {
					case 0:
						alert('跳转首页');
						break;
					case 1:
						alert('跳转二手房');
						break;
					case 2:
						alert('跳转新房');
						break;
					case 3:
						alert('跳转租房');
						break;
					case 4:
						alert('跳转小区');
						break;
					case 'login':
						alert('跳转登录');
						break;
					case 'register':
						alert('跳转注册');
						break;

				}
			},
			navOver(index) {
				console.log('over');
				if(index == 1)this.show = true;
			},
			navOut() {
				console.log('out');
				this.show=false;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->