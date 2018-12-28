// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

/* eslint-disable no-new */
Vue.use(MintUI);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
