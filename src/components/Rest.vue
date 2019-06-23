<template>
  <div>
    <div class="rest-box">
      <div class="current-city">
        <span>
          <b>当前城市：</b>
        </span>
        <i>
          <b>{{cityName}}</b>
        </i>
        <!-- <a href>切换城市</a> -->
        <span id='qie_box'>
          <!-- <i id='city'>切换城市</i> -->
          <city-selector
            field="city"
            class="city-selector"
            id='city_selector'
            placeholder="切换城市"
            :city-list="cityList"
            v-model="cityId"
          ></city-selector></span>
      </div>
      <div class="rest-key">
        <span>
          <b>餐厅关键字：</b>
        </span>
        <input type="text" class="rest-input" v-model="info" @keyup.enter="restSearch()" placeholder="请输入餐厅地址或则名称">
        <input type="submit" value="查询" class="rest-search"  @click="restSearch()">
        <p>
          <span>礼品卡</span>
          <span>支付宝</span>
        </p>
      </div>
      <div class="rest-line"></div>
      <div class="current-city search-result">
        <i class="current-city-i">
          <b>查询结果如下：</b>
        </i>
        <i>
          <b>热门活动：</b>
        </i>
        <transition name="rslide">
          <span class="span1" :key="id">
            <i>
              <b>·</b>
              {{msg1}}>>
            </i>
            <i>
              <b>·</b>
              {{msg2}}>>
            </i>
          </span>
          <!-- <p>{{text.val}}</p> -->
          <!-- <a href=""><b>·</b>必胜客下午茶</a> -->
        </transition>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div id="panel"></div>
        </div>
        <div class="col-8">
          <div id="container1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 局部引用
import { citySelector } from "vue2-city-selector";
import cityList from "china-city-data";
export default {
  name: "Rest",
  data() {
    return {
      msgs1: ["必胜客六一记", "必胜客六一记"],
      msg1: "必胜客六一记",
      msgs2: ["必胜客下午茶", "必胜客下午茶"],
      msg2: "必胜客下午茶",
      id: 0,
      info: "", //查询的关键字
      placeSearch: "",
      cityId: "",
      cityList,
      cityName:'北京'
    };
  },
  mounted() {
    this.getStart();
    this.run();
  },
  watch: {
    cityId() {
      for(var key in this.cityList){
        var result=this.cityList[key].find((item)=>{
          return item.id==this.cityId
        })
      }
      if(result!=undefined){
        this.cityName=result.name
      }
      console.log(this.cityId);
      if(this.cityId=='110100'||this.cityId=='120100'||this.cityId=='310100'){
        var id = this.cityId.replace(/100$/,'000')
      }else{
        var id=this.cityId
      }
      this.placeSearch.setCity(id);
      this.restSearch("必胜客");
    }
  },
  methods: {
    run() {
      var timer1 = setInterval(() => {
        // console.log(1);
        // this.msg1 ="必胜客六一记"
        this.msgs1.push(this.msgs1[0]);
        this.msgs1.shift();
        this.msg1 = this.msgs1[0];
        this.msgs2.push(this.msgs2[0]);
        this.msgs2.shift();
        this.msg2 = this.msgs2[0];
        this.id == 0 ? (this.id = 1) : (this.id = 0);
        // console.log(this.msg1);
      }, 2000);
    },
    getStart() {
      var that = this;
      var map = new AMap.Map("container1", {
        zoom: 11, //级别
        center: [116.397428, 39.90923], //中心点坐标
        viewMode: "3D" //使用3D视图
      });
      // AMap.plugin('AMap.ToolBar',function(){//异步加载插件
      //     var toolbar = new AMap.ToolBar();
      //     map.addControl(toolbar);
      // });

      AMap.plugin(["AMap.ControlBar"], function() {
        // 添加 3D 罗盘控制
        map.addControl(new AMap.ControlBar());
      });

      //   mapObj.plugin(["AMap.ControlBar"], function() {
      //     var controlBar = new AMap.ControlBar(Options);
      //     map.addControl(controlBar);
      //   });
      AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        that.placeSearch = new AMap.PlaceSearch({
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: "010", // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: map, // 展现结果的地图实例
          panel: "panel", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        that.placeSearch.search("必胜客");
      });
    },
    restSearch(value) {
      if (value) {
        this.placeSearch.search(value);
      } else {
        //关键字查询
        this.placeSearch.search(this.info);
      }
    }
  }
};
</script>

<style scoped>
#container1 {
  width: 100%;
  height: 500px;
}
#panel {
  /* position:absolute; */
  background-color: white;
  max-height: 100%;
  overflow-y: auto;
  width: 100%;
}
.rest-box {
  color: #6f2a00;
}
.current-city i {
  font-style: normal;
}
.current-city a {
  color: #6f2a00;
  text-decoration: underline;
}
.rest-input {
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #6f2a00;
  width: 200px;
  outline: none;
  color: #6f2a00;
}
.rest-search {
  border-radius: 10px;
  box-sizing: border-box;
  border: 2px solid #6f2a00;
  width: 100px;
  outline: none;
  background: #fff8ed;
}
.rest-key p {
  padding-left: 100px;
  margin: 0;
  height: 30px;
  line-height: 30px;
}
.rest-key p span {
  margin-right: 5px;
}
.rest-line {
  height: 0;
  /* width: 0; */
  border-bottom: 1px dashed #6f2a00;
  margin-bottom: 5px;
  /* z-index:1; */
}
.search-result span {
  /* margin-right: 265px; */
  display: inline-block;
  position: absolute;
}
.search-result a {
  text-decoration: none;
  margin-right: 120px;
}
.rslide-enter-active,
.rslide-leave-active {
  transition: all 0.5s linear;
}
.rslide-enter {
  transform: translateY(30px);
}
.rslide-leave-to {
  transform: translateY(-30px);
}
.rest-box {
  width: 1100px;
  margin: 0 auto;
}
.search-result {
  position: relative;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  z-index: 1;
}
.span1 i {
  margin-right: 100px;
}
.current-city-i {
  margin-right: 260px;
}
/* #qie_box{
  position:relative;
}
#qie_box i{
  position: absolute;
  z-index:-1;
}
#qie_box input{
   position: absolute;
   opacity: 0!important;
   color:white;
} */
/* .vue-city-selector[data-v-3c4f1937] input[data-v-3c4f1937] {
   opacity: 0;
} */
    /* .vue-city-selector[data-v-3c4f1937] input{opacity: 0;z-index: 2;color: red;font-weight: bold;border: none;width:100px;color:white;}
  .vue-city-selector[data-v-3c4f1937] {position: absolute;
    top: -13px;
    left: 280px;width:100px} */
</style>