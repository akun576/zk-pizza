<template>
  <div class='row'>
    <div class="card mr-2 delivery-home" v-for='(delivery,index) in deliverys' :key='index'>
      <img class="card-img-top" style="height: 15rem;" :src="delivery.src" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title text-center">{{delivery.title}}</h5>
        <p
          class="card-text"
        >{{delivery.info}}.</p>       
      </div>
       <a href="#" class="btn btn-primary text-center">快递查询</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
  data(){
      return{
          deliverys:[
              {
                  src:'../../../static/images/sf.jpg',title:'顺丰快递',info:'你的快递已经到达河南郑州市'
              },
              {
                  src:'../../../static/images/zt.jpg',title:'中通快递',info:'你的快递已经到达北京草阳区'
              },
              {
                  src:'../../../static/images/yt.jpg',title:'圆通快递',info:'你的快递已经到达四川成都'
              },
          ]
      }
  }
};
</script>

<style scoped>
/* style="width: 15rem; */
.card{
  width:15em;
}
</style>