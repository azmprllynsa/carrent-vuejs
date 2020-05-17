<template>
  <div class="checkout">
    <h2>Form Pemesanan</h2>
    <div class="up">
      <NotFound v-if="checkout.driver === undefined"
        code="."
        msg="Oops, pesan dulu yuk"
      />
      <div v-else class="woz d-flex">
        <Card v-for="car in [carInCheckout]" :key="car.id" :car="car" />
        <div class="infoker">
          <FormCheckout :checkout="checkout"/>
        </div>
      </div>
      <div class="wozasky">
        <div class="info">
          <h5 class="dtl-pmsn mb-2 pb-2">Detail Pemesan</h5>
          <Form/>
          <p class="foot m-0 text-success">memesan untuk orang lain?</p>
        </div>
        <div class="info-foot">
          <div class="space">
            <section class="addsome d-flex">
              <p class="mr-3 m-0">Buat Permintaan Khusus</p>
              <i class="fas fa-pen"></i>
            </section>
            <section>
              <h5>Grand Total :</h5>
              <h4 class="text-success">IDR. {{ checkout.grand_total === undefined ? '0' : checkout.grand_total }}</h4>
            </section>
            <button class="for-btn"  data-toggle="modal" data-target="#exampleModal">Lanjut Ke Pembayaran</button>

<!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Select Payment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="main-debt">
                      <section class="list-debt">
                        <div class="img-debt">
                          <img src="../assets/img/logo-bca.png" width="100px" height="100px" alt="">
                        </div>
                        <div class="name-debt">
                          <h5>BCA</h5>
                          <p>Bayar dengan ATM BCA atau bca m-banking</p>
                        </div>
                        <div class="nxt">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </section>
                      <section class="list-debt">
                        <div class="img-debt">
                          <img src="../assets/img/BNI-logo.png" width="100px" height="100px" alt="">
                        </div>
                        <div class="name-debt">
                          <h5>BNI</h5>
                          <p>Bayar dengan ATM BNI atau BNI m-banking</p>
                        </div>
                        <div class="nxt">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </section>
                      <section class="list-debt">
                        <div class="img-debt">
                          <img src="../assets/img//mandiri.jpg" width="100px" height="100px" alt="">
                        </div>
                        <div class="name-debt">
                          <h5>Mandiri</h5>
                          <p>Bayar dengan ATM mandiri atau mandiri m-banking</p>
                        </div>
                        <div class="nxt">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </section>
                       <section class="list-debt">
                        <div class="img-debt">
                          <img src="../assets/img/permata.jpg" width="100px" height="100px" alt="">
                        </div>
                        <div class="name-debt">
                          <h5>Permata</h5>
                          <p>Bayar dengan ATM Permata atau Permata m-banking</p>
                        </div>
                        <div class="nxt">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </section>
                       <section class="list-debt">
                        <div class="img-debt">
                          <img src="../assets/img/ovo.jpg" width="100px" height="100px" alt="">
                        </div>
                        <div class="name-debt">
                          <h5>Permata</h5>
                          <p>Bayar dengan aplikasi OVO</p>
                        </div>
                        <div class="nxt">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </section>
                       <section class="list-debt">
                        <div class="img-debt">
                          <img src="../assets/img/Gopay-Sponsor-Persik-New.png" width="100px" height="100px" alt="">
                        </div>
                        <div class="name-debt">
                          <h5>Gopay</h5>
                          <p>Bayar dengan aplikasi Gopay</p>
                        </div>
                        <div class="nxt">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </section>
                       <section class="list-debt">
                        <div class="img-debt">
                          <img src="../assets/img/dana.jpeg" width="100px" height="100px" alt="">
                        </div>
                        <div class="name-debt">
                          <h5>Dana</h5>
                          <p>Bayar dengan aplikasi Dana</p>
                        </div>
                        <div class="nxt">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Pay Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import FormCheckout from '../components/base_/FormCheckout'
import Form from '../components/base_/form'
import NotFound from '../views/PageNotFound.vue'
import { mapState } from 'vuex'

export default {
  name: 'Checkout',
  components: {
    Card,
    FormCheckout,
    Form,
    NotFound
  },
  computed: {
    ...mapState([
      'checkout',
      'carInCheckout'
    ])
  }
}
</script>

<style lang="scss" scoped>
.checkout {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 70px;
  padding: 0 100px;
  .up {
    display: flex;
    align-items: center;
    flex-direction: column;
    // width: 800px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
      .woz{
        width: 100%;
        background: #fafbfc;
      }
      .wozasky{
        display: flex;
        width: 100%;
        background: #fafbfc;
      }
      .infoker{
        display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 10px;
      margin: 10px 10px 10px 20px;
      width: 100%;
      height: 100%;
      background: #fafbfc;
      }
    .info{
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 10px;
      margin: 10px 10px 10px 20px;
      width: 740px;
      height: 100%;
      background: #fafbfc;
    }
    .info-foot {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 10px;
      margin: 10px 10px 10px 20px;
      width: 500px;
      height: 100%;
      background: #fafbfc;
        .dtl-pmsn{
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }
        .foot{
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          font-size: 12px;
          font-weight: 600;
          text-align: end;
          cursor: pointer;
        }
        .space {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 300px;
          height: 273px;
            .addsome {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              padding: 5px;
              color: #c0eb75;
              background: #ffffff;
              border: 1px solid rgba(0, 0, 0, 0.12);
              border-radius: 5px;
            }
            .for-btn {
              border: 3px solid #ffffff;
              padding: 10px 20px;
              border-radius: 5px;
              width: 100%;
              background: #770b1e;
              color: #ffffff;
              font-weight: 600;
            }
        }
    }
  }

  .list-debt{
    display: flex;
    width: 100%;
    align-items: center;
    height: 80px;
    border: rgba(0, 0, 0, 0.12) 1px solid;
    padding: 5px;
    margin-bottom: 3px;
      .img-debt{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 100%;
        overflow: hidden;
        margin-right: 20px;
          img {
          object-fit: contain;
          width: 100%;
          // height: 100%;
        }
      }
    .name-debt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 60%;
      height: 100%;
      border-left: 1px solid rgba(0, 0, 0, 0.12);
      padding-left: 15px ;
      h5 {
        font-weight: 600;
        padding: 0;
        margin: 0;
      }
        p {
          font-size: 12px;
          padding: 0;
          margin: 0;
        }
    }
    .nxt {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 10%;
      align-content: center;
      font-size: 16px;
    }
  }
}
</style>
