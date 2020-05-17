<template>
  <div class="container-fluid our-wrapper">
    <div class="info-user row">
      <section class="image-user col-md-4">
        <img :src="userLogin.image" alt="foto" class="img-user" />
      </section>
      <section class="flash-info col-md-6">
        <article class="name-user">
          <h1>{{userLogin.fullname}}</h1>
        </article>
        <article class="adress">
          <i class="fas fa-home mr-4"></i>
          <p>{{userLogin.address}}</p>
        </article>
        <article class="adress">
          <i class="far fa-envelope mr-4"></i>
          <p>{{userLogin.email}}</p>
        </article>
        <article class="adress">
          <i class="fas fa-venus-mars mr-4"></i>
          <p>{{userLogin.gender}}</p>
        </article>
      </section>
    </div>
    <div class="sub-menu">
      <section class="tablist">
        <div class="tab">
          <section class="menu" @click="order">
            <p>Status Order</p>
          </section>
          <section class="menu" @click="history">
            <p>History</p>
          </section>
          <section class="menu" @click="set">
            <p>Setting</p>
          </section>
        </div>
      </section>
      <menuSetprofile v-bind:tablist="tablist" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import menuSetprofile from '../components/base_/menuSetProfile.vue'

export default {
  name: 'userrDetail',
  components: {
    menuSetprofile
  },
  data () {
    return {
      tablist: 'Status Order'
    }
  },
  computed: {
    ...mapState([
      'userLogin'
    ])
  },
  methods: {
    order () {
      this.tablist = 'Status Order'
      document.querySelector('.status-order').style.display = 'flex'
      document.querySelector('.history').style.display = 'none'
      document.querySelector('.setting').style.display = 'none'
    },
    history () {
      this.tablist = 'History'
      document.querySelector('.history').style.display = 'flex'
      document.querySelector('.status-order').style.display = 'none'
      document.querySelector('.setting').style.display = 'none'
    },
    set () {
      this.tablist = 'Setting'
      document.querySelector('.setting').style.display = 'flex'
      document.querySelector('.history').style.display = 'none'
      document.querySelector('.status-order').style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  .info-user {
    display: flex;
    background: #770b1e;
    padding: 16px;
    .image-user {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 410px;
      padding: 16px;
      margin-left: 20px;
      margin-right: 20px;
      .img-user {
        width: 350px;
        height: 350px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        object-fit: cover;
      }
    }
    .flash-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 410px;
      margin-left: 50px;
      font-family: "Roboto", sans-serif;
      .name-user h1 {
        font-size: 30px;
        color: #ffffff;
        padding-bottom: 10px;
        border-bottom: 2px solid #ffffff;
        margin-bottom: 10px;
      }
      .adress {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-self: start;
        color: #ffffff;
        font-size: 17px;
        text-align: left;
      }
    }
  }
  .sub-menu {
    display: flex;
    padding: 16px;
    .tablist {
      display: flex;
      width: 20%;
      .tab {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 150px;
        background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 2px 10px 0px;
        margin: 20px 0 0 50px;
        padding: 16px;
        .menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          font-size: 16px;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }
        .menu:hover {
          background: #f8f6f6;
        }
      }
    }
  }
}
</style>
