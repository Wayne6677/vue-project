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
	<ul>
		<li><img src="https://cdn15.mei.com/category/20180801/142ca198982dcad77f2c1634148d1dbd25aecd78fee7fcaf.jpg@150w_200h_2e_75q" alt=""></li>
		<li><img src="https://cdn12.mei.com/category/20180801/142ca198982dcad734e44500f62e7f66dc0bc45b7bb6d783.jpg@150w_200h_2e_75q" alt=""></li>
		<li><img src="https://cdn15.mei.com/category/20180801/142ca198982dcad74a63048d267199d825aecd78fee7fcaf.jpg@150w_200h_2e_75q" alt=""></li>
		<li><img src="https://cdn15.mei.com/category/20180801/142ca198982dcad76541abfd119dfe9f071407a2f321be85.jpg@150w_200h_2e_75q" alt=""></li>
		<li><img src="https://cdn12.mei.com/category/20180801/142ca198982dcad717087a9209b5d1f01ac47f6e1a03bdfe.jpg@150w_200h_2e_75q" alt=""></li>
	</ul>
	<cosmeticslist></cosmeticslist>
	<footerbar></footerbar>

</div>
</template>
<script type="text/javascript">
	import cosmeticslist from './cosmeticslist.vue'
	import axios from 'axios'
	import footerbar from './footer.vue'
	export default {
			data(){
				return{
					datalist:[],
					isShow:false
				}
			},
			components:{
				cosmeticslist,
				footerbar
			},
			mounted(){
				axios({
					url:"http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5",
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
<style  scoped lang="scss">
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
ul{
	    display: -webkit-box;
		    display: flex;
		flex-direction: row;
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    margin: 0 auto;
	li{
		    -webkit-box-flex: 1;
		    flex-grow: 1;
		    text-align: center;
		    height: auto;
		    position: relative;
		    margin: 5px;
		    img{
		    	width: 66px;
		    	height: 90px;
		    }
		
	}
}
	
</style>