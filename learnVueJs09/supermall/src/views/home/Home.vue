<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<recommend-view :recommends="recommends"></recommend-view>
		<tab-control :titles="['流行', '新款', '精选']"
								 class="tab-control"
								 @tabClick="tabClick"/>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import TabControl from 'components/content/tabControl/TabControl'
	
	import RecommendView from './childComps/RecommendView'
	import {getHomeMultidata} from 'network/home'
	import {Swiper, SwiperItem} from 'components/common/swiper'
	
	export default {
		name: 'Home',
		components: {
			NavBar,
			RecommendView,
			TabControl
		},
		data() {
			return {
				banners: [],
				recommends: [],
			}
		},
		created() {
			// 1.请求多个数据
			this.getHomeMultidata()
		},
		methods: {
			/*
			 * 事件监听相关的方法
			 */
			tabClick(index) {
				console.log(index);
			},
			
			/*
			 * 网络请求相关方法
			 */
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					res.data.length = 10;
					console.log(res.data);
					this.banners = res.data;
					res.data.length = 4;
					this.recommends = res.data;
				})
			}
		}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
	}
	.home-nav {
		color: #fff;
		background-color: #ff8198;
	}
	.tab-control {
		position: sticky;
		top: 44px;
	}
	li {
		height: 500px;
	}
</style>
