<template>
  <div>
    <form>
      <div class="form-group row">
        <label for="staticNama" class="col-sm-2 col-form-label mr-2">Nama Mobil</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="staticNama" v-model="car_title" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticMerek" class="col-sm-2 col-form-label mr-2">Merek Mobil</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticTransmit" @change="car_brand = $event.target.value">
            <option v-for="brand in carbrands" :key="brand.id" :value="brand.id">{{brand.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticDesc" class="col-sm-2 col-form-label mr-2">Deskripsi mobil</label>
        <div class="col-sm-9">
          <textarea v-model="description" class="form-control" id="staticDesc" rows="3"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticSewa" class="col-sm-2 col-form-label mr-2">Harga Sewa</label>
        <div class="col-sm-9">
          <input v-model="price_per_day" type="number" class="form-control" id="staticSewa" />
        </div>/ Hari
      </div>
      <div class="form-group row">
        <label for="staticTransmit" class="col-sm-2 col-form-label mr-2">transmisi</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticTransmit">
            <option value="1">nama transmisi</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticBagasi" class="col-sm-2 col-form-label mr-2">kapasitas bagasi</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticTransmit">
            <option value="1">kapasitas bagasi</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEngine" class="col-sm-2 col-form-label mr-2">Tipe Engine</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticTransmit">
            <option value="1">tipe Engine</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticapacity" class="col-sm-2 col-form-label mr-2">Kapasitas Engine</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticTransmit">
            <option value="1">kapasitas Engine</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPeople" class="col-sm-2 col-form-label mr-2">Kapasitas Orang</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticTransmit">
            <option value="1">kapasitas Orang</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticdoor" class="col-sm-2 col-form-label mr-2">Pintu</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticTransmit">
            <option value="1">Pintu</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticManu" class="col-sm-2 col-form-label mr-2">Tahun Manufaktur</label>
        <div class="col-sm-9">
          <input type="date" class="form-control" id="staticManu" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticFuel" class="col-sm-2 col-form-label mr-2">avg Fuel Consumption</label>
        <div class="col-sm-9">
      <select class="custom-select" id="staticTransmit">
            <option value="1">avg Fuel Consumption</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEngine" class="col-sm-2 col-form-label mr-2">Additional Driver</label>
        <div class="col-sm-9">
          <input type="checkbox" @change="$event.target.checked ? additional_driver = 1 : additional_driver = 2">
        </div>
      </div>
      <div class="form-group row">
        <label for="staticAribag" class="col-sm-2 col-form-label mr-2">srs Airbag</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticAirbag">
            <option value="1">Ada</option>
            <option value="2">Tidak Ada</option>
          </select>
        </div>
      </div>
    </form>
    <footer class="foot">
      <button class="save" @click="save">Save</button>
    </footer>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import Axios from 'axios'

export default {
  name: 'Form',
  data () {
    return {
      rentaller_id: this.$route.params.idRentaler,
      car_title: '',
      description: '',
      car_brand: 0,
      price_per_day: 0,
      transmission_id: 0,
      baggage_capacity: 0,
      engine_capacity: 0,
      additional_driver: 2,
      person_capacity: 0,
      doors: 0,
      Manufacturing_year: 0,
      fuel_type: 0,
      avg_fuel_consumption: 0,
      srs_airbag: 0,
      rating: 0,
      carbrands: []
    }
  },
  props: ['withButton'],
  methods: {
    ok (e) {
      console.log(e)
    },
    save () {
      this.$store.dispatch('postApi', {
        url: 'product',
        data: {
          rentaller_id: this.rentaller_id,
          car_title: this.car_title,
          description: this.description,
          car_brand: this.car_brand,
          price_per_day: this.price_per_day,
          transmission_id: this.transmission_id,
          baggage_capacity: this.baggage_capacity,
          engine_capacity: this.engine_capacity,
          additional_driver: this.additional_driver,
          person_capacity: this.person_capacity,
          doors: this.doors,
          Manufacturing_year: this.Manufacturing_year,
          fuel_type: this.fuel_type,
          avg_fuel_consumption: this.avg_fuel_consumption,
          srs_airbag: this.srs_airbag,
          rating: this.rating
        }
      }).then(res => {
        Swal.fire({
          title: 'Makar Succes!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1200
        })
      })
    }
  },
  created () {
    Axios.get(`${process.env.VUE_APP_API}carbrand`).then(res => {
      this.carbrands = res.data.data
    })
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
