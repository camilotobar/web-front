<template>
  <section style="height:100vh" class="form-elegant">
    <mdb-row>
      <mdb-col md="3" class="mx-auto">
        <mdb-card>
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5"><strong>Iniciar sesión</strong></h3>
            </div>
            <mdb-input label="Correo" type="email"/>
            <mdb-input label="Contraseña" type="password" containerClass="mb-0"/>
            <p class="font-small blue-text d-flex justify-content-end pb-3"><a href="#" class="blue-text ml-1">¿Olvidaste tu contraseña?</a></p>
            <div class="text-center mb-3">
              <mdb-btn type="button" gradient="blue" rounded class="btn-block z-depth-1a">Ingresar</mdb-btn>
            </div>
            <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> O inicia sesión con:</p>
            <div class="row my-3 d-flex justify-content-center">
              <v-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><v-icon >mdi-facebook</v-icon></v-btn>
              <v-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn type="button" color="white" rounded class="z-depth-1a"><v-icon >mdi-instagram</v-icon></v-btn>
            </div>
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">¿No eres miembro? <a href="#" class="blue-text ml-1">Registrarte</a></p>
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon, mdbModal, mdbModalBody, mdbModalFooter } from 'mdbvue';
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
        showModal: false
      };
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