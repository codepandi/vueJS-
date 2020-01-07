<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
		<div class="img-detail">
			<img src="//hbimg.huabanimg.com/d0c80043d0dba1b540776823d1f00605c230a85bbf544-ENvxiC_fw658" alt="">
		</div>
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar'
	export default {
		name: 'Detail',
		data() {
			return {
				id: null
			}
		},
		components: {
			DetailNavBar
		},
		created() {
			this.id = this.$route.params.id
		}
	}
</script>

<style scoped>
	#detail {
		position: relative;
		z-index: 9;
	}
	.detail-nav-bar {
		background-color: #fff;
	}
	.img-detail img {
		width: 100%;
	}
</style>
