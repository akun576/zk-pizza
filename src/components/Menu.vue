<template>
    <div class="container">
       <!-- Menu页面 -->
       <div class="row">
         <div class="col-7"><Order :newMenu="newMenu" @order="order"></Order></div>
         <div class="col-5"><Shopping :newOrder="newOrder"></Shopping></div>
       </div>
    </div>
</template>

<script>
import Order from './menu/Order'
import Shopping from './menu/Shopping'
import axios from 'axios'
    export default {
      name:'Menu',
      components:{
         Order,
         Shopping 
      },
      data(){
        return {
          newMenu:[],
          newOrder:[] 
        }
      },
      mounted(){
        axios.get('./zk-pizza.json')
        .then(res=>{
           for(let key in res.data){
             this.newMenu.push(res.data[key])
           }
          //  console.log(this.newMenu)
        }) 
      },
      methods:{
        order(value){
          // console.log(value)
          const addOrder={
            name:value.item.name,
            size:value.item1.size,
            price:value.item1.price,
            quantity:1
          }
          const singleOrder=this.newOrder.filter(item=>{
            return item.name===value.item.name&&item.size===value.item1.size
          })
          if(singleOrder.length>0){
            if(singleOrder[0].quantity>=10){
              alert('当前商品每人只能限购10件')
            }else{
              singleOrder[0].quantity++
            }
           
          }else{
            this.newOrder.push(addOrder)
          }
         
        }
      }
    
    }
</script>

<style scoped>

</style>