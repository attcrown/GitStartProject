<template>
    <div>
        <additems></additems>
    </div>
</template>
<script>
import LoadingItem from '~/components/LoadingItem.vue';
import additems from './additems.vue';
import { checkStatus } from '../../../services/check-status';
export default {
    layout: 'default',
    mounted() {
        this.checkStatusRank();
    },
    components: {
        LoadingItem,
        additems
    },
    methods: {
        checkStatusRank(){
            const auth = this.$fireModule.auth();
            checkStatus(auth ,this.$store ,this.$router);
        }
    }
}
</script>