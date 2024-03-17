<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="400px">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-card rounded="xl" class="fontsProSign">
                    <v-card-title>
                        <span class="text-h5 fw-bold">Sign Up</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="dialog = false" text icon>
                            <v-icon>mdi mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>
                    <p class="ms-4">It's quick and easy.</p>
                    <hr style="border-bottom: 1px solid #000">
                    <v-card-text style="margin-top: -20px">
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="register.displayName" label="Username" :rules="nameRules"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="12" style="margin-top: -20px">
                                    <v-text-field v-model="register.email" label="Email" :rules="emailRules"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="12" style="margin-top: -20px">
                                    <v-text-field v-model="register.password" label="Password" type="password"
                                        :rules="passRules" required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*กรุณาใช้ Email ที่มีอยู่จริง</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="success" :disabled="!valid" :loading="loadingCreate" @click="validate"
                            class="mb-3">
                            Sign Up
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
        <AlertButtom ref="AlertButtom"></AlertButtom>
    </div>
</template>
<script>
import Vue from 'vue';
import AlertButtom from '~/components/AlertButtom.vue';
export const sendSignin = new Vue();
export default {
    layout: 'login',
    data: () => ({
        loadingCreate: false,
        dialog: false,
        valid: true,
        register: [],
        nameRules: [
            v => !!v || 'Username is required',
            v => (v && v.length <= 20) || 'Username must be less than 20 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passRules: [
            v => !!v || 'Password is required',
        ],
    }),
    components: {
        AlertButtom
    },
    created() {
        sendSignin.$on('ShowSign', (item, callback) => {
            this.ShowSign(item, callback);
        });
    },

    methods: {
        ShowSign(item, callback) {
            this.dialog = item;
            callback('show signin');
        },
        validate() {
            if (this.$refs.form.validate()) {
                this.loadingCreate = true;
                this.register_user(this.register);
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
        async register_user(item) {
            const auth = this.$fireModule.auth();
            let createUser = null

            try{
                createUser = await auth.createUserWithEmailAndPassword(item.email, item.password);
            }catch(error){
                this.alartFail("สมัครไม่สำเร็จ เนื่องจาก Email นี้ถูกใช้แล้ว");
                return;
            }

            const user = createUser.user;
            // console.log("User registered successfully:", user);

            try{
                await this.$axios.$post("/document-api/create", { id: user.uid });
            }catch(error){               
                this.alartFail("ระบบไม่สามารถเชื่อมต่อกับฐานข้อมูลได้ กรุณาติดต่อผู้ดูแลระบบ");
                user.delete();
                return
            }

            const userProfile = { email: item.email, displayName: item.displayName};
            await user.updateProfile(userProfile);
            await user.sendEmailVerification(); 
            this.alartSuccess();
            // console.log("Email verification sent to user:", user.email);
        },

        alartFail(message) {
            this.reset();
            this.$refs.AlertButtom.snackbar = true;
            this.$refs.AlertButtom.colorAlart = 'red';
            this.$refs.AlertButtom.text = message;
            this.$refs.AlertButtom.icon = 'mdi mdi-alert-circle';
            this.loadingCreate = false;
        },
        alartSuccess() {
            this.reset();
            this.dialog = false;
            this.loadingCreate = false;
            this.$refs.AlertButtom.snackbar = true;
            this.$refs.AlertButtom.colorAlart = 'success';
            this.$refs.AlertButtom.text = 'สมัครสำเร็จ กรุณายืนยัน Email ก่อนเข้าใช้งาน';
            this.$refs.AlertButtom.icon = 'mdi mdi-check-circle-outline';
        }
    }
}
</script>
<style>
.fontsProSign {
    font-family: 'Prompt', sans-serif;
    font-weight: 300;
}
</style>