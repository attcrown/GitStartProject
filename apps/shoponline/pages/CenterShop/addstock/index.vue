<template>
    <div>
        <LoadingItem></LoadingItem>
    </div>
</template>
<script>
import LoadingItem from '~/components/LoadingItem.vue';
import { checkStatus } from '../../../services/check-status';
export default {
    layout: 'default',
    mounted() {
        this.checkStatusRank();
    },
    components: {
        LoadingItem
    },
    methods: {
        checkStatusRank(){
            const auth = this.$fireModule.auth();
            checkStatus(auth ,this.$store ,this.$router);
        }
    }
}
</script>