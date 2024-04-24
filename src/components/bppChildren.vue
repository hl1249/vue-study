<template>
	<div>我是B页面的子组件</div>
	<p>我是子组件的值{{value}}</p>
</template>

<script>
	export default{
		props:{
			value:String
		},
		beforeCreate() {
			console.log('children-beforeCreate')
		},
		created() {
			console.log('children-created')
		},
		beforeMount() {
			console.log('children-beforeMount')
		},
		mounted() {
			console.log('children-mounted')
		},
		beforeUpdate() {
			console.log('children-beforeUpdate')
		},
		updated() {
			console.log('children-updated')
		},
		beforeDestroy() {
			console.log('children-beforeDestroy')
		},
		destroyed() {
			console.log('children-destroyed')
		}
	}
</script>

<style>
</style>