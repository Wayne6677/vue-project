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
				console.log(res.data.lists[1].events)
				this.datalist=res.data.lists[1].events
			})
		}
	}
</script>
<style scoped lang="scss">
	.box_2{
		margin-top: 35px;
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
				    display: -ms-flexbox;
				    display: -webkit-box;
				    display: flex;
				    -ms-flex-direction: row;
				    -webkit-box-orient: horizontal;
				    -webkit-box-direction: normal;
				    flex-direction: row;
				    -ms-flex-wrap: wrap;
				    flex-wrap: wrap;
				    -ms-flex-line-pack: end;
				    align-content: flex-end;
				    -ms-flex-align: end;
				    -webkit-box-align: end;
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