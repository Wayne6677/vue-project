<template>
	<div>
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check = "false" infinite-scroll-distance="0">
			<li  v-for="data in productinfo" @click="handleClick(data.productId)" :key="data.productId">
				<span class="brandName">{{data.brandName}}</span>
				<span class="productName">{{data.productName}}</span>
				<span class="price">￥{{data.price}}</span>
				<span class="marketPrice">￥{{data.marketPrice}}</span>
				<img :src="data.imageUrl"/>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	export default {
		data(){
			return {
				productinfo:[],
				loading:false,
				current:1,
				pageIndex:0
			}
		},

		mounted(){
			console.log(this.$route.params)

			axios({
				url:`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.$route.params.id}&key=&sort=&timestamp=1545912512943&summary=b31eb92c41af6e600795695f38702756&platform_code=H5`,
				method: 'get'
			}).then(res=>{
				console.log(res.data) 
			
				this.productinfo= res.data.products
				this.pageIndex  = res.data.pageIndex
			})
		},

		methods:{
			handleClick(id){	
				// this.$router.push(`/productdetail/${id}`);
			},

			loadMore(){
				console.log("到底了")				
				if(this.pageIndex ==this.current){
					this.loading =true
					return;
				}
				this.current++;
				axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.current}&categoryId=${this.$route.params.id}&key=&sort=&timestamp=1545912512943&summary=b31eb92c41af6e600795695f38702756&platform_code=H5`,
					method: 'get'
					
				}).then(res=>{
					console.log(res.data) 
					this.productinfo= [...this.productinfo,...res.data.products]
				})
			} 
		}
	}
</script>

<style type="text/css" scoped lang="scss">
	ul{
		overflow: hidden;
		li{
			// overflow: hidden;
			padding:5px 0 5px 0;
			width: 100%;
			// display: inline-block;
			img{
				display: block;
				width:60%;
			}

			.brandName {
				position: absolute;
				margin-top: 30px;
				margin-left: 220px;
				color:black;
				font-size: 20px;
				font-weight: bold;
				padding-top: 5px;
			}
			.productName{
				position: absolute;
				margin-top: 80px;
				margin-left: 200px;
				color:black;
				font-size: 20px;
				padding-top: 5px;
				width: 40%;
				overflow: hidden;
				text-align: center;
			}
			.price{
				position: absolute;
				margin-top: 200px;
				margin-left: 210px;
				color:red;
				font-size: 20px;
				font-weight: bold;
				padding-top: 5px;
			}
			.marketPrice{
				position: absolute;
				margin-top: 200px;
				margin-left: 290px;
				color:#bbb;
				font-size: 18px;
				padding-top: 5px;
				font-weight: bold;
				text-decoration: line-through;
			}
		}
	}
</style>