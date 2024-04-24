<template>
	<p>父组件的值-{{value}}</p>
	<input type="text" v-model="num1" />
	<input type="text" v-model="num2"/>
	<p>最终的值{{num3}}</p>
	
	<button @click="changeArray">修改数组/对象</button>
	<p>数组：{{array}}</p>
	<p>对象：{{state.obj.a}}</p>
</template>

<script setup>
	import { reactive } from 'vue';
import { watchEffect } from 'vue';
import { computed,defineProps ,ref } from 'vue';
	
	
	const props = defineProps({
		value:String
	})
	
	let array = reactive([])
	let state = reactive({
		obj:{
			a:1,
			b:2
		}
	})
	const changeArray = () => {
		array = [...array, 1];
		state.obj = {
			a:Math.random(),
			b:Math.random()
		}
	}
	// 会监听该watchEffect引用的值/对象属性 数组/对象 引用类型除外
	watchEffect(() => {
		console.log(array)
		console.log('array改变-watchEffect')
	})
	
	watchEffect(() => {
		console.log(state.obj)
		console.log('state.obj改变-watchEffect')
	},{deep:true})
	
	let num1 = ref(0)
	let num2 = ref(0)
	
	const num3 = computed(()=>{
		return Number(num1.value) * Number(num2.value)
	})
	
	// 会监听该watchEffect引用的值 数组除外
	watchEffect(() => {
		console.log(num1)
		console.log('num1改变-watchEffect')
	})
	
	watchEffect(() => {
		console.log(num2)
		console.log('num2改变-watchEffect')
	})
	
	watchEffect(() => {
		console.log(num3)
		console.log('num3改变-watchEffect')
	})
</script>