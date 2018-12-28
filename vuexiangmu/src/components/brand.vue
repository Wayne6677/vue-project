<template>
	
 	<introduction></introduction>
</template>

<script type="text/javascript">
	import  introduction from './introduction'
	export default {

		data(){
			return{

			}
		},
		beforeMount(){
				this.$store.commit("hideTabbar")
			},
		components:{
			introduction
		},
		beforeDestroy(){
			this.$store.commit("showTabbar")
		}
		// mounted(){
		// 	console.log(this.$route.params)
		// }
	}
</script>
<style type="text/css" scoped>
	
</style>