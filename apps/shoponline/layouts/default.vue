<template>
    <v-app> 
        <desktopDefault v-if="!deviceMode"></desktopDefault>
        <mobileDefault v-if="deviceMode"></mobileDefault>  
        <v-main :class="!deviceMode ? 'mt-11' : 'mt-0'">
            <Nuxt />
        </v-main>        
    </v-app>
</template>
<script>
import desktopDefault from './desktopDefault.vue';
import mobileDefault from './mobileDefault.vue';
export default {
    name: "defalutLayout",
    data() {
        return {
            deviceMode: false,
        };
    },
    components: {
        desktopDefault,
        mobileDefault
    },
    mounted() {    
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    methods: {        
        checkMobile() {
            this.deviceMode = window.innerWidth <= 768; // ตั้งค่าให้เป็น mobile ถ้าขนาดน้อยกว่าหรือเท่ากับ 768 pixels
            this.$store.commit("SET_DEVICE", this.deviceMode);
        },
    },
};
</script>
