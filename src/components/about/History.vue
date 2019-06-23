<template>
  <div class="row">
    <div
      class="card  mr-2 history-home"
      v-for="(product,index) in products"
      :key="index"
    >
      <img class="card-img-top" :src="product.src" alt="Card image cap">
      <div class="card-body text-center">
        <h5 class="card-title">{{product.title}}*{{product.num}}</h5>
        <p class="card-text text-primary">已完成支付</p>
        <span class="btn btn-primary" @click='detailLook(product)'>查看详情</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "History",
  data() {
    return {
      products: [
        {
          src: "../../../static/images/1.jpg",
          title: "夏威夷风光披萨",
          num: "3",
          price:100,
        },
        {
          src: "../../../static/images/2.jpg",
          title: "海鲜自尊披萨",
          num: "5",
           price:120,
        },
        {
          src: "../../../static/images/3.jpg",
          title: "新奥尔良披萨",
          num: "2",
           price:150,
        }
      ]
    };
  },
  methods:{
    detailLook(value){
      console.log(value)
      // this.$router.push({name:'Detail',params:{pro:value}})
      this.$router.push({path:'/about/detail',query:value})
      // this.$router.push({path:'/about/detail',query:{pro:value}})
    }
  }
};
</script>

<style scoped>
 /* style="width: 15rem;" */
.card{
  width: 15rem;
}
</style>