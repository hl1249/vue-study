<template>
	<div>我是B页面</div>
	<bppChildren :value="value"></bppChildren>
	<button @click="changeValue">修改</button>
	<p>路由守卫拿到的值{{data}}</p>
</template>

<script>
	import bppChildren from '@/components/bppChildren.vue'
	import bus from '@/utils/bus'
	export default{
		props: ['data'],
		methods:{
			changeValue(){
				console.log(this.$route)
				//'路由参数 query 和 params'区别是一个附加在url 另一个是存在内存
				console.log(this.$route.params)
				this.value = '修改-传给子组件的值'
			}
		},
		data(){
			return{
				value:"传给子组件的值"
			}
		},
		components:{
			bppChildren
		},
		beforeCreate() {
			bus.set("bus","总线数据的值-修改")
			console.log('B-beforeCreate')
		},
		created() {
			console.log('B-created')
		},
		beforeMount() {
			console.log('B-beforeMount')
		},
		mounted() {
			console.log('B-mounted')
		},
		beforeUpdate() {
			console.log('B-beforeUpdate')
		},
		updated() {
			console.log('B-updated')
		},
		beforeDestroy() {
			console.log('B-beforeDestroy')
		},
		destroyed() {
			console.log('B-destroyed')
		}
	}
</script>

<style>
</style>