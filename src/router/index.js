import Vue from 'vue'
import Router from 'vue-router'

//1引入路由组组件
//一级路由
import Home from "../components/Home"
import Menu from "../components/Menu"
import Admin from "../components/Admin"
import About from "../components/About"
import Login from "../components/Login"
import Register from "../components/Register"
import Rest from "../components/Rest"
//about二级路由
import Delivery from "../components/about/Delivery"
import Contact from "../components/about/Contact"
import Activity from "../components/about/Activity"
import History from "../components/about/History"

//三极路由
import Person from "../components/about/contact/Person"
import Address from "../components/about/contact/Address"
import Tel from "../components/about/contact/Tel"

//商品详情页路由
import Detail from "../components/Detail"
//页面跳转路由
import Jump from "../components/Jump"
//2配置路由

//3回到页面配置路由导航层和路由内容展示层
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      //路由嵌套
      components:{
        default:Home,
        'delivery':Delivery,
      }
    },
    // {
    //   path:'/home',
    //   name:'Home',
    //   component:Home
    // },
    {
      path:'/menu',
      name:'Menu',
      component:Menu
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      beforeEnter:(to,from,next)=>{
        if(localStorage.getItem('currentUser')=='admin'){
          next()
        }else{
          alert('对不起，你没有管理权限。')
        }
      }
      // [
      //   {
      //     path:'/newpizza',
      //     name:'newpizza',
      //     component:Newpizza
      //   },
      //   {
      //     path:'/newpizza',
      //     name:'newpizza',
      //     component:Newpizza
      //   }
      // ]
    },
    {
      path:'/about',
      name:'About',
      component:About,
      redirect:'/about/history',
      children:[
        {
          path:'/about/delivery',
          name:'Delivery',
          component:Delivery,
        },
        {
          path:'/about/contact',
          name:'Contact',
          component:Contact,
          redirect:'/about/tel',
          children:[
            {
              path:'/about/person',
              name:'Person',
              component:Person,
            },
            {
              path:'/about/address',
              name:'Address',
              component:Address,
            },
            {
              path:'/about/tel',
              name:'Tel',
              component:Tel,
            },
          ]
        },
        {
          path:'/about/activity',
          name:'Activity',
          component:Activity,
        },
        {
          path:'/about/history',
          name:'History',
          component:History,
        },
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/about/detail',
      name:'Detail',
      component:Detail
    },
    {
      path:'/jump',
      name:'Jump',
      component:Jump
    },
    {
      path:'/rest',
      name:'Rest',
      component:Rest
    }
  ],
  mode:'history'
})
