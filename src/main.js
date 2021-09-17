 
import Vue from 'vue'
import App from './App'
import router from './router'
import './index.css'
 
import Dialog from 'vue-dialog-loading'

//global config
Vue.use(Dialog )

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");