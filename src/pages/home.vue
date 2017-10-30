<style lang="less" scoped>
	.home {}
</style>
<template>
	<div class="home">
		<commonHeader></commonHeader>
		<commonLeftMenu></commonLeftMenu>
		<commonContent></commonContent>
		<!--<div class="block">
			<span class="demonstration">页数较少时的效果</span>
			<el-pagination layout="prev, pager, next" :total="50">
			</el-pagination>
		</div>
		<div class="block">
			<span class="demonstration">完整功能</span>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="400">
			</el-pagination>
			<div class="block">
                <el-pagination :total="total" :current-page="currentPage3" layout="total,prev, pager, next, jumper" :page-size="10" @current-change="handleCurrentChange">
                </el-pagination>
            </div>
		</div>-->

	</div>
</template>

<script>
	import commonHeader from '../components/common/topHead.vue'
	import commonLeftMenu from '../components/common/commonLeft.vue'
	import commonContent  from '../components/common/center.vue'
	export default {
		name: 'home',
		data() {
			return {
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 1,
				currentPage4: 4,
				total:400
			}
		},
		components: {
			commonHeader,
			commonLeftMenu,
			commonContent
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->