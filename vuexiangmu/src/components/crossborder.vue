<template> 
	<div>
		<div class="crossbanner">
			<img src="http://www.mei.com/static/img/mktbanner-default.cbf29f0.jpg">
		</div>
		<div class="event-item">
			<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check = "false"
  infinite-scroll-distance="0">
				<router-link to="/index" tag="li"  v-for="data in looplist" :key="data.eventId" class="eventli">
					<div class="eventImg">
						<a href="/#"><img :src="data.imageUrl" /></a>
						<div class="eventinfo">
							<span class="air">{{data.siloCategory}}</span>
							<span class="brand">{{data.englishName}}</span>
							<span class="description">{{data.chineseName}}</span>
							<span class="discount">{{data.discountText}}</span>
						</div>
					</div>
				</router-link>
			</ul>
		</div>
	</div> 

</template>

<script type="text/javascript">
	import axios from "axios"
	export default {

		data(){
			return {
				looplist:[],
				loading:false,
				current:1,
				pageIndex:0
			}
		},
		//第一次加载
		mounted(){
			axios({
				url:"http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1545894282024&summary=e371715b554186406f4acdaae2d11bcd&platform_code=H5",
				method:'get',
			}).then(res=>{
				console.log(res.data)
				console.log(res.data.eventList)
				//axios自己在外面包装的data
				this.looplist = res.data.eventList
				this.pageIndex = res.data.pageIndex
			})
		},

		methods:{
			loadMore(){
			console.log('到底了')
			//ajax
			//这里判断请求数据什么时候到头.total
			if(this.pageIndex ==this.current){
				this.loading = true
				return;
			}

			this.current++;

			axios({
				url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=${this.current}&timestamp=1545900751238&summary=38cac31229781f02add7543d08a1b94c&platform_code=H5`,
				method:'get'
			}).then(res=>{
				console.log(res.data)//res.data才是后端返回的接口，axios自己在外面包装的data
				//[1,2,3] [4,5,6]
				this.looplist = [...this.looplist,...res.data.eventList]
			})
			}
		}
	} 
</script>
<style scoped lang="scss">
	.crossbanner{
		img{
			width:100%;
			height:100%;
			overflow:hidden;
			display:block;
		}
	}

	.event-item{
		ul{
			.eventli{
				width:100%;
				margin:10px 0px;
				.eventImg{
					position:relative;
					img{
						margin:0 auto;
						width:345px;
						height:207px;
						display:block;
					}

					.eventinfo{
						position:absolute;
						bottom:20px;
						left:20px;
						height:64px;
						width:100%;

						span{
							display:block;
							color:white;
						}
					}
				}
			}
		}
	}

	
</style>