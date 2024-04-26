import { createApp } from 'vue'
import router from '@/router'
import './style.css'
import App from './App.vue'


import eventEmitter from '@/utils/eventEmitter'

eventEmitter.on('event',()=>{
	console.warn("我是订阅的数据")
})

import bus from '@/utils/bus'

bus.set('bus',"我是总线的数据")

createApp(App).use(router).mount('#app')
