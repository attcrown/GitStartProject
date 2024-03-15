<template>
    <div>
        <detailItems></detailItems>
        <div v-for="typeItem in typeItems" :key="typeItem.id">
            {{ typeItem.seq_no }}. {{ typeItem.name }}
        </div>
    </div>
</template>
<script>
import {publicStatus} from '../../../services/public-status';
import detailItems from './detail-items.vue';
export default {
    layout: 'default',
    data() {
        return {
            typeItems : []
        }
    },
    async mounted() {
        this.publicStatus(),
        await this.getTypeItems()
    },
    components: {
        detailItems
    },
    methods: {
        publicStatus(){
            publicStatus(this.$fireModule.auth() ,this.$store);
        },
        async getTypeItems(){
            await this.$axios.$get('/document-api/items').then(result => {
                this.typeItems = result; 
                console.log(result)
            })
        }
    },
}
</script>