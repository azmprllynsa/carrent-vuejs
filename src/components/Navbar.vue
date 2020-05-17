<template>
  <div class="navbarParent">
    <router-link to="/" class="navLogo">
    <img class="logo" src="../assets/img/oook.png" width="35px" height="35px">
    <h1 >ARRENT</h1></router-link>
    <div class="navSearch">
      <img src="../assets/img/search.svg" alt="search" width="20px" height="20px">
      <input type="text" @input="search" v-model="valueSearch" placeholder="Search">
      </div>
    <div v-if="userLogin.id === undefined" class="navAdditional">
      <a @click="$emit('login-click')" class="btn-login"><p>Login</p></a>
      <router-link to="/register" class="btn-register"><p>Register</p></router-link>
      <router-link to="/login-shop" class="ml-5">
        <p class="ok">masuk sebagai rentaller</p>
      </router-link>
    </div>
    <div
      v-else class="navAdditional"
      @mouseenter="dropdown = true"
      @mouseleave="dropdown = false"
    >
      <router-link v-if="role_id" to="/user">
        <btnprofile />
      </router-link>
      <router-link v-else :to="`/${id}`">
        <btnprofile />
      </router-link>
      <div class="user-login__detail" :class="{ 'dropdown': dropdown }">
        <ul>
          <li>Setting</li>
          <li @click="logout" >Logout</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import btnprofile from '../components/base_/btnProfile'

export default {
  name: 'Navbar',
  data () {
    return {
      valueSearch: '',
      dropdown: false,
      id: localStorage.id,
      role_id: localStorage.role_id || null
    }
  },
  components: {
    btnprofile
  },
  computed: {
    ...mapState([
      'userLogin'
    ])
  },
  methods: {
    search () {
      this.$store.dispatch('getApi', {
        url: 'product?search=' + this.valueSearch,
        mutation: 'SET_CARS'
      })
    },
    logout () {
      delete localStorage.id
      delete localStorage.role_id
      this.$router.go()
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.user-login__detail {
  width: 170px;
  height: 0px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
  position: absolute;
  z-index: 21;
  top: 100%;
  right: 45px;
  overflow: hidden;
  transition: .2s;
  border-radius: 3px;
  li {
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.061);
    }
  }
  &.dropdown {
    height: 100px;
  }
}
.navbarParent{
  background-color: #770b1e;
  height: 70px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  z-index: 20;
  .logo {
    object-fit: cover;
  }
  .navLogo{
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    h1{
      color: white;
      font-weight: bold;
      margin: 0;
    }
  }
  .navSearch{
    width: 600px;
    display: flex;
    align-items: center;
    position: relative;
    input{
      width: 100%;
      height: 50%;
      border-radius: 3px;
      outline: none;
      border: none;
      padding-left: 50px;
    }
    img{
      position: absolute;
      margin-left: 15px;
    }
  }
  .navAdditional{
    position: relative;
    width: 200px;
    margin-left: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
      p{
        margin: 0;
        margin-left: 50px;
        font-size: 15px;
        color: #ffffff;
      }
      .ok{
        font-size: 12px;
      }
    .btn-login{
      border: 3px solid white;
      border-radius: 3px;
      width: 120px;
      height: 55%;
      position: absolute;
      right: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      p{
        color: white;
        margin: 0;
      }
    }
    .btn-register{
      background-color: white;
      border: none;
      width: 120px;
      height: 55%;
      position: absolute;
      right: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      p{
        color: #C93624;
        margin: 0;
      }
    }
  }
}
</style>
