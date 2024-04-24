import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import Home from '@/view/home.vue'

const routes = [
	{
		path: "/home",
		name: "首页",
		component: Home
	},
	{
		path: "/bpp",
		name: "B页面",
		beforeEnter: (to, from, next:any) => {
			const data = { message: 'Hello from beforeEnter!' };
			// 模拟异步操作
			to.params = {
				name:"小明"
			}
			setTimeout(() => {
				next()
			}, 500)
		},
		component: () => import("@/view/bpp.vue")
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

export default router