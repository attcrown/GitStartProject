<template>
    <div class="container text-center fontsPro fw-bold" v-if="ClickMode">
        <!-- <v-btn elevation="8" x-large color="primary" class="m-3" 
            @click="ClickMode = !ClickMode , sendRemail(true)">
            ต้องการเปลี่ยน อีเมลใหม่ <span class="mdi mdi-gmail text-h4"></span>
        </v-btn> -->
        <v-btn elevation="8" x-large color="primary" class="m-3" 
            @click="ClickMode = !ClickMode ,sendRepass(true)">
            ต้องการเปลี่ยน รหัสผ่านใหม่ <span class="mdi mdi-form-textbox-password text-h4"></span>
        </v-btn>
    </div>
</template>
<script>
import Vue from 'vue';
import { PostRemail} from './remail.vue'
import { PostRpass } from './repass.vue';
export const PostSelectMenu = new Vue();
export default {
    data: () => ({
        ClickMode: true
    }),

    created() {
        PostSelectMenu.$on('ShowMenu', (item, callback) => {
            this.ShowMenu(item, callback);
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
        sendRemail(item){
            PostRemail.$emit('ShowEmail', item, (callback) => {
                console.log(callback);
            })
        },
        sendRepass(item){
            PostRpass.$emit('ShowPass', item, (callback) => {
                console.log(callback);
            })
        },
        ShowMenu(item,callback){
            this.ClickMode = item;
            callback('show menu');
        }
    }
}
</script>
<style>
.fontsPro {
    font-family: 'Prompt', sans-serif;
    font-weight: 800;
}
</style>