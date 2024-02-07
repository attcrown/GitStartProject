<template>
    <div>
        <!-- <div style="background-color: #0240aa;" class="pt-3 pb-3">
            <hr class="mx-10" style="border-bottom: 2px solid #212020c0">
        </div> -->
        <div style="background-color: #d7d7d7;">
            <v-container fluid :class="!$store.state.deviceMode ? 'd-flex justify-center' : ''"
                :style="!$store.state.deviceMode ? 'max-width: 1200px' : ''">
                <v-row dense class="fontsProList">
                    <v-col cols="12" class="text-center">
                        <div style="font-size: 28px;" class="mt-5">
                            <v-icon left :color="this.cards.length === 0 ? 'red' : '#FF9800'" style="font-size: 32px;">
                                {{ this.cards.length === 0 ? 'mdi-archive-cancel-outline' : 'mdi-label' }}
                            </v-icon>
                            {{ this.cards.length === 0 ? 'ไม่พบสินค้า' : 'รายการสินค้าแนะนำ' }}
                        </div>
                    </v-col>
                    <v-col v-for="card in cards" :key="card.title" :cols="$store.state.deviceMode ? 6 : 3">
                        <v-hover v-slot="{ hover }">
                            <v-card :elevation="hover ? 16 : 2" :class="!$store.state.deviceMode ? 'm-1' : 'mb-4'" @click="nextToDetail(card)">
                                <v-img :src="card.src" class="white--text align-end"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title v-text="card.title"></v-card-title>
                                </v-img>

                                <v-card-text>
                                    <p style="margin-bottom: -3px;">เครื่องบิน F1 รุ่น {{ 100+Math.floor(Math.random() * 100) }}</p>
                                    <v-rating v-model="rating" background-color="white" color="yellow accent-4" dense
                                        half-increments hover size="18" readonly></v-rating>
                                    <v-chip class="ps-1 pe-1" color="green" label outlined x-small>สินค้าขายดี</v-chip>
                                    <v-chip class="ps-1 pe-1" color="orange" label outlined x-small>ผ่อนชำระ</v-chip>
                                </v-card-text>

                                <v-card-actions style="margin-top: -20px; color: #FF9800;">
                                    ฿{{ 100+Math.floor(Math.random() * 100) }}
                                    <v-spacer></v-spacer>
                                    <p style="font-size: 12px; color: rgb(73, 73, 73); margin-bottom: -4px;">ขายแล้ว {{ 50+Math.floor(Math.random() * 100) }} ชิ้น</p> 
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        {{ checkShowListItems }}
    </div>
</template>
<script>
export default {
    data: () => ({
        rating: 4.3,
        cards: [],
    }),
    computed: {
        checkShowListItems() {
            this.cards = this.$store.state.show_list_item;
            return;
        }
    },
    methods: {
        nextToDetail(card) {
            this.$store.commit('SET_DETAILITEM', card);
            this.$router.push('/CenterShop/detailshop');
        }
    }
}
</script>
<style>
.fontsProList {
    font-family: 'Prompt', sans-serif;
    font-weight: 300;
}
</style>