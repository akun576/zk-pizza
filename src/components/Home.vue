<template>
  <div>
    <!-- 头部轮播图开始 -->
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/swipers/1.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/swipers/2.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/swipers/3.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/swipers/4.jpg" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 轮播图上面的点餐框 -->
      <div class="order-box">
        <div>
          <img src="../assets/swipers/swiper-logo.jpg" alt>
          <div class="order-mask text-center">
            <h5 class="text-info">欢迎来到MY-PIZZA点餐系统</h5>
            <h5 class="text-info">这里有各种各样的披萨</h5>
            <button class="btn btn-primary" @click="jumpOrder">let's order</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 头部轮播图结束 -->
    <!-- nav轮播图开始 -->
    <div class="container">
      <div class="row swiper-nav">
        <div class="col-5">
          <div class="swiper-container swiper2" id="swiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../assets/swipers/6.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../assets/swipers/7.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../assets/swipers/8.jpg" alt>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <div class="swiper-nav-bg"></div>
            <span class="rest-id">{{id}}</span>
          </div>
        </div>
        <div class="col-7 news-list">
          <h3>2018年度媒体报道</h3>
          <ul>
            <li v-for='(newslist,index) in newslists' :key='index'>
              <!-- background:url('../assets/lists/number1.png') -->
              <span :style="{backgroundImage:'url(../../static/lists/'+newslist.bgurl+')'}"></span><a href="">{{newslist.title}}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 头部轮播图结束 -->
    <!-- 历史订单信息组件开始 -->
    <div class='container'>
    <History class='history'></History>
     </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../assets/css/swiper.css";
import History from './about/History'
export default {
  name: "Home",
  data() {
    return {
      id: "1",
      newslists:[
        {bgurl:'number1.png',title:'保障骑手安心无忧送餐路 美团外卖首发《骑手生活安全指南》'},
        {bgurl:'number2.png',title:'MINISO名创优品正式入驻美团闪购 时尚单品30分钟送达'},
        {bgurl:'number3.png',title:'专业食品安全检测团队进驻美团点评 从此舌尖安全有他们守护'},
        {bgurl:'number4.png',title:'Trustdata发布2018上半年外卖份额数据 美团饿了么百度“631”格局三分天下'},
        {bgurl:'number5.png',title:'美团上线闪购业务 以“快”破局助力零售升级'},
        {bgurl:'number6.png',title:'美团城市新青年 外卖骑手正能量图鉴'},
      ]
    };
  },
  components:{
    History
  },
  mounted() {
    var mySwiper1 = new Swiper(".swiper1", {
      loop: true, // 循环模式选项
      effect: "fade",
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    var that = this;
    var mySwiper2 = new Swiper(".swiper2", {
      loop: true, // 循环模式选项
      direction: "vertical", // 垂直切换选项
     autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      on: {
        slideChange: function() {
          //   console.log(this.activeIndex);

          that.id = this.activeIndex;
          if (that.id == 4) {
            that.id = 1;
          }else if(that.id==0){
            that.id=3
          }
          // console.log(that.id);
        }
      }
    });
  },
  methods: {
    jumpOrder() {
      this.$router.push("/menu");
    }
  }
};
</script>

<style scoped>
.swiper1 {
  width: 100%;
  height: 700px;
}
.swiper1 .swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper1 {
  position: relative;
}
.order-box {
  z-index: 1;
  position: absolute;
  width: 300px;
  height: 400px;
  left: 100px;
  top: 150px;
}
.order-box img {
  width: 300px;
  height: 380px;
  opacity: 0.7;
}
.order-box span {
  display: inline-block;
}
.order-mask {
  width: 100%;
  padding-bottom: 10px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  top: 150px;
}
.swiper2 {
  height: 500px;
  position: relative;
}
.swiper2 img {
  height: 450px;
  width: 90%;
}
.swiper-nav {
  margin-top: 20px;
}
.swiper-nav-bg {
  position: absolute;
  left: 10%;
  top: 10%;
  width: 90%;
  height: 450px;
  background: chocolate;
  z-index: -1;
}
.rest-id {
  position: absolute;
  right: 10px;
  bottom: 200px;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  top: 65%;
}
.container{
  padding:10px;
}
.news-list{
  padding-left:60px;
}
.news-list h3{
  height:30px;
  margin-bottom:36px;
}
.news-list ul span{
  display:inline-block;
  /* float:left; */
  width:27px;
  height:23px;
  /* background:url('../assets/lists/number1.png'); */
  background-repeat: no-repeat;
  background-size:100%;
  position:absolute;
  top:3px;
  left:0;

}
.news-list ul li{
  position:relative;
  color:#000;
  padding-left:29px;
  margin-bottom:29px;
  font-size:16px;
  height:40px;
  line-height:20px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;

}
.news-list ul li a{
  /* width:300px; */
  color:#000;
  /* transition:all 0.5s linear; */
}
.news-list ul li a:hover{
  text-decoration:none;
  /* transform:scale(1.5); */
  /* font-weight:bold; */
  font-size:24px;
}
</style>