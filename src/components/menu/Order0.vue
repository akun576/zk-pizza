<template>
    <div class='container'>
        <h4 class='text-center'>点餐</h4>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">尺寸</th>
            <th scope="col">价格(元)</th>
            <th scope="col">加入</th>
            </tr>
        </thead>
        <tbody v-for="(item,index) in newMenu" :key='index'>
            <tr>
                <td colspan='3'>{{item.name}}</td>
            </tr>
            <tr>
                <td colspan='3'>{{item.description}}</td>
            </tr>
            <tr v-for='(item1,index1) in item.options' :key='index1'>
            <td >{{item1.size}}</td>
            <td>{{item1.price}}</td>
            <td><button class='btn btn-primary'>+</button></td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:'Order',
        props:['newMenu']
    }
</script>

<style scoped>
th,td{
    text-align:center;
}
</style>