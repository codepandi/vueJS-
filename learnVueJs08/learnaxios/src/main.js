import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.axios的基本使用
axios({
	url: 'http://httpbin.org/',
	method: 'get'
}).then(res => {
	console.log(res);
})

axios({
	url: 'http://httpbin.org/',
	// 专门针对get请求的参数拼接
	params: {
		type: 'pop',
		page: 1
	}
}).then(res => {
	console.log(res);
})

// 2.axios发送并发请求
axios.all([
	axios({
		url: 'http://httpbin.org/',
	}),
	axios({
		url: 'http://httpbin.org/',
	})
]).then(results => {
	console.log(results);
})

axios.all([
	axios({
		url: 'http://httpbin.org/',
	}),
	axios({
		url: 'http://httpbin.org/',
	})
]).then(axios.spread((res1, res2) => {
	console.log(res1);
	console.log(res2);
}))

// axios相关配置
axios.defaults.baseURL = 'http://httpbin.org/'
axios.defaults.timeout = 5000

axios.all([
	axios({
		url: '/anything',
	}),
	axios({
		url: '/anything',
	})
]).then(axios.spread((res1, res2) => {
	console.log(res1);
	console.log(res2);
}))
