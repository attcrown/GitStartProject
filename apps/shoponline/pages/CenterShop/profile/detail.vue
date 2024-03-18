<template>
    <div class="fontsDetailUser" :class="$store.state.deviceMode ? 'pb-16' : 'pt-10'">
        <center>
            <v-card class="text-center" style="background: linear-gradient(to right, #0240aa, #0210aa ,#0240aa); color: white;" max-width="1000px"
                elevation="24" :class="$store.state.deviceMode ? '' : 'rounded-xxl'">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <div class="pt-5">
                        ข้อมูลส่วนตัว โหมด mobile {{ $store.state.deviceMode }}
                    </div>

                    <div class="m-3">
                        image
                        <v-divider vertical color="black"></v-divider>
                    </div>
                    <v-row dense class="d-flex justify-space-around pb-10">
                        <v-col cols="12" md="2">
                            <v-select class="m-4" v-model="personalData.prefix" :items="selectPrefix"
                                :rules="selectRules" label="Prefix" dark required></v-select>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-text-field class="m-4" v-model="personalData.first_name" :counter="50" :rules="nameRules"
                                dark label="First name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-text-field class="m-4" v-model="personalData.last_name" :counter="50" :rules="nameRules"
                                dark label="Last name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field class="m-4" v-model="personalData.nick_name" :counter="50" :rules="nameRules"
                                dark label="nick name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="personalData.birthday" label="birth day" prepend-icon="mdi-calendar"
                                class="m-4" readonly dark :rules="nameRules" @click="modal = true"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field class="m-4" v-model="personalData.location" :counter="255" :rules="nameRules"
                                dark label="location" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card>

            <v-btn color="#0240aa" dark class="mt-4" @click="validate">
                save confirm
            </v-btn>
        </center>

        <v-dialog ref="dialog" v-model="modal" :return-value.sync="personalData.birthday" persistent width="290px">
            <v-date-picker v-model="personalData.birthday" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                    Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(personalData.birthday)">
                    OK
                </v-btn>
            </v-date-picker>
        </v-dialog>

        <AlertButtom ref="AlertButtom"></AlertButtom>
    </div>
</template>

<script>
import AlertButtom from '~/components/AlertButtom.vue';
export default {
    data() {
        return {
            personalData: [],
            valid: true,
            selectPrefix: ["Mr", "Mrs", "Miss"],
            modal: false,

            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 50) || 'Name must be less than 50 characters',
            ],
            selectRules: [
                v => !!v || 'Item is required'
            ]
        }
    },
    watch: {
        '$store.state.uid': {
            handler: function (newVal, oldVal) { // เรียกใช้งานตอนค่าเปลี่ยน '$store.state.uid'
                this.searchDetail();
            },
            immediate: true // เรียกใช้งานครั้งแรก
        }
    },

    components: {
        AlertButtom
    },
    methods: {
        async searchDetail() {
            if (!this.$store.state.uid) return
            try {
                const detailUser = await this.$axios.$get('/document-api/searchusersid', { params: { id: this.$store.state.uid, admin: true } });
                this.personalData = detailUser
            } catch (error) {
                this.alertFail("ไม่พบข้อมูลผู้ใช้งาน")
            }
        },
        alertFail(message) {
            this.$refs.AlertButtom.snackbar = true;
            this.$refs.AlertButtom.colorAlart = 'red';
            this.$refs.AlertButtom.text = message;
            this.$refs.AlertButtom.icon = 'mdi mdi-alert-circle';
        },
        alertSuccess() {
            this.$refs.AlertButtom.snackbar = true;
            this.$refs.AlertButtom.colorAlart = 'success';
            this.$refs.AlertButtom.text = 'บันทึกข้อมูลสําเร็จ';
            this.$refs.AlertButtom.icon = 'mdi mdi-check-circle-outline';
        },
        async validate () {
            if(this.$refs.form.validate()){
                console.log(this.personalData)
                try {
                    const editUser = await this.$axios.$put('/document-api/updateusers', {
                        id: this.personalData.id,
                        first_name: this.personalData.first_name,
                        last_name: this.personalData.last_name,
                        nick_name: this.personalData.nick_name,
                        birthday: this.personalData.birthday,
                        location: this.personalData.location,
                        prefix: this.personalData.prefix
                    } , { params: { admin: true } });
                    this.alertSuccess()
                }catch (error) {
                    this.alertFail("บันทึกข้อมูลผิดพลาด กรุณาติดต่อผู้ดูแลระบบ")
                }
            }else{
                this.alertFail("กรุณากรอกข้อมูลให้ครบถ้วน")
            }
        },
    },
}
</script>
<style>
.fontsDetailUser {
    font-family: "Prompt", sans-serif;
    font-weight: 300;
}
</style>