<template>
    <div>
        <detailItems></detailItems>
    </div>
</template>
<script>
import {publicStatus} from '../../../services/public-status';
import detailItems from './detail-items.vue';
export default {
    layout: 'default',
    mounted() {
        this.publicStatus()
    },
    components: {
        detailItems
    },
    methods: {
        publicStatus(){
            publicStatus(this.$fireModule.auth() ,this.$store);
        }
    },
}
</script>