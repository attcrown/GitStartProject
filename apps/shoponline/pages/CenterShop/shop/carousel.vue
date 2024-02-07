<template>
    <v-carousel class="fontsProCaro" cycle height="200px" hide-delimiter-background show-arrows-on-hover interval="3000">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <div class="d-flex justify-center align-center pb-10"
                :style="`color: ${slide.color_text}; height: 200px; background-color: #0240aa;`">
                <v-img v-if="$store.state?.deviceMode && slide.img_url_mobile" height="200" :src="slide.img_url_mobile"
                    @click="$router.push(slide.link ? slide.link : '')">
                </v-img>
                <v-img v-if="!$store.state?.deviceMode && slide.img_url_desktop" height="200" max-width="1000"
                    :src="slide.img_url_desktop" @click="$router.push(slide.link ? slide.link : '')">
                </v-img>
                <p class="text-center" :style="`color: ${slide?.color_text}`">{{ slide?.text }} </p>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    data() {
        return {
            slides: [
                {
                    link: '/CenterShop/profile',
                    img_url_mobile: 'https://firebasestorage.googleapis.com/v0/b/goshop-9e571.appspot.com/o/contentPageShop%2Fadvert_MB1.jpg?alt=media&token=b6f47784-b2fe-4330-bea2-b7d47604ea1b',
                    img_url_desktop: 'https://firebasestorage.googleapis.com/v0/b/goshop-9e571.appspot.com/o/contentPageShop%2Fadvert_DK1.jpg?alt=media&token=b80f4f40-baf7-4953-b874-9cd4f337bb65'
                },
                {
                    link: '/CenterShop/addstock',
                    img_url_mobile: 'https://firebasestorage.googleapis.com/v0/b/goshop-9e571.appspot.com/o/contentPageShop%2Fadvert_MB2.jpg?alt=media&token=61a54c3f-2bed-4f24-8706-f4484023e1cc',
                    img_url_desktop: 'https://firebasestorage.googleapis.com/v0/b/goshop-9e571.appspot.com/o/contentPageShop%2Fadvert_DK2.png?alt=media&token=0c12273d-0d4b-4dc2-a755-6074fe95d2fe'

                },
                {
                    text: 'พื้นที่โฆษณาให้เช่า Mobile📱: 200px*370px & Desktop💻: 200px*1000px',
                    color_text: 'white',
                },
            ],
        }
    },
    computed: {

    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style>
.fontsProCaro {
    font-family: 'Prompt', sans-serif;
    font-weight: 400;
    font-size: 24px;
}
</style>