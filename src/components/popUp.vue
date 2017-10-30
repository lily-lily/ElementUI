<style lang="less" scoped>
	.pop {
		width: 100px;
		height: 0px;
		background-color: #fff;
		box-shadow: 0px 0px 10px #888888;
		overflow: hidden;
		.item{
			line-height: 25px;
			color:#333;
		}
	}
</style>
<template>
	<div class="pop">
        <div class="item" v-for="(todo,index) in selectList">
        	     {{todo.title}}
        </div>
	</div>
</template>

<script>
	export default {
		name: 'popUp',
		data() {
			return {

			}
		},
		props: {
			selectList: {
				type: Array,
				default: [{
					title: '全部',
				}, {
					title: '地铁房'
				}, {
					title: '地图找房'
				}, {
					title: '成交房源'
				}]
			}

		},
		methods: {
			pop(e) {

			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->