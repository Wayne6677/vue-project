<template>
	<div class="brand" >
		<div class="brand-info">
			<div class="brand-kv">
				<img :src="datalist.brandDetail.brandPageImage" alt="">
				<h1>{{datalist.brandDetail.brandName}}</h1>
			</div>
		</div>
		<div class="brand-title">
				<span>在售商品{{datalist.onSaleTotal}}件 上新{{datalist.newTotal}}件</span>
		</div>
		<div class="brand-story">
			<div :id="changep">
				<p>{{datalist.brandDetail.brandStoryText}}</p>
				<p class="more" @click="handleMore()">{{word}}</p>
			</div>
		</div>
		<div class="donghuadiv">
			<div class="lunbo1">
				<p class="lunbo11">精选上新</p>
				<div class="swiper-container lunbo14">
	    			<div  class="swiper-wrapper  " style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
	    				<div v-for="data,myindex in lunboimg1" class="swiper-slide swiper11" @click="clicklunbo1(myindex)">
	    					<div class="swiper0">
	    						<img :src="data.fileUrl">
	     						<span style="color:black">￥{{data.price}} </span>
	     						<span style="text-decoration:line-through;color:#999"> ￥{{data.marketPrice}}</span>
	    					</div>
	     				</div>
	    			</div>
	 			 </div>
			</div>
			<!-- hot -->
			<div class="lunbo1">
				<p class="lunbo11">人气热销</p>
				<div class="swiper-container lunbo14">
	    			<div  class="swiper-wrapper  " style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
	    				<div v-for="data,myindex in lunboimg2" class="swiper-slide swiper11" @click="clicklunbo2(myindex)">
	    					<div class="swiper0">
	    						<img :src="data.fileUrl">
	     						<span style="color:black">￥{{data.price}} </span>
	     						<span style="text-decoration:line-through;color:#999"> ￥{{data.marketPrice}}</span>
	    					</div>
	     				</div>
	    			</div>
	 			 </div>
			</div>
			
		</div>
	</div>
 	
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default {
			data(){
				return{
					datalist:[],
					isShow:false,
					zhankai:false,
					lunboimg1:[],
					lunboimg2:[]
				}
			},
			methods:{
				handleMore(){
					this.zhankai=!this.zhankai
				}
			},
			computed:{
				changep(){
					if(this.zhankai===true){
						return 'xianshi'
					}else{
						return 'yincang'
					}
				},
				word(){
					if(this.zhankai===true){
						return "收起"
					}else{
						return "展开"
					}
				}
			},


		mounted(){
				axios({
					url:`http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.id}`,

					method:'get'

				}).then(res=>{
					console.log(res.data.body)
					this.datalist=res.data.body;
					this.lunboimg1=res.data.body.newProductTop10
					this.lunboimg2=res.data.body.hotProductTop10

					console.log(this.lunboimg1)

				this.$nextTick(()=>{
					/*引入轮播*/
				var swiper = new Swiper('.swiper-container', {
				    slidesPerView: 3,
				    spaceBetween: 30,
				    pagination: {
				      el: '.swiper-pagination',
				      clickable: true,
				    },
				  });
				})	
				})
			
		}

	}
</script>
<style type="text/css" scoped lang="scss">
 	.brand{
		   	width: 375px;
		   	height: 214px;
	    position: absolute;
	    top: 0;
	    left: 0;
	

	.brand-info{
		   padding-bottom: 10px;
		   .brand-kv{
			    margin-bottom: 15px;
   				 position: relative;
		   	img{
		   		width: 100%;
		   		height: 100%;
		   	}
		   	h1{
		   		    width: 100%;
			    text-align: center;
			    text-transform: uppercase;
			    color: #fff;
			    font-size: 24px;
			    font-weight: 700;
			    position: absolute;
			    left: 0;
			    bottom: 30px;
		   	}

		   }
		}
		.brand-title{

			padding: 16px 0 24px;
			    text-align: center;
			    color: #999;
			    font-size: 12px;
		}
		.brand-story{
			    width: 100%;
			    margin-bottom: 20px;
			    color: #999;
			    line-height: 30px;
			    font-size: 14px;
			    text-indent: 25px;
		#yincang{
			    height: 124px;
			    overflow: hidden;
			    width: 80%;
			    margin: 0 auto;
			    position: relative;
			    display: block;
			   
			    animation: hide .5s ease;
			   
			    animation-fill-mode: forwards;
		}
			#xianshi{

   		
		width: 80%;
		margin: 0 auto;
		color: #999;
		position: relative;
		-webkit-animation: show .5s ease;
    		animation: show .5s ease;
   	 	-webkit-animation-fill-mode: forwards;
    	animation-fill-mode: forwards;
   		padding-bottom: 50px;
	}
	
		.more{
				height: 30px;
				background-color: white;
				opacity: .9;
				position: absolute;
				left: 0;
				bottom:0;
				width: 100%;
				color: #f60;
				text-align: center;
	}
		}

	.lunbo1{
		    width: 360px;
		    overflow: hidden;
		    margin: 0 0 30px 15px;
		.lunbo11{
				  	font-weight: bold;
				  	font-size: 20px;
				  	line-height: 50px;
				  	
				  	padding-left: 10%;
		    }

		}
	}
 

		   	.swiper11{
		   		    width: 135px;
				    height: 225px;
				    margin-right: 5px;
				    text-align: center;

				    img{
				    	width: 100%;
				    	height: 100%;
				    	background-color: red;
				    }
		   	}

	
	
	
</style>