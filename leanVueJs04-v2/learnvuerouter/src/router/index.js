// 配置路由相关的信息
import Router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

import Home from '../components/Home'
import About from '../components/About'

// 1.通过Vue.use(插件),安装插件
Vue.use(Router)

// 2.创建VueRouter对象
const routes = [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/about',
		component: About
	}
]
const router = new Router({
	// 配置路由和组件之间的应用关系
	routes
})

// 3.将router对象传入到Vue实例
export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
