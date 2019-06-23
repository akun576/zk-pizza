<template>
  <div>
    <div class="card text-center">
      <div class="card-header bg-warning">Featured</div>
      <div class="card-body">
        <h5 class="card-title text-success">联系我们</h5>
        <p class="card-text">欢迎来到关于我们的披纱的页面.</p>
        <!-- 路由导航去 -->
        <nav>
          <router-link to="/about/address" class="btn btn-primary">地址信息</router-link>
          <router-link to="/about/person" class="btn btn-primary">代表法人</router-link>
          <router-link to="/about/tel" class="btn btn-primary">联系电话</router-link>
        </nav>
        <!-- 路由展示去 -->
        <router-view></router-view>
      </div>
      <div class="card-footer text-muted bg-warning">20 days ago</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
</style>