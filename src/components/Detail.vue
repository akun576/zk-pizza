<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">商品数量：{{item.num}}</p>
             <p class="card-text">总金额：{{item.num*item.price}}</p>
            <a href="#" class="btn btn-primary" @click='returnHistory'>返回历史订单页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      item: ""
    };
  },

  mounted() {
    // this.item=this.$route.params.value
    // console.log(this.$route.params.pro)
    // console.log(this.$route.query.pro)
    // this.item = this.$route.query.pro;
    this.item = this.$route.query;
    // console.log(this.item)
  },
  methods:{
    returnHistory(){
      // this.$router.replace("/about")
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
</style>