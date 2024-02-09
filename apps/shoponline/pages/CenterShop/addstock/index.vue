<template>
    <div>
        <listmenu></listmenu>
    </div>
</template>
<script>
import LoadingItem from '~/components/LoadingItem.vue';
import listmenu from './listmenu.vue';
import { checkStatus } from '../../../services/check-status';
export default {
    layout: 'default',
    mounted() {
        this.checkStatusRank();
    },
    components: {
        LoadingItem,
        listmenu
    },
    methods: {
        checkStatusRank(){
            const auth = this.$fireModule.auth();
            checkStatus(auth ,this.$store ,this.$router);
        }
    }
}
</script>