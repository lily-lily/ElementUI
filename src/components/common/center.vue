<style lang="less" scoped> 
.center{
	padding-left: 180px;
}
</style>
<template>
	<div class="center">
		 <keep-alive> 
	    	<router-view :key="key"></router-view>
	     </keep-alive> 
	</div>
</template>

<script>
	export default{
		computed: {
		    key() {
		      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
		    }
		}
	}
</script>

