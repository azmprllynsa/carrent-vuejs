<template>
  <div class="jrx1l3">
    <div class="amskj3">
      <div class="uixi32">
        <h2>About</h2>
        <router-link to="/">Our Story</router-link>
        <router-link to="/">Awards</router-link>
        <router-link to="/">Our Team</router-link>
        <router-link to="/">Career</router-link>
      </div>
      <div class="uixi32">
        <h2>Contact Us</h2>
        <router-link to="/"><i class="fas fa-phone-alt"></i> 021 9000 3333</router-link>
        <router-link to="/"><i class="far fa-envelope"></i> startup@mobil.com</router-link>
        <router-link to="/"><i class="fas fa-map-marker-alt"></i> Pondok Estate 2, No. B-2</router-link>
      </div>
      <div class="uixi32 lplksa">
        <h2>Find Us</h2>
        <div class="pwo3qs">
          <router-link to="/"><i class="fab fa-facebook"></i></router-link>
          <router-link to="/"><i class="fab fa-google"></i></router-link>
          <router-link to="/"><i class="fab fa-youtube"></i></router-link>
          <router-link to="/"><i class="fab fa-twitter"></i></router-link>
          <router-link to="/"><i class="fab fa-instagram"></i></router-link>
        </div>
        <div class="mnsg32">
          <router-link to="/"><i class="fab fa-google-play"></i></router-link>
          <router-link to="/"><i class="fab fa-apple"></i></router-link>
        </div>
      </div>
      <div class="uixi32">
        <h2>Subscribe</h2>
        <div class="pplas1">
          <div class="sersa1">
            <router-link to="/"><i class="fas fa-arrow-right"></i></router-link>
          </div>
          <input type="text" placeholder="Masukan Emailmu">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.jrx1l3{
  position: relative;
  width: 100%;
  height: 300px;
  background: #770b1e;
  display: flex;
  padding: 40px 40px;
  justify-content: space-around;
}
.amskj3{
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: #770b1e;
  border-top: 2px solid #ffffff;
  padding-top: 35px;
}
.uixi32{
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 25%;
  min-width: 18%;
  align-items: flex-start;
  h2{
    color: white;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 25px;
  }
  a{
    margin-bottom: 10px;
    text-decoration: none;
    color: #ffffff;
  }
  .pwo3qs{
    position: relative;
    display: flex;
    width: 100%;
    justify-content:space-between ;
  }
  .mnsg32{
    margin-top: 20px;
    a{
      margin-right: 10px;
    }
  }
  input{
    border-radius: 5px;
    border: 1px solid gray;
    padding: 10px 20px;
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  .pplas1{
    position: relative;
  }
  .sersa1{
    position: absolute;
    float: right;
    right: 10px;
    top: 10px;
  }
}
</style>
