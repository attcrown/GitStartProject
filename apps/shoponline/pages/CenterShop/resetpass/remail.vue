<template>
    <v-card v-if="ClickMode" :class="!deviceMode ? 'container rounded-xxl' : 'container'" class="text-center" max-width="500px"
    style="background: linear-gradient(to top, rgba(0, 110, 255, 0.555), rgba(91, 159, 247, 0.555) ,rgba(185, 214, 252, 0.555);">
        <v-form ref="form" v-model="valid" lazy-validation>
            <h5 class="text-center fontsPro" style="color: rgb(179, 3, 3);">RESET E-mail</h5>
            <v-text-field v-model="email" :rules="emailRules" prepend-icon="mdi mdi-email-outline" label="Email" required>
            </v-text-field>
        </v-form>
        <v-btn @click="ClickMode = !ClickMode ,sendSelectMenu(true)">
            back
        </v-btn>
    </v-card>
</template>
<script>
import Vue from 'vue';
import { PostSelectMenu } from './selectmenu.vue';
export const PostRemail = new Vue();
export default {
    data: () => ({
        deviceMode: true,
        valid: true,
        ClickMode: false,
        email: null,
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }),
    created() {
        PostRemail.$on('ShowEmail', (item, callback) => {
            this.ShowEmailControl(item, callback);
        });
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
        ShowEmailControl(item, callback){
            this.ClickMode = item;
            callback('success remail');
        },
        sendSelectMenu(item){
            PostSelectMenu.$emit('ShowMenu', item, (callback) => {
                console.log(callback);
            })
        }
    }

}
</script>