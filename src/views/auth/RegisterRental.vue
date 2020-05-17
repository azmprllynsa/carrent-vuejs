<template>
<div class="slzkm3">
  <div class="axvbwe">
    <div class="form" >
      <router-link to="/" class="semqwe">
        <div class="kkasl3">
          <img src="@/assets/img/logo.png" alt="">
          <h1>ARRENT</h1>
        </div>
      </router-link>
      <h1 class="header">Daftar Toko Rental</h1>
      <div v-if="alert === 1" class="alertdiv color-green">
        <p class="alert">{{error}}</p>
      </div>
      <div v-if="alert === 2" class="alertdiv color-red">
        <p class="alert"><i class="fas fa-exclamation-triangle" style="color:#c72e3f"></i> {{error}}</p>
      </div>
      <div v-if="code === 0">
        <h1 class="labelemail">Email</h1>
        <div class="formemail">
          <input v-model="$v.email.$model" type="email" class="inputemail">
          <div class="alert-password">
            <p v-if="!$v.email.email">Format Email Anda Salah!</p>
          </div>
        </div>
        <h1 class="labelemail">Password</h1>
        <div class="formemail">
          <input v-model="$v.password.$model" type="password" class="inputemail" @keydown.enter="selanjutnya">
          <div class="alert-password">
            <p v-if="!$v.password.minLength">Password Minimal 6 Karakter!</p>
          </div>
        </div>
        <div class="login">
          <button
          id="button-success"
          @click="selanjutnya"
          v-if="
          $v.email.email && $v.email.required && $v.password.minLength && $v.password.required">Selanjutnya</button>
          <button
          v-if="
          !$v.email.email || !$v.email.required || !$v.password.required || !$v.password.minLength"
          class="default">Selanjutnya</button>
        </div>
      </div>
      <div v-if="code === 1">
        <label class="labelemail" id="emailku"> {{email}} </label> <button @click="change" class="changemail">Ubah</button>
        <h1 class="labelemail code2">Nama Rental</h1>
        <div class="formemail">
          <input v-model="$v.name.$model" type="text" class="inputemail">
        </div>
        <h1 class="labelemail code2">Nama Pemilik</h1>
        <div class="formemail">
          <input v-model="$v.yourname.$model" type="text" class="inputemail">
        </div>
        <h1 class="labelemail code2">Alamat</h1>
        <div class="formemail">
          <input v-model="$v.alamat.$model" type="text" class="inputemail">
        </div>
        <h1 class="labelemail code2">No. Handphone</h1>
        <div class="formemail">
          <input v-model="$v.nohp.$model" type="number" class="inputemail">
        </div>
        <div class="mkasls">
          <input type="checkbox" id="checkbox" @change="syarat($event)">
          <label for="checkbox">Saya Menyetujui Syarat Dan Ketentuan Yang Berlaku</label>
        </div>
        <div class="login">
          <button
          id="button-success"
          @click="daftar"
          v-if="checkboxSyarat && $v.yourname.required && $v.name.required && $v.nohp.required && $v.alamat.required">Daftar</button>
          <button
          v-if="!checkboxSyarat || !$v.yourname.required || !$v.name.required || !$v.nohp.required || !$v.alamat.required"
          class="default">Daftar</button>
        </div>
      </div>
      <div class="regis">
        <h1>Sudah Punya Toko?</h1>
        <router-link to="/login-shop">Masuk</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
// import Axios from 'axios'

export default {
  name: 'RegisterRental',
  data () {
    return {
      email: '',
      password: '',
      name: '',
      yourname: '',
      alamat: '',
      nohp: null,
      code: 0,
      alert: null,
      checkboxSyarat: false
    }
  },
  methods: {
    change () {
      this.code = 0
    },
    syarat (e) {
      this.checkboxSyarat = e.target.checked
    },
    selanjutnya () {
      this.code = 1
    },
    daftar () {
      this.$store.dispatch('postApi', {
        url: 'rentaller/register',
        data: {
          email: this.email,
          password: this.password,
          rental_name: this.name,
          fullname: this.yourname,
          address: this.alamat,
          phone_number: this.nohp
        }
      })
        .then((res) => {
          if (res.status === 200) {
            this.alert = 1
            this.error = 'Toko Berhasil dibuat Silahkan Chat Admin untuk Aktivasi'
          }
          // console.log(res)
        })
        .catch(() => {
          this.alert = 2
          this.error = 'Email Sudah Terdaftar Silahkan Ganti Emailnya!'
        })
    }
  },
  validations: {
    name: {
      required
    },
    alamat: {
      required
    },
    yourname: {
      required
    },
    nohp: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    checkbox: {
      required
      // dirty
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
    margin-bottom: 0px;
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

.mkasls{
  margin-top: 10px;
  label{
    left: 5px;
    top: -2px;
    position: relative;
    font-size: 14px;
  }
}
.changemail{
  background: none;
  border: none;
  color: #770b1e;
  outline: none;
  margin-left: 10px;
}
#emailku{
  font-size: 20px;
}
.slzkm3{
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
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
.code2{
  margin-top: 10px;
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
}
#button-success{
  background: #770b1e;
  cursor: pointer;
}
.login{
  position: relative;
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
