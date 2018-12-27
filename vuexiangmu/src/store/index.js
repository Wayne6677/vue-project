import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex) 

var MY_HIDE = "hideMeilihuiTabbar"
const store = new Vuex.Store({
	state:{
		isShow:true,
		datalist:[],
		title:""
	},

	actions:{
		getComingSoonListRequest(store){
			console.log("数据请求")

			axios({
				url:"http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1545869935000&summary=fd48a81043d3599f1547e6f4915a0b92&platform_code=H5",
				method: 'get'
				
			}).then(res=>{
				console.log(res.data) 
				store.commit("setDatalist",res.data.eventList)
			})
		}
	},


	mutations:{
		[MY_HIDE](state,payload){
			state.isShow = false;
		},

		showMaizuoTabbar(state,payload){
			state.isShow = true;
		},

		setDatalist(state,payload){
			state.datalist= payload;
		}
	}
})

export default store  