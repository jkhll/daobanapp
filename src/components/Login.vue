<template>
<!-- <transition name="logins"> -->
  <div class="login">
    <div class="wel">欢迎加入豆瓣</div>
      <form method="post" action="http://localhost:3000">
        <el-input  placeholder="用户名" v-model="name"></el-input>
        <el-input v-model="password" placeholder="密码"  show-password></el-input>
        <el-input v-model="email" placeholder="邮箱"></el-input>
        <el-button @click="submit" type="success">立即注册</el-button>
        <!-- <input type="submit" value="Submit"> -->
      </form>
  </div>
<!-- </transition> -->
</template>
<script>
// import { onSubmit } from '@/api/submit'
import Qs from 'qs'
import axios from 'axios'
axios.defaults.withCredentials = true

export default {
  data () {
    return {
      email: '',
      name: '',
      password: ''
    }
  },
  methods: {
    submit () {
      axios.post('http://localhost:3000/', Qs.stringify({
        'name': this.name,
        'email': this.email,
        'password': this.password
      }), {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        withCredentials: true
      }).then((res) => {
        console.log(res.data)
        if (res.data.err === 0) {
          alert('用户名已占用')
        } else {
          this.$router.push('/home')
        }
        // console.log(res)
      //     onSubmit()
      })
      // axios({
      //   url: 'http://localhost:3000/',
      //   methods: 'post',
      //   data: {
      //     'name': this.name,
      //     'email': this.email,
      //     'password': this.password
      //   },
      //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      //   withCredentials: true
      // }
      // ).then((res) => {
      //   if (res.data === 'ok') {
      //     console.log('注册成功')
      //     onSubmit()
      //   }
      // })
    }
  }
}
</script>
<style lang="scss" scope>
// .logins-enter-active {
//   transition: all .3s ease;
// }
// .logins-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .logins-enter, .logins-leave-to
// /* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateX(10px);
//   opacity: 0;
// }
.login {
  position: fixed;
  background: white;
  form {
    padding: 20px;
  }
 .wel {
   text-align: center;
   font-size: 2rem;
   color: #00b600;
 }
 button {
   margin-top: 20px;
   width: 100%;
 }
}
// .logins-leave-active {
//   transition: all .53s ease;
// }
// .logins-enter-active {
//   transition: all .53s ease;
// }
// .logins-enter, .logins-leave-to
// /* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateX(100%)
// }
</style>
