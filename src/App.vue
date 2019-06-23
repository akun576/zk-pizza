<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <div class='container'>
    <router-view name='delivery' class='delivery'></router-view>

    </div>
  </div>
</template>

<script>
//1引入组件
import Header from "./components/Header"
//2 配置组件
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
/* #city {
background: rgba(255, 255, 255, 0.1);
position: absolute;
left: -63px;;
top: -3px;
font-size: 20px;
color: #834418;
border: none;
cursor: pointer;
}
.vcp-panel{
position: absolute !important;
top: 36px !important;
left: 21px !important;
} */
</style>
