<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a href="">
				<img :src="item.url" alt="">
				<div>00{{item.id}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RecommendView',
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend {
		display: flex;
		background-color: #fff;
	}
	.recommend-item {
		flex: 1;
		margin-top: 10px;
		text-align: center;
	}
	img {
		width: 70px;
		border-radius: 50%;
	}
</style>
