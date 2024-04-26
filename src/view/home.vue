<template>
	<div>
		<!-- <input type="text" v-model="name" /> -->
		<p @click="changeName('父组件修改后的值')">我是首页-{{name}}</p>
		<children :value="name" ></children>
	</div>
</template>

<script setup>
	
	import eventEmitter from '@/utils/eventEmitter'
	import bus from '@/utils/bus'
	
	import {ref} from 'vue'
	import children from '@/components/children.vue'
	
	let name = ref('芜湖')
	
	const changeName = (value = '修改后的芜湖') => {
		name.value  = value
	}
	
	eventEmitter.emit('event')
	const data = bus.get("bus")
	console.warn(data)
</script>

<style>
</style>