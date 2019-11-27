<template>
<div class="registerContent">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row justify="center">
                <v-col cols="1" md="5" sm="2">
                    <v-text-field v-model="names" :rules="nameRules" label="Nombres" required></v-text-field>
                </v-col>

                <v-col cols="1" md="5" sm="2">
                    <v-text-field
                            v-model="lastnames"
                            :rules="lastnamesRules"
                            label="Apellidos"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="1" md="6" sm="2">
                    <v-text-field v-model="email" :rules="emailRules" label="Correo" required></v-text-field>
                    <v-text-field
                            v-model="password"
                            :append-icon="show3 ? 'visibility' : 'visibility_off'"
                            :rules="[rules.required, rules.emailMatch]"
                            :type="show3 ? 'text' : 'password'"
                            name="input-10-2"
                            label="Contraseña"
                            hint="Mínimo 8 caracteres"
                            value
                            class="input-group--focused"
                            required
                            @click:append="show3 = !show3"
                    ></v-text-field>
                    <v-text-field
                            v-model="conPassword"
                            :append-icon="show4 ? 'visibility' : 'visibility_off'"
                            :rules="[rules.required, rules.emailMatch,rules.samePassword]"
                            :type="show4 ? 'text' : 'password'"
                            name="input-10-2"
                            label="Confirmar contraseña"
                            hint="Mínimo 8 caracteres"
                            value
                            class="input-group--focused"
                            required
                            @click:append="show4 = !show4"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="1" md="3" sm="1">
                    <p>
                        <v-checkbox
                                v-model="roleStudent"
                                label="Estudiante"
                                color="primary"
                                hide-details
                        ></v-checkbox>
                    </p>
                </v-col>
                <v-col cols="1" md="3" sm="1">
                    <p>
                        <v-checkbox
                                v-model="roleMonitor"
                                label="Monitor"
                                color="primary"
                                hide-details
                        ></v-checkbox>
                    </p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="1" md="6" sm="2">
                    <v-select
                            v-model="programs"
                            :menu-props="{ maxHeight: '400' }"
                            label="Select"
                            :items="programsData"
                            item-text="name"
                            multiple
                            hint="Selecciona tus programas"
                            persistent-hint
                    ></v-select>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="1" md="6" sm="2">
                    <v-select
                            :disabled="!roleMonitor"
                            v-model="courses"
                            :items="programs.length>0?subjects:['Cargando']"
                            :menu-props="{ maxHeight: '400' }"
                            label="Select"
                            multiple
                            hint="Selecciona tus materias"
                            persistent-hint
                    ></v-select>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="1" md="3" sm="1">
                    <v-btn
                            color="primary"
                            @click="sendRegisterData()"
                    >Registrarse</v-btn>
                </v-col>
            </v-row>
        </v-form>
        <v-dialog persistent v-model="dialog" max-width="300px">
            <v-card>
                <v-card-title>
                    Registro exitoso
                </v-card-title>
                <v-card-text>
                    Se ha registrado exisotasemente el usuario
                </v-card-text>
                <v-card-actions>
                    <v-btn to='/login'>
                        Entendido
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Register",
        data: function() {
            return {
                title: "Registro",
                names: "",
                dialog:false,
                lastnames: "",
                roleStudent: false,
                roleMonitor: false,
                email: "",
                password: "",
                conPassword: "",
                ex4: ["materias", "programas"],
                role: [],
                courses: [],
                programs: [],
                subjects:[],
                programsData:[],
                roleObjec: [],
                isOpen:false,
                fail:"",
                show1: false,
                show2: true,
                show3: false,
                show4: false,
                rules: {
                    required: value => !!value || "Required.",
                    min: v => v.length >= 8 || "Min 8 characters",
                    samePassword: value=> value===this.password || "Las contraseñas no coinciden"
                },
                nameRules: [
                    name => !!name || "El nombre es requerido",
                    name => name.length > 2 || "El nombre debe ser más largo a 3 caracteres"
                ],
                lastnamesRules: [
                    lastname => !!lastname || "El apellido es requerido",
                    lastname =>
                        lastname.length > 3 || "El apellido debe ser más largo a 3 caracteres"
                ],
                emailRules:[
                    email => !!email || "El correo es requerido",
                    email => /^[a-zA-Z0-9_.+-]+@(correo.icesi.edu|icesi.edu)\.co$/.test(email) ||  "El correo no es valido"
                ]
            };
        },
        computed:{

        },
        created(){
          this.fetchProgramsData()
        },
        methods: {
            async fetchProgramsData() {
                let url = this.$store.state.backend + "/getPrograms";
                let programs =[]
                await axios.get(url,{headers:{
                        "Access-Control-Allow-Origin":"*"
                    }}).then(response => response.data.map(s => programs.push(s)))
                    .catch(error => {
                        this.msg = "Errorazo";
                    });
                console.log(programs)
                this.programsData=programs
            },
            sendRegisterData: function() {
                let url = this.$store.state.backend + "/registerUser";

                axios.post(url,{
                    email : this.email,
                password : this.password,
                monitor : this.roleMonitor,
                student : this.roleStudent,
                name : this.name+" "+this.lastnames,
                program : this.programs,
                }).then(res=>{
                    if(res.status==200){
                       this.dialog=true
                    }
                }
  ).catch(res=>{
      this.dialog=true
                })
            }
        },
        watch:{
            programs:{
                async handler(){
                        let subjects=[]
                         await this.programs.map(p=>{
                             axios.get(`${this.$store.state.backend}/getSubjects?program=${p}`).
                            then(res=>{

                                res.data[0].map(s=>{
                                    if(!this.subjects.includes(s)){
                                        subjects.push(s)
                                    }
                                })
                            })
                        })
                    this.subjects=subjects
                }
            }
        }
    };
</script>

<style scoped>

</style>
