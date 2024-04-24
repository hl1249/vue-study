<template>
	<div>
		<!-- <input type="text" v-model="name" /> -->
		<p @click="changeName('父组件修改后的值')">我是首页-{{name}}</p>
		<children :value="name" :changeName="changeName" @childrenFn="changeName"></children>
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	import children from '@/components/children.vue'
	
	let name = ref('芜湖')
	
	const changeName = (value = '修改后的芜湖') => {
		name.value  = value
	}
</script>

<style>
</style>