<template>
	<div>
		<h2>我是用户档案</h2>
		<p>我我是用户档案信息，嘿嘿嘿</p>
		<h2>{{$route.query.name}}</h2>
		<h2>{{$route.query.age}}</h2>
		<h2>{{$route.query.height}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Profile',
		computed: {
			userId() {
				return this.$route.params.userId
			}
		},
		created() {
			console.log('created');
		},
	}
</script>

<style>
</style>
