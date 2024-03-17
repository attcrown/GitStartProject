<template>
    <div>
        <detail v-if="doing"></detail>
    </div>
</template>
<script>
import detail from './detail.vue';
import {checkStatus} from '../../../services/check-status'
export default {
    layout: 'default',
    data() {
        return {
            property: 'value' ,
            doing : false

        };
    },
    async mounted() {
        await this.checkStatusRank();
        this.doing = true
    },
    methods: {
        // ตรวจสอบมีการ login หรือไม่
        async checkStatusRank(){
            const auth = this.$fireModule.auth();
            await checkStatus(auth ,this.$store ,this.$router);
        }
    },
    components: {
        detail
    }
}
</script>