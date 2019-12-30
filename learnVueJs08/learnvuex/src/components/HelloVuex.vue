<template>
	<div>
		<h2>{{$store.state.counter}}</h2>
		<h2>{{$store.getters.powerCounter}}</h2>
		<ul>
			<!-- <li v-for="item in more20stu">{{item}}</li> -->
			<li v-for="item in $store.getters.more20stu">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Hellovuex'
	}
</script>

<style scoped>
</style>
