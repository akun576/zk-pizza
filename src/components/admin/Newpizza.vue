<template>
  <div>
    <h4 class="text-center">添加新的pizza</h4>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">商品名称</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="请输入商品名称"
            v-model="newPizza.name"
          >
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">商品描述</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="newPizza.description"
        ></textarea>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputState1">尺寸</label>
          <select id="inputState1" class="form-control" v-model="newPizza.options[0].size">
            <option selected>8</option>
            <option>9</option>
            <option>10</option>
            <option>12</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="inputZip1">价格</label>
          <input
            type="text"
            class="form-control"
            id="inputZip1"
            v-model="newPizza.options[0].price"
          >
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputState2">尺寸</label>
          <select id="inputState2" class="form-control" v-model="newPizza.options[1].size">
            <option selected>8</option>
            <option>9</option>
            <option>10</option>
            <option>12</option>
            <option>14</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="inputZip2">价格</label>
          <input
            type="text"
            class="form-control"
            id="inputZip2"
            v-model="newPizza.options[1].price"
          >
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block" @click.prevent="addPizza">立即添加</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Newpizza",
  data() {
    return {
      newPizza: {
        name: "",
        description: "",
        options: [{ size: "", price: "" }, { size: "", price: "" }]
      }
      // arrPizza:[]
    };
  },
  methods: {
    addPizza() {
      var formData = {
        name: this.newPizza.name,
        description: this.newPizza.description,
        options: [
          { size: this.newPizza.options[0].size, price: this.newPizza.options[0].price },
           { size: this.newPizza.options[1].size, price: this.newPizza.options[1].price }]
      };
      axios.post("./zk-pizza.json", formData).then(res => {
        console.log(res.data);
        console.log("添加成功");
        // location.reload()
        //添加成功之后才会有name这个值
        formData.id=res.data.name
        this.$store.commit("pushMenuItems", formData);
      });
    }
  }
};
</script>

<style scoped>
</style>