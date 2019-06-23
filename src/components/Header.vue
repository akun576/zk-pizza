<template>
  <div>
    <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link class="py-2" active-class="active" exact to="/">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> -->
          <img width="24" height="24" src="../assets/method-draw-image.svg">PIZZA点餐系统
        </router-link>
        <!-- <router-link class="py-2 d-none d-md-inline-block" active-class="active" exact to="/">主页</router-link> -->
        <router-link class="py-2 d-none d-md-inline-block" active-class="active" to="/menu">菜单</router-link>
        <router-link class="py-2 d-none d-md-inline-block" active-class="active" to="/rest">查询餐厅</router-link>
        <router-link class="py-2 d-none d-md-inline-block" active-class="active" to="/admin">管理</router-link>
        <router-link class="py-2 d-none d-md-inline-block" active-class="active" to="/about">关于我们</router-link>
        <template v-if='!isLogin'>
          <router-link class="py-2 d-none d-md-inline-block" active-class="active" to="/login">登录</router-link>
          <router-link class="py-2 d-none d-md-inline-block" active-class="active" to="/register">注册</router-link>
        </template>
          <template v-else>
          <span class='login_out'>{{currentUser}}</span>
          <span class='login_out' @click='clearLogin'>退出登录</span>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLogin() {
      return this.$store.getters.getIsLogin;
    },
    currentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },
  methods:{
    clearLogin(){
      if(confirm('你确定要退出吗？')){
        this.$store.dispatch('setUser','')
        this.$router.push('login')
      }else{
        return false
      }
    }
  }
};
</script>

<style scoped>
.active {
  color: red;
}
.login_out{
  line-height:26px;
  display:inline-block;
  padding:8px 0;
  color: #007bff;
  cursor:pointer;
}
</style>