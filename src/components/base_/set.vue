<template>
  <div class="container-fluid">
    <aside class="side">
      <div class="temp">
        <i class="fas fa-image"></i>
        <p>gambar akan muncul disini</p>
      </div>
      <img :src="this.image" alt="">
      <input type="file" class="pick-files" ref="file" @change="editImage($event)">
    </aside>
    <div class="line">
      <h4>Biodata</h4>
      <Form :withButton="true"  />
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import Form from '../base_/form.vue'
import Axios from 'axios'

export default {
  name: 'set',
  components: {
    Form
  },
  data () {
    return {
      image: null
    }
  },
  // computed: {
  //   ...mapState([
  //     'userLogin'
  //   ])
  // },
  methods: {
    editImage (e) {
      if (localStorage.id) {
        if (localStorage.id.length !== 0) {
          const file = this.$refs.file.files[0]
          this.image = file
          console.log(file)
          const fd = new FormData()
          fd.append('image', this.image)
          Axios.patch(`${process.env.VUE_APP_API}user/upload/${localStorage.id}`, fd)
            .then(res => {
              const file = e.target.files[0]
              const fr = new FileReader()
              fr.onload = f => {
                this.image = f.target.result
              }
              fr.readAsDataURL(file)
              this.$store.dispatch('getApi', {
                url: 'user/' + localStorage.id,
                mutation: 'SET_USER_LOGIN'
              })
            })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid{
  display: flex;
  width: 880px;
  display: flex;
  // background: #770b1e;
  padding: 10px;
    .side {
      position: relative;
      width: 30%;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      margin: 10px;
      border-radius: 3px;
      overflow: hidden;
      .temp{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: -1;
        width: 100%;
        height: 100%;
      }
        img {
          width: 250px;
          height: 250px;
          object-fit: cover;
        }
    }
    .line {
      width: 70%;
      // height: 700px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      margin: 10px;
      background:  #FAFBFC;
      border-radius: 3px;
      padding: 10px;
    }
}
.pick-files {
    display: flex;
    justify-content: center;
    align-content: center;
    color: transparent;
    width: 250px;
    height: 47px;
  }
  .pick-files::-webkit-file-upload-button {
    visibility: hidden;
  }
  .pick-files::before {
    content: 'Pilih Gambar';
    color: #ffffff;
    display: inline-block;
    width: 250px;
    height: 50px;
    background: #770b1e;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    font-weight: 600;
  }
  .pick-files:active {
    outline: 0;
  }
  .pick-files:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
</style>
