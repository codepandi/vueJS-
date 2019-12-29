<template>
	<div id="app">
		<h2>我是组件App</h2>
		<!-- 普通路由 -->
		<!-- <router-link to="/home">首页</router-link> -->
		<!-- <router-link to="/about">关于</router-link> -->
		
		<!-- 修改标签 -->
		<!-- <router-link to="/home" tag="button">首页</router-link> -->
		
		<!-- 取消浏览记录 -->
		<!-- <router-link to="/home" tag="button" replace>首页</router-link> -->
		
		<!-- 修改选中类名 -->
		<!-- <router-link to="/home" active-class="active">首页</router-link> -->
		<!-- <router-link to="/about" active-class="active">关于</router-link> -->
		
		<!-- 通过代码的方式修改路径 -->
		<!-- <button @click="homeClick">首页</button> -->
		<!-- <button @click="aboutClick">关于</button> -->
		
		<router-link to="/home">首页</router-link>
		<router-link to="/about">关于</router-link>
		<router-link :to="'/user/' + userId">用户</router-link>
		<!-- <router-link to="/profile">档案</router-link> -->
		<router-link :to="{
			path: '/profile',
			query: {
				name: 'pan',
				age: 19,
				height: 188
			}
		}">档案</router-link>
		
		<button @click="userClick">用户</button>
		<button @click="profileClick">档案</button>
		
		<keep-alive exclude="Profile">
			<router-view></router-view>
		</keep-alive>
		
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
					userId: 'wangwu',
					
			}
		},
		methods: {
			homeClick() {
				// 通过代码的方式修改路径 vue-router
				// push => pushState
				// this.$router.push('/home')
				
				// 没有历史记录
				this.$router.replace('/home')
			},
			aboutClick() {
				// 通过代码的方式修改路径 vue-router
				// push => pushState
				// this.$router.push('/about')
				
				// 没有历史记录
				this.$router.replace('/about')
			},
			userClick() {
				this.$router.push('./user/' + this.userId)
			},
			profileClick() {
				this.$router.push({
					path: '/profile',
					query: {
						name: 'kobe',
						age: 20,
						height: 199
					}
				})
			}
		}
	}
	
	
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.router-link-active {
		color: #f00
	}

	.active {
		color: #f0f
	}
</style>
