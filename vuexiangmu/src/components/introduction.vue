<template>
	<div class="brand-info">
		<div class="">
			<img :src="data.brandPageImage" alt="">
		</div>
	</div>
 	
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default {
			data(){
				return{
					data:null
				}
			},


		mounted(){
				axios({
					url:`http://www.mei.com/appapi/brand/viewCms/v3?logoId=${this.$route.params.id}`,
					method:'get'

				}).then(res=>{
					console.log(res.data.body.brandDetail)
					this.data=res.data.body.brandDetail

					this.$nextTick(()=>{
						
					})
				})
			
		}

	}
</script>
<style type="text/css" scoped lang="scss">
	.brand-info{
		   padding-bottom: 10px;
		   div{
		   	width: 375px;
		   	height: 214px;
		   	img{
		   		width: 100%;
		   		height: 100%;
		   	}
		   }
	}
	
</style>