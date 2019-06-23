<template>
     <div class="container text-center mt-5">
    <img width="100" src="../assets/logo.png" alt>
    <h3 class="text-primary">登录</h3>
    <form>
        <p>{{msg3}}</p>
      <div class="form-group">
        <input
          type="username"
          class="form-control"
          id="input1"
          v-model="username"
          placeholder="请输入你的用户名"
        >
      </div>
       <p>{{msg1}}</p>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="input2"
          v-model="password"
          placeholder="请输入你的密码"
        >
      </div>
       <p>{{msg2}}</p>
      <button type="submit" class="btn btn-primary btn-block" @click.prevent="onLogin">立即登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Login',
        data(){
            return{
                username:'',
                password:'',
                flag1:0,//用户名标志
                msg1:'',//用户名不能为空
                flag2:0,//密码是否存在的标志
                msg2:'',//密码不能为空
                flag3:0,//用户名或者密码不存在
                msg3:'',//用户名或则密码不存在
            }
        },
        methods:{
            onLogin(){
                if(this.username==''){
                    // alert('用户名不能为空')
                    this.msg1="用户名不能为空"
                }else if(this.password==''){
                    // alert('密码不能为空')
                    this.msg2="密码不能为空"
                }else{
                    axios.get('./zk-user.json')
                    .then(req=>{
                    let reqUser=[]
                    for(let key in req.data){
                        reqUser.push(req.data[key])
                    }
                    //  console.log(reqUser)
                    //  console.log(this.password,this.username)
                    let reqTrue=reqUser.filter(item=>{
                        // console.log(item.password,item.username)
                        return item.password===this.password&&item.username===this.username
                    })
                    console.log(reqTrue)
                    if(reqTrue.length>0){
                        alert('登陆成功')
                        this.$store.dispatch('setUser',reqTrue[0].username)
                        this.$router.push('/')
                    }else{
                        // alert('用户名或则密码不存在')
                        this.msg3="用户名或则密码不存在"
                        this.username=''
                        this.password=''
                    }
                })
                }
               
            }
        }
    }
</script>

<style scoped>
.form-control{
    width:50%;display:inline-block;
}
.btn-block{
    width:50%;display:inline-block;
}
</style>