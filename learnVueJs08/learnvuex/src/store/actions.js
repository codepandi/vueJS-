export default {
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
}