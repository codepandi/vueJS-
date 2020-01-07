<template>
	<div class="recommend">
		<div class="recommend-item" v-for="(item, index) in recommends" @click="itemClick(index)">
			<!-- <a href=""> -->
				<img :src="item.url" alt="" @load="imgLoad">
				<div>00{{item.id}}</div>
			<!-- </a> -->
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
		},
		data() {
			return {
				isLoad: false
			}
		},
		methods: {
			imgLoad() {
				if(!this.isLoad) {
					this.$emit('imgLoad')
					this.isLoad = true
				}
			},
			itemClick(index) {
				this.$router.push('/detail/' + this.recommends[index].id)
				// this.$router.push({
					
				// })
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
