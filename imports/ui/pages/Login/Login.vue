<template>
  <section style="height:100vh" class="form-elegant">
    <mdb-row style="margin-top:100px">
      <v-dialog width="300px" v-model="openDialog">
        <mdb-card  >
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5"><strong>Imposible iniciar sesión</strong></h3>
              <p>No existe un usuario con esas credenciales, regístrate</p>
            </div>
            <mdb-btn @click="openDialog=false">
            Entendido
            </mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </v-dialog>
      <mdb-col md="3" class="mx-auto">
        <mdb-card>
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5"><strong>Iniciar sesión</strong></h3>
            </div>
            <mdb-input label="Correo" v-model="email" type="email"/>
            <mdb-input label="Contraseña" v-model="password" type="password" containerClass="mb-0"/>
            <p class="font-small blue-text d-flex justify-content-end pb-3"><a href="#" class="blue-text ml-1">¿Olvidaste tu contraseña?</a></p>
            <div class="text-center mb-3">
              <mdb-btn type="button" gradient="blue" @click="sendLogin()" rounded class="btn-block z-depth-1a">Ingresar</mdb-btn>
            </div>
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">¿No eres miembro? <router-link to="/signup" class="blue-text ml-1">Registrarte</router-link></p>
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon, mdbModal, mdbModalBody, mdbModalFooter } from 'mdbvue';
  import {mapActions} from 'vuex'
  import axios from 'axios'
  export default {
    name: 'Login',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalBody,
      mdbModalFooter
    },
    data() {
      return {
        showModal: false,
        email:"",
        password:"",
        openDialog:false
      };
    },
    methods:{
      ...mapActions(['setPerson']),

      sendLogin(){
        axios.post("https://us-central1-proyecto-web-km.cloudfunctions.net/loginUser",{
          email:this.email,
          password:this.password
        }).then(response=>{
          if(response.status==200){
            axios.get("https://us-central1-proyecto-web-km.cloudfunctions.net/getUser?email="+this.email).then(
                    response=>{
                      console.log(response)
                      let roles=[]
                      if(response.data.student){
                        roles.push('student')
                      }
                      if(response.data.monitor){
                        roles.push('monitor')
                      }
                      this.setPerson({
                        id:this.email,
                        roles:roles,
                        login:true
                      })
                    }
            )
          }
          else{
            this.openDialog=true
          }
          this.$router.push({name:'dashboard'})
        })
      }
    }
  }
</script>

<style>
.form-elegant{
    background-size: cover;
    background: url('./img/background.jpg')
}
.form-elegant .font-small {
    font-size: 0.8rem; }

.form-elegant .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }
</style>
