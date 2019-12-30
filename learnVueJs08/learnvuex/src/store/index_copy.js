import Vue from 'vue'
import Vuex from 'vuex'

import {
	INCREMENT
} from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
	state: {
		name: 'zhangsan'
	},
	mutations: {
		updateName(state, payload) {
			state.name = payload
		}
	},
	getters: {
		fullname(state) {
			return state.name + '1111'
		},
		fullname2(state, getters) {
			return getters.fullname + '222'
		},
		fullname3(state, getters, rootState) {
			return getters.fullname2 + rootState.counter
		}
	},
	actions: {
		aUpdateName(context) {
			setTimeout(() => {
				context.commit('updateName', 'wangwu')
			}, 1000)
		}
	},
}

const store = new Vuex.Store({
	state: {
		counter: 1000,
		students: [{
				id: 110,
				name: 'pan',
				age: 18
			},
			{
				id: 111,
				name: 'kobe',
				age: 24
			},
			{
				id: 112,
				name: 'james',
				age: 30
			},
			{
				id: 113,
				name: 'curry',
				age: 10
			},
		],
		info: {
			name: 'kobe',
			age: 40,
			height: 1.98
		}
	},
	mutations: {
		// 方法
		[INCREMENT](state) {
			state.counter++
		},
		decrement(state) {
			state.counter--
		},
		// incrementCount(state, count) {
		// 	state.counter += count
		// },
		incrementCount(state, payload) {
			console.log(payload);
		},
		addStudent(state, stu) {
			state.students.push(stu)
		},
		updateInfo(state) {
			state.info.name = 'pan'

			// 可实现响应式添加新属性
			// Vue.set(state.info, 'address', 'luoshanji')

			// 该方式做不到响应式
			// delete state.info.age

			// 可实现响应式删除属性
			// Vue.delete(state.info, 'age')

			// mutation中的方法必须是同步方法,不能使用异步方法
			// setTimeout(() => {
			// 	state.info.name = 'pan'
			// }, 1000)
		}
	},
	actions: {
		// context 上下文
		// aUpdateInfo(context, payload) {
		// 	setTimeout(() => {
		// 		context.commit('updateInfo')
		// 		// console.log(payload)
		// 		console.log(payload.message);
		// 		payload.success()
		// 	}, 1000)
		// }
		aUpdateInfo(context, payload) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit('updateInfo')
					console.log(payload)
					resolve('里面完成了提交')
				}, 1000)
			})
		}
	},
	getters: {
		powerCounter(state) {
			return state.counter * state.counter
		},
		more20stu(state) {
			return state.students.filter(s => s.age > 20)
		},
		more20stuLength(state, getters) {
			return getters.more20stu.length
		},
		moreAgeStu(state) {
			// return function(age) {
			// 	return state.students.filter(s => s.age > age)
			// }
			return age => state.students.filter(s => s.age > age)
		}
	},
	modules: {
		a: moduleA
	}
})

// 3.导出store独享
export default store
