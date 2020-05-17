<template>
  <div class="add-car">
    <div class="line">
      <h1>Add Car</h1>
    </div>
    <div class="line">
      <div class="upload d-flex flex-wrap justify-content-center p-3 mb-3">
        <section class="img-temp">
          <input type="file" ref="file" class="aezakmi" @change="upload($event)" />
          <img :src="image1" class="img-input" />
        </section>
        <section class="img-temp">
          <input type="file" ref="file" class="aezakmi" @change="upload2($event)" />
          <img :src="image2" class="img-input" />
        </section>
        <section class="img-temp">
          <input type="file" ref="file" class="aezakmi" @change="upload3($event)" />
          <img :src="image3" class="img-input" />
        </section>
        <section class="img-temp">
          <input type="file" ref="file" class="aezakmi" @change="upload4($event)" />
          <img :src="image4" class="img-input" />
        </section>
        <section class="img-temp">
          <input type="file" ref="file" class="aezakmi" @change="upload5($event)" />
          <img :src="image5" class="img-input" />
        </section>
      </div>
      <!-- <div class="pick">
        <input type="file" class="pick-files" ref="file" >
      </div>-->
    </div>
    <div class="line">
      <form>
        <div class="form-group row">
          <label for="staticNama" class="col-sm-2 col-form-label mr-2">Nama Mobil</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="staticNama" v-model="car_title" placeholder="Merk Mobil" />
          </div>
        </div>
        <div class="form-group row">
          <label for="staticMerek" class="col-sm-2 col-form-label mr-2">Merek Mobil</label>
          <div class="col-sm-9">
            <select
              class="custom-select"
              @change="car_brand = $event.target.value"
            >
              <option selected>--- Pilih Merk ---</option>
              <option v-for="brand in carbrands" :key="brand.id" :value="brand.id">{{brand.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticDesc" class="col-sm-2 col-form-label mr-2">Deskripsi mobil</label>
          <div class="col-sm-9">
            <textarea v-model="description" class="form-control" id="staticDesc" rows="3" placeholder="Deskrpisi Mobil"></textarea>
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
            <select class="custom-select"
            @change="transmission_id = $event.target.value">
              <option selected>--- Pilih Transmisi ---</option>
              <option v-for="trans in transmissions" :key="trans.id" :value="trans.id">{{trans.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticBagasi" class="col-sm-2 col-form-label mr-2">kapasitas bagasi</label>
          <div class="col-sm-9">
            <select class="custom-select"
            @change="baggage_capacity = $event.target.value">
              <option selected>--- Pilih Kapasitas Bagasi ---</option>
              <option v-for="baggagecapacity in baggagecapacities" :key="baggagecapacity.id" :value="baggagecapacity.id">{{baggagecapacity.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticEngine" class="col-sm-2 col-form-label mr-2">Tipe Bahan Bakar</label>
          <div class="col-sm-9">
            <select class="custom-select"
             @change="fuel_type = $event.target.value">
              <option selected>--- Pilih Bahan Bakar ---</option>
              <option v-for="fuel in fueltypes" :key="fuel.id" :value="fuel.id">{{ fuel.name }}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticapacity" class="col-sm-2 col-form-label mr-2">Kapasitas Engine</label>
          <div class="col-sm-9">
            <select class="custom-select"
            @change="engine_capacity = $event.target.value">
              <option selected>--- Pilih Kapasitas Mesin ---</option>
              <option v-for="enginecapacity in enginecapacities" :key="enginecapacity.id" :value="enginecapacity.id">{{enginecapacity.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPeople" class="col-sm-2 col-form-label mr-2">Kapasitas Orang</label>
          <div class="col-sm-9">
            <select class="custom-select"
            @change="person_capacity = $event.target.value">
              <option selected>--- Pilih Kapasitas Kursi ---</option>
              <option v-for="personcapacity in personcapacities" :key="personcapacity.id" :value="personcapacity.id">{{personcapacity.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticdoor" class="col-sm-2 col-form-label mr-2">Pintu</label>
          <div class="col-sm-9">
            <select class="custom-select"
            @change="doors = $event.target.value">
              <option selected>--- Banyak Pintu ---</option>
              <option v-for="dor in doorss" :key="dor.id" :value="dor.id">{{dor.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticManu" class="col-sm-2 col-form-label mr-2">Tahun Manufaktur</label>
          <div class="col-sm-9">
            <select class="custom-select"
            @change="manufacturing_year = $event.target.value">
            <option selected>--- Pilih Tahun Pembuatan ---</option>
            <option v-for="my in manufacturingyears" :key="my.id" :value="my.id">{{my.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticFuel" class="col-sm-2 col-form-label mr-2">avg Fuel Consumption</label>
          <div class="col-sm-9">
            <select class="custom-select"
            @change="avg_fuel_consumption = $event.target.value">
              <option selected>--- avg fuel consumptions ---</option>
              <option v-for="avg in avgfuelconsumptions" :key="avg.id" :value="avg.id">{{avg.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticEngine" class="col-sm-2 col-form-label mr-2">Additional Driver</label>
          <div class="col-sm-9">
            <input
              type="checkbox"
              @change="$event.target.checked ? additional_driver = 1 : additional_driver = 2"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="staticAribag" class="col-sm-2 col-form-label mr-2">srs Airbag</label>
          <div class="col-sm-9">
            <select class="custom-select"
            @change="srs_airbag= $event.target.value">
              <option selected>--- pilih jenis airbag ---</option>
              <option v-for="airbag in srsairbags" :key="airbag.id" :value="airbag.id">{{airbag.name}}</option>
            </select>
          </div>
        </div>
      </form>
      <footer class="foot">
        <button class="save" @click="save">Save</button>
      </footer>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Axios from 'axios'

export default {
  name: 'AddCar',
  data () {
    return {
      rentaller_id: this.$route.params.idRentaler,
      images: [],
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
      manufacturing_year: 0,
      fuel_type: 0,
      avg_fuel_consumption: 0,
      srs_airbag: 0,
      rating: 0,
      carbrands: [],
      transmissions: [],
      baggagecapacities: [],
      fueltypes: [],
      enginecapacities: [],
      additionaldrivers: [],
      personcapacities: [],
      doorss: [],
      manufacturingyears: [],
      avgfuelconsumptions: [],
      srsairbags: [],
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null
    }
  },
  props: ['withButton'],
  methods: {
    uploads () {
      const fd = new FormData()
      fd.append('image', this.images)
      this.$store.dispatch('postApi', {
        url: 'product',
        data: fd
      }).then(res => {
        console.log(res)
      })
    },
    upload (e) {
      const file = e.target.files[0]
      const fr = new FileReader()
      fr.onload = f => {
        this.image1 = f.target.result
      }
      fr.readAsDataURL(file)
      this.images.push(file)
    },
    upload2 (e) {
      const file = e.target.files[0]
      const fr = new FileReader()
      fr.onload = f => {
        this.image2 = f.target.result
      }
      fr.readAsDataURL(file)
      this.images.push(file)
    },
    upload3 (e) {
      const file = e.target.files[0]
      const fr = new FileReader()
      fr.onload = f => {
        this.image3 = f.target.result
      }
      fr.readAsDataURL(file)
      this.images.push(file)
    },
    upload4 (e) {
      const file = e.target.files[0]
      const fr = new FileReader()
      fr.onload = f => {
        this.image4 = f.target.result
      }
      fr.readAsDataURL(file)
      this.images.push(file)
    },
    upload5 (e) {
      const file = e.target.files[0]
      const fr = new FileReader()
      fr.onload = f => {
        this.image5 = f.target.result
      }
      fr.readAsDataURL(file)
      this.images.push(file)
    },
    save () {
      const files = this.images
      const fd = new FormData()
      fd.append('rentaller_id', this.rentaller_id)
      for (var i = 0; i < files.length; i++) {
        fd.append('image', files[i])
      }
      fd.append('car_title', this.car_title)
      fd.append('image', this.images)
      fd.append('description', this.description)
      fd.append('car_brand', this.car_brand)
      fd.append('price_per_day', this.price_per_day)
      fd.append('transmission_id', this.transmission_id)
      fd.append('baggage_capacity', this.baggage_capacity)
      fd.append('engine_capacity', this.engine_capacity)
      fd.append('additional_driver', this.additional_driver)
      fd.append('person_capacity', this.person_capacity)
      fd.append('doors', this.doors)
      fd.append('manufacturing_year', this.manufacturing_year)
      fd.append('fuel_type', this.fuel_type)
      fd.append('avg_fuel_consumption', this.avg_fuel_consumption)
      fd.append('srs_airbag', this.srs_airbag)
      fd.append('rating', this.rating)
      this.uploads()
      this.$store
        .dispatch('postApi', {
          url: 'product',
          data: fd
        })
        .then(res => {
          Swal.fire({
            title: 'Data Berhasil di Input',
            icon: 'success',
            showConfirmButton: false,
            timer: 1200
          })
          this.$store.dispatch('getApi', {
            url: 'product?limit=999',
            mutation: 'SET_CARS_WITHIN_LIMIT'
          }).then(res => {
            this.$router.push('/' + localStorage.id)
          })
        })
    }
  },
  created () {
    Axios.get(`${process.env.VUE_APP_API}carbrand`).then(res => {
      this.carbrands = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}transmission`).then(res => {
      this.transmissions = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}baggagecapacity`).then(res => {
      this.baggagecapacities = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}fueltype`).then(res => {
      this.fueltypes = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}enginecapacity`).then(res => {
      this.enginecapacities = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}additionaldriver`).then(res => {
      this.additionaldrivers = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}personcapacity`).then(res => {
      this.personcapacities = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}doors`).then(res => {
      this.doorss = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}manufacturingyear`).then(res => {
      this.manufacturingyears = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}avgfuelconsumption`).then(res => {
      this.avgfuelconsumptions = res.data.data
    })
    Axios.get(`${process.env.VUE_APP_API}srsairbag`).then(res => {
      this.srsairbags = res.data.data
    })
    console.log(this.images)
  }
}
</script>

<style lang="scss">
.add-car {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px;
  .line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
    margin: 10px;
    .img-temp {
      position: relative;
      overflow: hidden;
      width: 180px;
      height: 180px;
      border: 1px green dashed;
      margin: 5px;
      .aezakmi {
        position: absolute;
        z-index: 1;
        opacity: 0;
        width: 100%;
        height: 100%;
      }
      .img-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .pick {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
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
  content: "Pilih Gambar";
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
