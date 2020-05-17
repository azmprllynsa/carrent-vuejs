<template>
  <div class="landing-page">
    <Carousel />
    <div class="ourService">
      <div class="ourServiceText">
        <h3>Why you should choose us</h3>
      </div>
      <div class="ourServiceCard">
        <div class="card">
          <div class="upside">
            <img
              src="../assets/img/icons8-easy-100.png"
              alt="easy-to-rent"
              width="70px"
              height="70px"
            />
          </div>
          <div class="downside">
            <header>Easy to Rent</header>
            <footer>Our service makes easy to rent a car with simple privacy & policy</footer>
          </div>
        </div>
        <div class="card">
          <div class="upside">
            <img src="../assets/img/icons8-globe-52.png" alt="easy-to-find" />
          </div>
          <div class="downside">
            <header>Easy to Find</header>
            <footer>Our partner available on every city in Indonesia</footer>
          </div>
        </div>
        <div class="card">
          <div class="upside">
            <img src="../assets/img/stopwatch.png" width="70px" height="70px" alt="fast-response" />
          </div>
          <div class="downside">
            <header>Fast Response</header>
            <footer>Our partner also gives best service and</footer>
          </div>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="partnerText">
        <h3>Our Partner</h3>
      </div>
      <div class="partnerLogo">
        <div class="logoWrap">
          <h5 v-for="all in allMerek" :key="all.id">{{all.name}}</h5>
        </div>
      </div>
    </div>
    <div class="listCar">
      <header class="text-light">
        <h1>ORDER NOW!</h1>
      </header>
      <div class="cardList">
        <Card v-for="car in cars.data" :key="car.id" :car="car" />
      </div>
      <router-link to="/list-car">
        <div class="seeMore">
          <header>See more</header>
          <i class="fas fa-chevron-right"></i>
        </div>
      </router-link>
    </div>
    <div class="bestProfile">
      <div class="upProfile">
        <h1>Best Rent Profile</h1>
      </div>
      <div v-for="cardRentail in 1" :key="cardRentail" class="downProfile">
        <cardRentail />
      </div>
      <router-link to="/add-shop">
        <div class="btn-forRentaler">
          <p>Ingin jadi rentaler?</p>
          <i class="fas fa-chevron-right"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Carousel from '../components/base_/Caroucel.vue'
import cardRentail from '../components/base_/cardRentail.vue'
import { mapState } from 'vuex'

export default {
  name: 'LandingPage',
  components: {
    Card,
    Carousel,
    cardRentail
  },
  computed: {
    ...mapState([
      'cars',
      'allMerek'
    ])
  },
  created () {
    this.$store.dispatch('getApi', {
      url: 'carbrand',
      mutation: 'SET_MEREK_MOBIL'
    })
    if (localStorage.role_id === '1') this.$router.push('/admin-page')
  }
}
</script>

<style lang="scss" scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  .parallax {
    width: 100%;
    height: 500px;
    background-color: wheat;
    margin-top: 70px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }
  }
  .partner {
    width: 100%;
    height: 510px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .partnerText {
      background-color: #770b1e;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 100px 0 0;
      h3 {
        color: white;
      }
    }
    .partnerLogo {
      background-color: #000000;
      // border-radius: 0 0 0 100px;
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      .logoWrap {
        width: 80%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        // flex-direction: column;
        justify-content: center;
        opacity: 0.6;
        h5 {
          margin: 7px;
          color: rgb(92, 91, 91);
          width: auto;
          height: auto;
        }
      }
    }
  }
  .ourService {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/img/luis-paico-NNTGEoohoE4-unsplash.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 600px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ourServiceText {
      // background-color: rgb(0, 0, 0);
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      h3 {
        color: white;
      }
    }
    .ourServiceCard {
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      .card {
        background-color: white;
        width: 250px;
        height: 300px;
        transition: ease 0.5s;
        margin: 60px 20px;
        border-radius: 3px;
        overflow: hidden;
        header{
          font-size: 20px;
          text-align: center;
          font-weight: 600;
          line-height: 70px;
        }
        footer{
          font-weight: 500;
          text-align: center;
        }
        &:hover {
          transform: scale(1.1);
          transition: ease 0.5s;
        }
        .upside {
          width: 100%;
          height: 50%;
          background-color: rgba(0, 0, 0, 0.123);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .listCar {
    background-color: #770b1e;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    position: relative;
    overflow: hidden;
    .cardList {
      display: flex;
      justify-content: center;
      height: 400px;
    }
    .seeMore{
      width: 400px;
      height: 50px;
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      cursor: pointer;
      &:hover i{
        transform: translateX(5px);
      }
      header{
        color: white;
        font-weight: 700;
        font-size: 20px;
        padding-bottom: 10px;
      }
      i{
        color: white;
        font-size: 19px;
        padding-left: 15px;
        padding-bottom: 15px;
        transition: ease .2s;
      }
    }
  }
  .bestProfile {
    background-color: #770b1e;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    position: relative;
    .upProfile {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      h1 {
        color: white;
      }
    }
    .downProfile{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .btn-forRentaler{
      position: absolute;
      width: 200px;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover i{
        transform: translateX(5px);
      }
      p{
        font-weight: 500;
        color: white;
        font-size: 18px;
      }
      i{
        color: white;
        font-size: 19px;
        padding-left: 15px;
        padding-bottom: 15px;
        transition: ease .2s;
      }
    }
  }
}
</style>
