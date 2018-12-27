<template>

	<div class="coupon" v-if="isShow" >
		<a href="javascript:;">
			<img :src="datalist.img" />
		</a>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default {
			data(){
				return{
					datalist:[],
					isShow:false
				}
			},
			mounted(){
				axios({
					url:"http://www.mei.com/appapi/home/newZoneEntrance/v3?credential=rO0ABXNyACdjb20ucmF5b28uY29tbW9uLnBvam8uVXNlckNyZWRlbnRpYWxzVm8AAAAAAAAAAQIAA0wACHBhc3N3b3JkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAJdXNlckVtYWlscQB%2BAAFMAAZ1c2VySWRxAH4AAXhwdAAAdAALMTg1NDEyMzExMDZ0ABMyMDg3MjA4Nzk5OTAwMDkzNDg1",
					method:'get'

				}).then(res=>{
					console.log(res.data.img)
					this.datalist = res.data
					console.log(this.datalist)
					this.$nextTick(()=>{
						this.isShow = true
					})
				})
			}
	}
</script>
<style  scoped lang="scss">
 
 .coupon{ 
 	margin-top: 10px;
	width: 375px;
	a{

		text-decoration:none;
		    width: 100%;
		    height: 100%;
		    overflow: hidden;
		    display: block;
		}
	img{
		width: 100%;
		
	}

 }
	
</style>