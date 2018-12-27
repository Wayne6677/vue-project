<template>
	<div>
		<div class="box_2">
			<img src="data:image/png;base64,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" />
		</div>
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
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				datalist:[]

			}
		},
		mounted(){
			axios({
				url:"http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1545889361521&summary=2b041585baf0e7ea23724b932454c196&platform_code=H5",
				method:'get'
			}).then(res=>{
				console.log(res.data.lists[0].events)
				this.datalist=res.data.lists[0].events
			})
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