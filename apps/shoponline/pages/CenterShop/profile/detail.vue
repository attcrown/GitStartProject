<template>
    <div>
        {{ this.$store.state.displayName }}
        {{ this.$store.state.email }}
        {{ this.$store.state.uid }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },  
    async mounted() {
        await this.searchDetail();
    },
    methods: {
        async searchDetail() {
            console.log(this.$store.state.uid);
            try {
                const detailUser = await this.$axios.$get('/document-api/searchusersid/' , {params : {id : this.$store.state.uid ,admin : true}});
                console.log(detailUser)
            } catch (error) {
                
            }
        }
    },
}
</script>