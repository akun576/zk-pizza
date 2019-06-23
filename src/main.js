// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import store from './store'
//引入axios
import axios from 'axios'
//配置axios
axios.defaults.baseURL='https://wd8134282462azqsqv.wilddogio.com/'
// 全局使用
import citySelector from 'vue2-city-selector'
Vue.use(citySelector)

//路由当行守卫
//全局路由
router.beforeEach((to,from,next)=>{
  console.log(localStorage.getItem('isLogin'))
  // next()
  // next(false)
  // if(to.path=="/admin"){
  //   next('/login')
  // }
  // next(error)
  if(localStorage.getItem('isLogin')){//登录状态
    next()
    // if(to.path=='/login'){
    //   next()
    // }
  }else{//未登录状态的时候
    if(to.path=='/login' || to.path=='/register'||to.path=='/'){
      next()
    }else{
      if(confirm('你登录了吗？请先登录')){
        next('/login')
      }else{
        next(false)
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
