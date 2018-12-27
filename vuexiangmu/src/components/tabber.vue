<template> 
	<header>  
		<div class="hometop">
			<ul class="hometops">
				<li><span>登陆</span></li>
				<li><a><strong class="iconfont icon-fangdajing"><span>FREE PEOPLE 全场2折起</span></strong></a></li>
				<li><i class="iconfont icon-baozhuanhuan"></i></li>
			</ul>
		</div>
		<div class="toMenu"> 
			<ul class="toMenubottom">
				<router-link tag="li" to="/index" activeClass="wzqbht"><span>推荐</span></router-link>
				<router-link tag="li" to="/silo/crossborder" activeClass="wzqbht"><span>海外</span></router-link>
				<router-link tag="li" to="/silo/women" activeClass="wzqbht"><span>女士</span></router-link>
				<router-link tag="li" to="/silo/men" activeClass="wzqbht"><span>男士</span></router-link>
				<router-link tag="li" to="/silo/cosmetics" activeClass="wzqbht"><span>美妆</span></router-link>
				<router-link tag="li" to="/silo/lifestyle" activeClass="wzqbht"><span>家居</span></router-link>
				<router-link tag="li" to="/silo/kids" activeClass="wzqbht"><span>婴童</span></router-link>
				<router-link tag="li" to="/upcoming" activeClass="wzqbht"><span>即将上新</span></router-link>
			</ul>
		</div>
	</header>	
</template>

<script type="text/javascript">
	export default {
	}
</script>

<style scoped lang="scss">

	header{
		position:absolute;
		top:0px;
		left:0px;
		width:100%;
		height: 88px;
		z-index:10;
		color:white;

		.hometops{
			height:45px;
			display:flex; 

			li{
				height:44px;
				line-height:44px;
				text-align:center;
			}

			li:nth-of-type(1){
				width:57px;
			}
			li:nth-of-type(2){
				flex:1;
				background:rgba(143,134,152,.1);
				a{	
					display:inline-block;
					width:200px;
					height:30px;
					line-height:30px;
					margin-top:10px;
				}
			}
			li:nth-of-type(3){
				width:50px;
				i{
					display:inline-block;
					width:100%;
					height:100%;
				}
			}

		}

		.toMenubottom{
			display:flex;
			li{
				flex:1;
			}
		}
	}
</style>