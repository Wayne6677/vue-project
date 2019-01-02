<template>
<div>
	<div class="box" v-if="isShow">
	<a href="javascript:;">
		<img :src="datalist[0].main_image" />
		<div>
			<strong>{{datalist[0].main_title}}</strong>
			<span>{{datalist[0].sub_title}}</span>
			<span>{{datalist[0].description}}</span>
		</div>
	</a>
	</div>
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
					url:"http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5",
					method:'get'

				}).then(res=>{
					console.log(res.data.banners)
					this.datalist=res.data.banners
					this.$nextTick(()=>{
						this.isShow = true
					})
				})
			}
	}
</script>

<style scoped lang="scss">
	 .box{
		width: 375px;
		height: 450px;
		a{
			text-decoration:none;
			    width: 100%;
			    height: 100%;
			    overflow: hidden;
			    display: block;
			    position: relative;
		div{
			     width: 100%;
			    display: -ms-flexbox;
			    display: -webkit-box;
			    display: flex;
			    -ms-flex-pack: start;
			    -webkit-box-pack: start;
			    justify-content: flex-start;
			    -ms-flex-align: center;
			    -webkit-box-align: center;
			    align-items: center;
			    -ms-flex-direction: column;
			    -webkit-box-orient: vertical;
			    -webkit-box-direction: normal;
			    flex-direction: column;
			    position: absolute;
			    left: 0;
			    bottom: 60px;
			    color: #fff;
			strong{
			    margin-bottom: 3px;
			    line-height: 32px;
			    font-size: 26px;
			    font-weight: 700;
			}
				}
		
		img{
			width: 100%;
		}

		}
		
	 }
</style>