<template>
  <div class="container text-center mt-5">
    <img width="100" src="../assets/logo.png" alt>
    <h3 class="text-primary">注册</h3>
    <form>
      <div class="form-group">
        <input
          type="username"
          class="form-control"
          id="input1"
          v-model="username"
          placeholder="请输入用户名"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="input2"
          v-model="password"
          placeholder="请输入密码"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="input3"
          v-model="repassword"
          placeholder="请确认密码"
        >
      </div>
      <button type="submit" class="btn btn-primary btn-block" @click.prevent="onSubmit">确认注册</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    onSubmit() {
      //1非空验证
      if (this.username == "") {
        alert("用户名不能为空");
      } else if (this.password == "") {
        alert("密码不能为空");
      } else if (this.repassword == "") {
        alert("确认密码不能为空");
      } else if (this.password != this.repassword) {
        alert("密码不一致");
      } else {
        //3提交数据

        //2用户名不能重复验证
        axios.get("./zk-user.json").then(req => {
          // console.log(req.data)//req.data是个对象
          let resultUser = [];
          for (let key in req.data) {
            resultUser.push(req.data[key]);
          }
          var trueUser = resultUser.filter(item => {
            return item.username === this.username;
          });
          // console.log(trueUser)
          if (trueUser.length > 0) {
            alert("用户名不能重复");
          } else {
            const formData = {
              username: this.username,
              password: this.password
            };
            // console.log(formData);
            axios.post("./zk-user.json", formData).then(res => {
              alert("当前数据祖册成功");
              console.log(res.data);
              this.$router.push("./login");
            });
          }
        });
      }
      //2用户名不能重复验证
      //3提交数据
    }
  }
};
</script>

<style scoped>
.form-control {
  width: 50%;
  display: inline-block;
}
.btn-block {
  width: 50%;
  display: inline-block;
}
</style>