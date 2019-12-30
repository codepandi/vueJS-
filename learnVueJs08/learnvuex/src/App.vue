<template>
	<div id="app">
		<h2>-------app内容:modules中的内容------</h2>
		<h2>{{$store.state.a.name}}</h2>
		<button @click="updateName">修改名字</button>
		<h2>{{$store.getters.fullname}}</h2>
		<h2>{{$store.getters.fullname2}}</h2>
		<h2>{{$store.getters.fullname3}}</h2>
		<button @click="asyncUpdateName">异步修改名字</button>
		
		<h2>-------app内容:info对象的内容------</h2>
		<h2>{{$store.state.info}}</h2>
		<button @click="updateInfo">修改信息-同步(mutaiton)</button>
		<button @click="updateInfo1">修改信息-异步(action)</button>
		
		<h2>-------app内容------</h2>
		<h2>{{$store.state.counter}}</h2>
		
		<!-- <button @click="$store.state.counter++">+</button> -->
		<!-- <button @click="$store.state.counter--">-</button> -->
		
		<button @click="addition">+</button>
		<button @click="subtraction">-</button>
		<button @click="addCount(5)">+5</button>
		<button @click="addCount(10)">+10</button>
		<button @click="addStudent">添加学生</button>
		
		<h2>-------app内容:getters相关信息------</h2>
		<h2>{{$store.getters.powerCounter}}</h2>
		<ul>
			<!-- <li v-for="item in more20stu">{{item}}</li> -->
			<li v-for="item in $store.getters.more20stu">{{item}}</li>
		</ul>
		<h2>{{$store.getters.more20stuLength}}</h2>
		<ul>
			<li v-for="item in $store.getters.moreAgeStu(12)">{{item}}</li>
		</ul>
		
		<h2>-------Hello Vuex内容------</h2>
		<Hellovuex></Hellovuex>
	</div>
</template>

<script>
	import Hellovuex from './components/Hellovuex'
	import {INCREMENT} from './store/mutations-types'

	export default {
		name: 'App',
		components: {
			Hellovuex
		},
		methods: {
			addition() {
				this.$store.commit(INCREMENT)
			},
			subtraction() {
				this.$store.commit('decrement')
			},
			addCount(count) {
				// payload 负载
				// 1.普通的提交风格
				// this.$store.commit('incrementCount', count)
				
				// 2.特殊的提交风格
				this.$store.commit({
					type: 'incrementCount',
					count: count
				})
			},
			addStudent() {
				const stu = {id: 114, name: 'alan', age: 35}
				this.$store.commit('addStudent',stu)
			},
			updateInfo() {
				this.$store.commit('updateInfo')
			},
			updateInfo1() {
				// this.$store.dispatch('aUpdateInfo', '我是payload')
				
				// this.$store.dispatch('aUpdateInfo', {
				// 	message: '我是携带信息',
				// 	success: () => {
				// 		console.log('里面已经完成了');
				// 	}
				// })
				
				this.$store
						.dispatch('aUpdateInfo', '我是携带信息')
						.then((res) => {
							console.log(res);
						})
			},
			updateName() {
				this.$store.commit('updateName', 'lisi')
			},
			asyncUpdateName() {
				this.$store.dispatch('aUpdateName')
			}
		},
		// computed: {
		// 	more20stu() {
		// 		return this.$store.state.students.filter(s => s.age > 20)
		// 	}
		// }
	}
</script>

<style>

</style>
