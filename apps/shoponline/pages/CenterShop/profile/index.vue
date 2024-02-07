<template>
    <div>
        <detail></detail>
    </div>
</template>
<script>
import detail from './detail.vue';
import {checkStatus} from '../../../services/check-status'
export default {
    layout: 'default',
    data() {
        return {
            property: 'value',
        };
    },
    mounted() {
        this.checkStatusRank();
    },
    methods: {
        // ตรวจสอบมีการ login หรือไม่
        checkStatusRank(){
            const auth = this.$fireModule.auth();
            checkStatus(auth ,this.$store ,this.$router);
        }
    },
    components: {
        detail
    }
}
</script>