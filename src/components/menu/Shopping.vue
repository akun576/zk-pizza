<template>
  <div class="container">
    <h3 class="text-center mt-5 text-primary">购物车</h3>
    <table class="table">
      <thead class="bg-primary text-white">
        <tr>
          <th scope="col">数量</th>
          <th scope="col">种类</th>
          <th scope="col">价格</th>
        </tr>
      </thead>
      <template v-if='newOrder.length>0'>
      <tbody>
        <tr v-for="(item,index) in newOrder" :key='index'>
      <td scope="row">
          <button class='btn btn-success' @click="reduceGoods(item,index)">-</button>
          <input type="number" min='0' max='10' v-model.number='item.quantity' class='input1'>
          <button class='btn btn-success' @click='item.quantity>=10?10:item.quantity++'>+</button></td>
      <td>{{item.name}}-{{item.size}}</td>
      <td>{{item.price}}</td>
        </tr>
        <tr>
            <td colspan="3" class='text-right text-primary'><strong>商品总件数:{{totalNum}}</strong></td>
        </tr>
        <tr>
            <td colspan="3" class='text-right text-primary'><strong>商品总价格:{{totalPrice}}</strong></td>
        </tr>
      </tbody>
      </template>
      <template v-else>
          <tbody>
              <tr>
                  <td colspan="3" class=' text-primary'><strong>购物车空空如也</strong></td>
              </tr>
          </tbody>
      </template>
    </table>
  </div>
</template>

<script>
export default {
    name:'Shopping',
    props:['newOrder'],
    methods:{
        reduceGoods(item,index){
            if(item.quantity<=1){
                this.newOrder.splice(index,1)
            }else{
                item.quantity--
            } 
        }
    },
     computed:{
        totalNum(){
            return this.newOrder.reduce((prev,next)=>{
                return prev+Number(next.quantity)
            },0)
        },
        totalPrice(){
            return this.newOrder.reduce((prev,next)=>{
                return prev+Number(next.quantity*next.price)
            },0)
        }
    }
};
</script>

<style scoped>
th,
td {
  text-align: center;
}
.input1{
    width:50px;
}
.btn{
    padding:1px 6px;margin-top:-2px;
}
</style>