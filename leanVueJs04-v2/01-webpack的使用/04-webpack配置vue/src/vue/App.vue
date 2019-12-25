<template>
	<div>
		<h2 class="title">{{msg}}</h2>
		<button>按钮</button>
		<h2>{{name}}</h2>
		<Cpn></Cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn'
	
	export default {
		name: 'App',
		data() {
			return {
				msg: 'Hello world',
				name: 'pan'
			}
		},
		components: {
			Cpn
		}
	}
</script>

<style scoped>
	.title {
		color: green;
	}
</style>
