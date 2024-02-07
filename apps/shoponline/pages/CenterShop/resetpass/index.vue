<template>
    <div class="center-container" style="background: linear-gradient(to top, #00000062, #ffffff94,#ffffff94, #13131370);">
        <selectmenu></selectmenu>
        <remail></remail>
        <repass></repass>
    </div>    
</template>
<script>
import selectmenu from './selectmenu.vue'
import remail from './remail.vue';
import repass from './repass.vue';
export default {
    layout: 'login',
    components:{
        selectmenu,
        remail,
        repass
    }
}
</script>
<style>
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* ทำให้เต็มจอ */
}
</style>