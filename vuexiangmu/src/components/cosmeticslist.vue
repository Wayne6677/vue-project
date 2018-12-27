<template>
	<div>
		<div class="nowPlayingList" v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-immediate-check = "false"
			  infinite-scroll-distance="0">
		<div class="box_3" v-for="data in datalist" :key="data.eventId">
			<div>
				<a href="javascript:;">
					<img :src="data.imageUrl" alt="">
					<div>
						<div>
							<span>{{data.englishName}}</span>
							<span>{{data.chineseName}}</span>
							<span>{{data.discountText}}</span>
						</div>
					</div>
				</a>
			</div>
		</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				datalist:[],
				loading:false,
				current:1,
				total:0

			}
		},
		mounted(){
			axios({
				url:"http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1545902114549&summary=f0fb00703a2a9c4073d4e3e7e2c9687c&platform_code=H5",
				method:'get'
			}).then(res=>{
				console.log(res.data.eventList)
				this.datalist=res.data.eventList
				this.total = res.data.total
				
			})
		},
		methods:{
		loadMore(){
				console.log('到底了')

				if(this.total == this.datalist.length){
					this.loading = true 
					return;
				}

				this.current++;
				axios({
					url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=${this.current}&timestamp=1545902467826&summary=874ee10359c4b7f560ebe0d427e90713&platform_code=H5
`,
					method: 'get',

				}).then(res=>{
					console.log(res.data.eventList) //res.data 才是后端返回的接口 axios自己在外面包装的data
					// [1,2,3] [4,5,6]
					this.datalist= [...this.datalist,...res.data.eventList]
				})

			}
		}
	}
</script>
<style scoped lang="scss">
	.box_2{
		margin-top: 5px;
		margin-bottom: 5px;
		height: 24px;
		width: 144px;
		img{
		width: 100%;
		height: 100%;
		}
	}
	.box_3{
		margin-top:20px;
		div{
			width: 375px;
			height: 226px;
			position: relative;
			a{
				width: 100%;
				color: #fff;

			img{
				width: 100%;
				height: 100%;

			}
			div{	width: 345px;
				    height: 104px;
					display: flex;
					 flex-direction: row;
				    flex-wrap: wrap;
					align-content: flex-end;
					align-items: flex-end;
				    position: absolute;
				    left: 0;
				    bottom: 0;
				    div{    width: 100%;
						    height: auto;
						    padding-left: 10px;
						    text-align: left;
						span{
								display: block;
							    line-height: 16px;
   								 font-size: 16px;
				  		  }
				    }
				    
				}
			}
		}
	}
</style>