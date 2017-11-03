<template>
	<div class="buttonShow">
		<span class="btn-text btn-icon-check"><i class="el-icon-check"></i>提交</span>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped> 
	.buttonShow{
		position: fixed;
		height: 35px;
		border-bottom: 1px solid #d6d6d6;
		text-align: right;
		top:60px;
		left: 180px;
		right:0;
		z-index: 100;
    	background-color: #fff;
		.btn-text {
			color:#20a0ff;
			line-height: 35px;
			&:hover{
				color:#1D8CE0;
			}
		}
		.btn-icon-check{
			.el-icon-check{
				color:#11B95C;
				padding-right: 5px;
			}
		}
	}
</style>