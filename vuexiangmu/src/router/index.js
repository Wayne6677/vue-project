import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/index"
import Crossborder from "../components/crossborder"
import Login from "../components/login"
import Shoppingcart from "../components/shoppingcar"
import Mobile from "../components/mobile"
import Women from "../components/women"
import Men from "../components/men"
import Cosmetics from "../components/cosmetics"
import Upcoming from "../components/upcoming"
import Lifestyle from "../components/lifestyle"
import Kids from "../components/kids"
import Silo from "../components/silo"
Vue.use(Router) //Vue.use() 明确地安装路由功能

const router = new Router({
	mode:'hash',
	routes:[
		{
			path:'/index',
			component:Index
		},
		{
			path:'/silo',
			component:Silo,
			children:[
				{
					path:'crossborder',
					component:Crossborder
				},
				{
					path:'women',
					component:Women
				},
				{
					path:'men',
					component:Men
				},
				{
					path:'cosmetics',
					component:Cosmetics
				},
				{
					path:'lifestyle',
					component:Lifestyle
				},
				{
					path:'kids',
					component:Kids
				}
			]
		},
		{
			path:'/login',
			component:Login,
			children:[
				{
					path:'mobile',
					component:Mobile
				},
				{
				  path: '',
				  redirect: '/login/mobile'
				} //重定向
			]
		},
		{
			path:'/shoppingcart',
			component:Shoppingcart
		},
		{
			path:'/upcoming',
			component:Upcoming
		},
		{
			path:'*',
			redirect:'/login/mobile'
		}//重定向
	]
})

//全局的路由
router.beforeEach((to,from,next)=>{
	next();
})

export default router;