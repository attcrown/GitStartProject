<template>
    <div class="fontsDetailUser">
        <center>
            <v-card 
                class="text-center" 
                style="background-color: #0240aa; color: white;" 
                max-width="1000px"
                elevation="24"
                :class="$store.state.deviceMode ? 'mt-0' : 'mt-10 rounded-xxl'">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <div class="pt-5">
                        ข้อมูลส่วนตัว โหมด mobile {{ $store.state.deviceMode }}
                    </div>

                    <div class="m-3">
                        image
                        <v-divider vertical color="black"></v-divider>
                    </div>
                    <v-row dense class="d-flex justify-space-around">
                        <v-col cols="12" md="3">
                            <v-text-field class="m-4" v-model="personalData.prefix" :counter="10" :rules="nameRules"
                                dark label="prefix" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field class="m-4" v-model="personalData.first_name" :counter="10" :rules="nameRules"
                                dark label="Last name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field class="m-4" v-model="personalData.last_name" :counter="10" :rules="nameRules"
                                dark label="First name" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card>
        </center>

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

            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
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
                const detailUser = await this.$axios.$get('/document-api/searchusersid/', { params: { id: this.$store.state.uid, admin: true } });
                this.personalData = detailUser
                console.log(this.personalData)
            } catch (error) {
                this.alertFail("ไม่พบข้อมูลผู้ใช้งาน")
            }
        },
        alertFail(message) {
            this.$refs.AlertButtom.snackbar = true;
            this.$refs.AlertButtom.colorAlart = 'red';
            this.$refs.AlertButtom.text = message;
            this.$refs.AlertButtom.icon = 'mdi mdi-alert-circle';
        }
    },
}
</script>
<style>
.fontsDetailUser {
    font-family: "Prompt", sans-serif;
    font-weight: 300;
}
</style>