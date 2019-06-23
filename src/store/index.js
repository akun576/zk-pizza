import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// const store = new Vuex.Store();
 
// export default store;
export default new Vuex.Store({
    state:{//vuex的数据源
       menuItems:[],//用来存储菜单管理的数据
       currentUser:localStorage.getItem('currentUser'),//单签用户名
       isLogin:localStorage.getItem('isLogin')//当前登录状态，默认为false
    },
    getters:{//派生状态的数据源相当于conputed
        getMenuItems:state=>state.menuItems,
        //完整写法
        // getMenuItems(state){
        //     return state.menuItems
        // }
        getCurrentUser:state=>state.currentUser,
        getIsLogin:state=>state.isLogin
    },
    mutations:{//更改state状态源的事件回调函数
        //1增加一条数据
        pushMenuItems(state,data){
            state.menuItems.push(data)
        },
        //2获取所有数据
        setMenuItems(state,data){
            state.menuItems=data
        },
        //删除一条数据
        deleteMenuItems(state,data){
            state.menuItems.splice(data,1)
        },
        //用于用户登录时存储状态和退出时清空状态的判断
        userStatus(state,data){
            if(data){//如果登录成功，传入data数据-用户名
                console.log(data)
                state.isLogin=true
                state.currentUser=data
                //使用离线存储
                localStorage.setItem('isLogin',true)
                localStorage.setItem('currentUser',data)
            }else{
                state.isLogin=false
                state.currentUser=null
                localStorage.clear()
            }
        }
    },
    actions:{//action提交的是mutation
        setUser({commit},user){
            commit('userStatus',user)
        }
    }
})