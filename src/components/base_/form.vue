<template>
  <div>
    <form>
      <div class="form-group row">
        <label for="staticNama" class="col-sm-2 col-form-label mr-2">Nama</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control-plaintext"
            id="staticNama"
            v-model="dataUser.fullname"
            @change="save"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticKtp" class="col-sm-2 col-form-label mr-2">KTP</label>
        <div class="col-sm-9">
          <input
            type="number"
            class="form-control-plaintext"
            id="staticKtp"
            v-model="dataUser.id_card"
            @change="save"
          />
        </div>
      </div>
      <div v-if="withButton || false" class="form-group row">
        <label  for="staticGender" class="col-sm-2 col-form-label mr-2">Gender</label>
        <div class="col-sm-9">
          <input type="text" class="form-control-plaintext" id="staticGender" v-model="dataUser.gender" @change="save" />
        </div>
      </div>
      <div v-if="withButton || false" class="form-group row">
        <label for="staticAdress" class="col-sm-2 col-form-label mr-2">Alamat</label>
        <div class="col-sm-9">
          <textarea
            class="form-control-plaintext"
            id="staticAdress"
            rows="3"
            v-model="dataUser.address"
            @change="save"
          ></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticPhone" class="col-sm-2 col-form-label mr-2">Phone</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control-plaintext"
            id="staticPhone"
            v-model="dataUser.phone_number"
            @change="save"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label mr-2">Email</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control-plaintext"
            id="staticEmail"
            v-model="dataUser.email"
            @change="save"
          />
        </div>
      </div>
      <div v-if="withButton || false" class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label mr-2">Password</label>
        <div class="col-sm-9">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            @change="save"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import Axios from 'axios'

export default {
  name: 'Form',
  props: ['withButton'],
  computed: {
    ...mapState(['userLogin'])
  },
  data () {
    return {
      dataUser: {}
    }
  },
  methods: {
    save () {
      if (localStorage.id) {
        if (localStorage.id.length !== 0) {
          this.$store
            .dispatch('patchApi', {
              url: 'user/' + localStorage.id,
              data: {
                fullname: this.dataUser.fullname,
                id_card: this.dataUser.id_card,
                gender: this.dataUser.gender,
                address: this.dataUser.address,
                phone_number: this.dataUser.phone_number,
                email: this.dataUser.email,
                password: this.dataUser.password
              }
            })
            .then(res => {
              Swal.fire({
                title: 'Data Anda Telah terupdate!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1200
              })
              this.$store.dispatch('getApi', {
                url: 'user/' + localStorage.id,
                mutation: 'SET_USER_LOGIN'
              })
            })
        }
      }
    }
  },
  created () {
    if (localStorage.id) {
      if (localStorage.id.length !== 0) {
        Axios.get(`${process.env.VUE_APP_API}user/${localStorage.id}`)
          .then(res => {
            this.dataUser = res.data.data
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.foot {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  .save {
    padding: 10px 20px;
    border: none;
    background: #770b1e;
    color: #ffffff;
    border-radius: 3px;
  }
}
</style>
