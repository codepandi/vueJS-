<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<scroll class="content"
		 ref="scroll" 
		 :probe-type="3" 
		 @scroll="contentScroll" 
		 :pull-up-load="true" 
		 @pullingUp="loadMore">
			<recommend-view :recommends="recommends"></recommend-view>
			<tab-control :titles="['流行', '新款', '精选']"
									 class="tab-control"
									 @tabClick="tabClick"
									 ref="tabControl"/>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>7</li>
				<li>8</li>
				<li>9</li>
				<li>10</li>
				<li>11</li>
				<li>12</li>
				<li>13</li>
				<li>14</li>
				<li>15</li>
				<li>16</li>
				<li>17</li>
				<li>18</li>
				<li>19</li>
				<li>20</li>
			</ul>
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import Scroll from 'components/common/scroll/Scroll'
	import TabControl from 'components/content/tabControl/TabControl'
	import BackTop from 'components/content/backTop/BackTop'
	
	import RecommendView from './childComps/RecommendView'
	import {Swiper, SwiperItem} from 'components/common/swiper'
	import {getHomeMultidata} from 'network/home'
	import {debounce} from 'common/utils'
	
	export default {
		name: 'Home',
		components: {
			NavBar,
			RecommendView,
			TabControl,
			Scroll,
			BackTop
		},
		data() {
			return {
				banners: [],
				recommends: [],
				isShowBackTop: false,
				tabOffsetTop: 0
			}
		},
		created() {
			// 1.请求多个数据
			this.getHomeMultidata()
		},
		mounted() {
			// 获取tabControl的offsetTop
			// 所有的组件都有一个属性 $el:用于获取组件中的元素
			console.log(this.$refs.tabControl.$el.offsetTop);
			this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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
			},
			backClick() {
				console.log('backtop');
				this.$refs.scroll.scrollTo(0,0)
			},
			contentScroll(position) {
				// console.log(position.y);
				if(position.y < -50) {
					this.isShowBackTop = true
				} else {
					this.isShowBackTop = false
				}
			},
			loadMore() {
				console.log('updata');
				this.$refs.scroll.finishPullUp()
			}
		}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
		height: 100vh;
		position: relative;
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
		height: 30px;
	}
	.content {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	/* .content {
		height: calc(100% - 93px);
		margin-top: 44px;
	} */
</style>
