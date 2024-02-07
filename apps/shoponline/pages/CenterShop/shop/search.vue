<template>
    <div>
        <div style="background-color: #0240aa;">
            <div class="fontsProShop d-flex justify-center align-center mx-3">
                <v-text-field v-model="input_search" label="ค้าหาสินค้า" prepend-icon="mdi-magnify" dark
                    style="max-width: 500px;">
                </v-text-field>
                <v-btn small rounded elevation="4" class="ms-2" style="font-size: 16px;" @click="sendListItems()">
                    ค้นหา
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            property: 'value',
            input_search: null,
            cards: [
                { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes1', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips1', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines1', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes2', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines2', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes3', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips3', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes4', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips4', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines4', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes5', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips5', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines5', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes6', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips6', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes7', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips7', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines7', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes8', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips8', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines8', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes9', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips9', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines9', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes10', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips10', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines10', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes11', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips11', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines11', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
                { title: 'Pre-fab homes12', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
                { title: 'Favorite road trips12', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
                { title: 'Best airlines12', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            ],
        };
    },
    computed: {

    },
    mounted() {

    },
    methods: {
        sendListItems() {
            this.$store.commit('SET_LISTITEMS', this.cards);
        }
    }
}
</script>
<style>
.fontsProShop {
    font-family: 'Prompt', sans-serif;
    font-weight: 300;
}
</style>