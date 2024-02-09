<template>
    <div>
        <div :class="!deviceMode ? 'center-container' : ''" 
            :style="!deviceMode ? 'height: 89vh;' : 'height: 100%;'" 
            style="background: linear-gradient(to right, #ffa600ad, #f0d47894,#eef07894, #faac059a);">
            <div class="container fontsMoi text-center " rounded="xxl"
                style="background-color:transparent; max-width: 500px;">
                <!-- <div class="d-flex justify-center">
                    <v-img :src="require('@/assets/logoexchange.png')" style="opacity: 0.8" max-width="300px"></v-img>
                </div>                 -->
                <h1 class="fw-bold">HosMerge Shop <span class="mdi mdi-shopping-outline text-h4"></span></h1>
                <hr style="border-bottom: 2px solid #000">
                <p class="text--secondary font-weight-black fontsPro">
                    <br>ทุกอย่างจะง่ายขึ้นเพียงแค่คลิกเดียวก็เทรดได้แล้ว <br><br>
                    👇ทดลองระบบได้แล้ววันนี้👇
                </p>                
                <v-btn
                    @click="$router.push('/CenterShop/shop')"
                    color="success"
                    dark
                    class="fontsPro"
                    rounded
                    elevation="16">      
                    <div class="ms-3 d-flex justify-center">            
                        ไปหน้าร้านค้า 
                        <v-icon color="#FAFAFA">
                            mdi-chevron-right
                        </v-icon> 
                    </div>                                      
                </v-btn>                
            </div>
            <v-card elevation="5" :class="!deviceMode ? 'container rounded-xxl' : 'container'" max-width="500px"
                style="background-color: rgba(255, 255, 255, 0.401);">
                <h1 class="text-center fontsPro">LOGIN</h1>
                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-text-field
                        v-model="register.email" 
                        :rules="emailRules" 
                        prepend-icon="mdi mdi-email-outline"
                        required></v-text-field>

                    <v-text-field 
                        v-model="register.password" 
                        :rules="passRules" 
                        type="password" 
                        prepend-icon="mdi mdi-lock"
                        required></v-text-field>

                    <div class="text-center fontsPro">
                        <v-btn :disabled="!valid" color="success" rounded @click="validate">
                            เข้าสู่ระบบ
                            <v-icon right dark>
                                mdi-login
                            </v-icon>
                        </v-btn>
                    </div>
                </v-form>
                <v-card-text class="fontsPro">
                    <a href="#" @click="sendSignin(true)">หากยังไม่ได้ลงทะเบียน กรุณาลงทะเบียน</a><br><br>
                    <a href="/CenterShop/resetpass">ต้องการเปลี่ยนรหัสผ่าน</a>
                </v-card-text>
            </v-card>
        </div>
        <v-card v-if="!deviceMode">
            <p class="text-center fontsPro pt-1">
                English (UK) ภาษาไทย 日本語 中文(简体) Tiếng Việt Français (France) Deutsch Русский Español Português (Brasil) <br>
                การันตีความปลอดภัยแบบ Real-time ที่ทันสมัยในทุกช่วงการใช้งาน <br>
                Ensuring real-time, cutting-edge security throughout every usage phase. <br>
                © 2024
            </p>
        </v-card>
        <signin></signin>
        <AlertButtom ref="AlertButtom"></AlertButtom>
    </div>
</template>
<script>
import AlertButtom from '~/components/AlertButtom.vue';
import signin from './signin.vue';
import { sendSignin } from './signin.vue';
export default {
    layout: 'login',
    data: () => ({
        valid: true,
        deviceMode: true,
        register: [],
        passRules: [
            v => !!v || 'Password is required'
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

    }),

    components: {
        AlertButtom,
        signin
    },

    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },

    methods: {
        checkMobile() {
            // ตรวจสอบขนาดหน้าจอและกำหนดค่าให้ isMobile
            this.deviceMode = window.innerWidth <= 768; // ตั้งค่าให้เป็น mobile ถ้าขนาดน้อยกว่าหรือเท่ากับ 768 pixels
        },
        validate() {
            if (this.$refs.form.validate()) {
                this.login(this.register);
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },

        login(item) {
            const auth = this.$fireModule.auth();
            auth.signInWithEmailAndPassword(item.email, item.password) // ในตัวอย่างนี้ "PASSWORD" ควรถูกเปลี่ยนเป็นรหัสผ่านที่ผู้ใช้ลงทะเบียนไว้
                .then((userCredential) => {
                    // การลงชื่อเข้าใช้สำเร็จ
                    const user = userCredential.user;
                    console.log("User logged in successfully:", user);
                    if (!user.emailVerified) {
                        //snackbar
                        this.$refs.AlertButtom.snackbar = true;
                        this.$refs.AlertButtom.colorAlart = 'red';
                        this.$refs.AlertButtom.text = 'กรุณายืนยันอีเมล';
                    }else{
                        this.$store.commit('SET_USER', user);
                        this.$router.push('/CenterShop/shop');
                    }                    
                })
                .catch((error) => {
                    // การลงชื่อเข้าใช้ไม่สำเร็จ
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Login failed:", errorCode, errorMessage);

                    //snackbar
                    this.$refs.AlertButtom.snackbar = true;
                    this.$refs.AlertButtom.colorAlart = 'red';
                    this.$refs.AlertButtom.text = 'ไม่สามารเข้าสู่ระบบได้';
                });
        },
        sendSignin(item){
            sendSignin.$emit('ShowSign', item, (callback) => {
                console.log(callback);
            })
        }
    }
}
</script>

<style>
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* ทำให้เต็มจอ */
}


.fontsMoi {
    font-family: 'Moirai One', sans-serif;
    font-weight: 400;
}

.fontsPro {
    font-family: 'Prompt', sans-serif;
    font-weight: 800;
}

.fontsDanc {
    font-family: 'Dancing Script', sans-serif;
    font-weight: 500;
}
</style>
