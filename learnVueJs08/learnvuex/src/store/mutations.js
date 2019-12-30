import {
	INCREMENT
} from './mutations-types'

export default {
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
	}