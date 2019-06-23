<template>
    <div class="container">
       <div class='row'>
           <div class="col-7"><Newpizza></Newpizza></div>
           <div class="col-5"> <Newmenu></Newmenu></div>
       </div> 
    </div>
</template>

<script>
//admin
import Newmenu from "../components/admin/Newmenu"
import Newpizza from "../components/admin/Newpizza"
    export default {
        name:'Admin',
        components:{
            Newmenu,
            Newpizza,
        }
    }
</script>

<style scoped>

</style>