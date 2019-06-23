<template>
    <div class="container">
        <div class='row'>
            <div class='col-7'>
                <Order :newMenu='newMenu'></Order>
            </div>
            <div class='col-5'>
                <Shopping></Shopping>
            </div>
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
            return{
                newMenu:[]
            }
        },
        mounted(){
            axios.get('./zk-pizza.json')
            .then(res=>{
                for(let key in res.data){
                    this.newMenu.push(res.data)
                }
                console.log(this.newMenu)
            })
        }
    }
</script>

<style scoped>

</style>