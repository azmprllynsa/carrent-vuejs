<template>
<div class="axvbwe">
  <div class="form" >
    <router-link to="/" class="semqwe">
      <div class="kkasl3">
        <img src="@/assets/img/logo.png" alt="">
        <h1>ARRENT</h1>
      </div>
    </router-link>
    <h1 class="header">Daftar Akun</h1>
    <div v-if="code === 1" class="alertdiv color-green">
      <p class="alert">{{error}}</p>
    </div>
    <div v-if="code === 2" class="alertdiv color-red">
      <p class="alert"><i class="fas fa-exclamation-triangle" style="color:#c72e3f"></i> {{error}} <router-link to="/login">Masuk</router-link> </p>
    </div>
    <h1 class="labelemail">NAMA LENGKAP</h1>
    <div class="formemail">
      <input v-model="$v.fullname.$model" type="text" class="inputemail">
      <div class="alert-password"></div>
    </div>
    <h1 class="labelemail">EMAIL</h1>
    <div class="formemail">
      <input v-model="$v.email.$model" type="text" class="inputemail">
      <div class="alert-password">
        <p v-if="!$v.email.email">Format Email Salah! Contoh: name@email.com</p>
      </div>
    </div>
    <h1 class="labelemail">KATA SANDI</h1>
    <div class="formemail">
      <input v-model="$v.password.$model" type="password" class="inputemail">
      <div class="alert-password">
        <p v-if="!$v.password.minLength">Password Minimal 6 Karakter!</p>
      </div>
    </div>
    <div class="login">
      <button
      id="button-success"
      @click.enter="daftar"
      v-if="$v.email.email && $v.email.required && $v.password.minLength && $v.password.required && $v.fullname.required">Daftar</button>
      <button
      v-if="!$v.email.email || !$v.email.required || !$v.fullname.required || !$v.password.required || !$v.password.minLength"
      class="default">Daftar</button>
      <!-- <button id="google"><img src="@/assets/img/Google.svg"> Daftar Dengan Google</button> -->
    </div>
    <div class="regis">
      <h1>Sudah Punya Akun?</h1>
      <router-link to="/login">Masuk</router-link>
    </div>
  </div>
</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
// import Axios from 'axios'

export default {
  name: 'ModalRegister',
  data () {
    return {
      fullname: '',
      email: '',
      password: '',
      code: 0,
      error: false
    }
  },
  methods: {
    daftar () {
      this.$store.dispatch('postApi', {
        url: 'user/register',
        data: {
          fullname: this.fullname,
          email: this.email,
          password: this.password
        }
      })
        .then((res) => {
          this.code = 1
          this.error = 'Daftar Berhasil, Silahkan Cek Email Anda untuk Aktivasi'
          // console.log(res)
        })
        .catch(() => {
          this.code = 2
          this.error = 'Email Sudah Terdaftar, Silahkan '
          // console.log(err)
        })
    }
  },
  validations: {
    fullname: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
}
</script>

<style lang="scss" scoped>
.semqwe{
  position: relative;
  text-decoration: none;
  .kkasl3{
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    cursor: pointer;
    justify-content: center;
    img{
      position: relative;
      top: 4px;
      width: 40px;
      height: 40px;
    }
    h1{
      font-size: 2.5rem;
      color: #BC2122;
    }
  }
}
.axvbwe{
  border-radius: 10px;
  width: 560px;
  height: auto;
  padding-bottom: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  width: 420px;
  height: auto;
}
.header{
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #555555;
  margin-bottom: 10px;
}
.alertdiv{
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid black;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  margin-bottom: 5px;
}
.alertdiv a{
  text-decoration: none;
  color: #770b1e;
}
.color-green{
  border: 2px solid #12C200;
}
.color-red{
  border: 2px solid #770b1e;
}
.alert {
  font-size: 15px;
  position: relative;
  padding: 0;
  left: 15px;
  top: 5px;
}
.labelemail{
  font-size: 13px;
  color: #555555;
  font-weight: bold;
  margin-bottom: 10px;
}
.formemail{
  width: 100%;
}
.inputemail{
  width: 100%;
  font-size: 18px;
  color: #555555;
  height: 40px;
  padding-left: 20px;
  background: transparent;
  border: 1px solid #886969;
  outline: none;
  // margin-bottom: 5px;
}
.alert-password{
  position: relative;
  margin-top: 5px;
  font-size: 14px;
  color: #770b1e;
  margin-bottom: 5px;
  height: 16px;
}

.checkbox{
  position: relative;
  top: 10px;
  color: #555555;
}
.forgot a{
  position: relative;
  float: right;
  top: -10px;
  color: #555555;
  text-decoration: none;
}
.login button{
  color: white;
  padding: 0px 20px;
  height: 50px;
  width: 100%;
  border-radius: 27px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: not-allowed;
  position: relative;
  margin-bottom: 10px;
}
#button-success{
  background: #770b1e;
  cursor: pointer;
}
.login{
  position: relative;
  margin-top: 15px;
}
#google{
  background: white;
  color: black;
  border: 1px solid #333333;
  cursor: pointer;
}
.regis{
  width: 185px;
  margin-top: 10px;
}
.regis h1{
  position: absolute;
  font-size: 15px;
}
.regis a{
  position: relative;
  float: right;
  text-decoration: none;
  top: -3px;
  color: #770b1e;
}

</style>
