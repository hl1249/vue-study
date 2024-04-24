import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import Home from '@/view/home.vue'

const routes  = [
	{
		path:"/home",
		name:"首页",
		component:Home
	},
	{
		path:"/bpp",
		name:"B页面",
		component:() => import("@/view/bpp.vue")
	}
]

const router = createRouter({
	history:createWebHistory(),
	routes:routes 
})

export default router