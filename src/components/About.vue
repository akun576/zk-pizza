<template>
  <div class="container">
    <!-- 路由导航去 -->
    <div class="row">
      <div class="col-md-4">
        <nav>
          <router-link class=" text-center list-group-item list-group-item-success mt-3" to="/about/activity">热门活动</router-link>
          <router-link class=" text-center list-group-item list-group-item-danger mt-3" to="/about/contact">联系我们</router-link>
          <router-link class=" text-center list-group-item list-group-item-warning mt-3" to="/about/history">历史订单</router-link>
          <router-link class=" text-center list-group-item list-group-item-info mt-3" to="/about/delivery">快递信息</router-link>
        </nav>
      </div>
      <!-- 路由展示去 -->
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
</style>