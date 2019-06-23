<template>
    <div class='container'>
        <h4 class='text-center'>菜单管理</h4>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">序号</th>
      <th scope="col">品种</th>
      <th scope="col">删除</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(arrPizza,index) in arrPizzas" :key='index'>
      <td scope="row">{{index+1}}</td>
      <td>{{arrPizza.name}}</td>
      <td><button class='btn btn-primary' @click.prevent='delPizza(arrPizza,index)'>删除</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Newmenu',
        data(){
            return{
                // arrPizzas:[]
            }
        },
        mounted(){
            axios.get('./zk-pizza.json')
            .then(req=>{
                const arrPizzas=[]
                for(let key in req.data){
                    // console.log(key)
                    let item = req.data[key]
                    item.id=key
                    arrPizzas.push(item)
                }
                this.$store.commit('setMenuItems',arrPizzas)
            })
        },
        methods:{
            delPizza(value,index){
            axios.delete('./zk-pizza/'+value.id+'.json')
            .then(req=>{
                console.log(value.id)
                console.log("删除成功")
                // location.reload()
                this.$store.commit('deleteMenuItems',index)
            })
            }
        },
        computed:{
            arrPizzas(){
                return this.$store.getters.getMenuItems
            }
        }
    }
</script>

<style scoped>
th,td{
    text-align:center;
}
</style>