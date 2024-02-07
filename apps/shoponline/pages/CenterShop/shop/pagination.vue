<template>
    <div class="text-center pb-8 pt-5" style="background-color: #d7d7d7;">
        <div v-if="!$store.state.deviceMode">
            <v-pagination v-model="page" :length="paging" :total-visible="7"></v-pagination>
        </div>
        {{ checkListItems }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            down_scroll: 260, //1090
            page: 1,
            paging: 1,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    computed: {
        checkListItems() {
            if(!this.$store.state.deviceMode){
                let sum_paging = this.$store.state.list_item.length/12;
                this.paging = sum_paging > 1 ? Math.ceil(sum_paging) : 1;
                this.$store.commit('SET_SHOWLISTITEMS', this.$store.state.list_item.slice(12*(this.page-1),12*this.page));
                return;
            }
            if(this.$store.state.deviceMode){
                let sum_paging = this.$store.state.list_item.length/6;
                this.paging = sum_paging > 1 ? Math.ceil(sum_paging) : 1;
                this.$store.commit('SET_SHOWLISTITEMS', this.$store.state.list_item.slice(0,6*this.page));
                return;
            }
            return;
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if(!this.$store.state.deviceMode) return
            const scrollPosition = window.scrollY;
            if(scrollPosition >= this.down_scroll){
                this.down_scroll = this.down_scroll+830;
                this.page = this.page + 1;
            }
        }
    }
}
</script>
  

  


