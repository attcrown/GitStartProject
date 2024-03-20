<template>
    <div class="fontsPublic d-flex align-center justify-center pt-2"        
        style="background-color: #0240aa; color: white; position: fixed; width: 100%; z-index: 100; bottom: 0;">
        <div v-if="!$store.state?.uid" class="d-flex align-center">
            <span class="mdi mdi-account-circle text-h5"></span> &nbsp<a @click="$router.push('/CenterShop/login')"
                style="color: white">เข้าสู่ระบบ</a>
        </div>

        <div v-if="$store.state?.displayName" class="d-flex align-center text-center">
            <div class="me-3">
                <v-icon @click="$router.push('/')" color="white" size="24px">mdi-home</v-icon>
                <p style="margin-bottom: -8px; font-size: 12px; color:rgba(255, 255, 255, 0.754)">หน้าหลัก</p>
            </div>
            <div class="me-3">
                <v-icon @click="$router.push('/')" color="white" size="24px">mdi-cart-heart</v-icon>
                <p style="margin-bottom: -8px; font-size: 12px; color:rgba(255, 255, 255, 0.754)">ตะกร้าสินค้า</p>
            </div>
            <div class="me-3">
                <v-icon @click="$router.push('/')" color="white" size="24px">mdi-invoice-list</v-icon>
                <p style="margin-bottom: -8px; font-size: 12px; color:rgba(255, 255, 255, 0.754)">คลังของฉัน</p>
            </div>
            <div class="me-3">
                <v-menu offset-y v-model="menuLight">
                    <template v-slot:activator="{ attrs, on }">
                        <div v-bind="attrs" v-on="on">
                            <v-badge :color="alert_light > 0 ? 'error' : ''" :content="alert_light" class="me-6" overlap>
                                <v-icon style="margin-left: 20px;" color="white" size="24px"> mdi mdi-bell-outline</v-icon>
                            </v-badge>
                        </div>
                    </template>
                    <v-list>
                        <v-list-item v-for="item in itemsLight" :key="item.to" router :to="item.to" @click="">
                            <v-list-item-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-title>
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <p style="margin-bottom: -8px; font-size: 12px; color:rgba(255, 255, 255, 0.754)">การแจ้งเตือน</p>
            </div>
            <div class="me-3">
                <v-menu offset-y v-model="menuUser">
                    <template v-slot:activator="{ attrs, on }">
                        <div v-bind="attrs" v-on="on" class="d-flex align-center">
                            <v-avatar size="32px">
                                <img v-if="$store.state?.photoURL"
                                        alt="Avatar" 
                                        :src="$store.state.photoURL" >
                                <v-icon v-if="!$store.state?.photoURL" color="white">
                                    mdi-account-circle
                                </v-icon>   
                            </v-avatar>
                        </div>
                    </template>
                    <v-list>
                        <v-list-item v-for="item in items" :key="item.to" router :to="item.to"
                            @click="handleMenuItemClick(item)">
                            <v-list-item-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-title>
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <p style="margin-bottom: 0px; font-size: 12px; color:rgba(255, 255, 255, 0.754)">ฉัน</p>
            </div>

        </div>
    </div>
</template>
<script>
import { SINGOUT_ID } from '../services/const';
export default {
    name: "publicLayout",
    data() {
        return {
            Mnavbar: false,
            items: [
                {
                    icon: "mdi-account-edit",
                    title: "ข้อมูลส่วนตัว",
                    to: "/CenterShop/profile"
                },
                {
                    icon: "mdi-logout",
                    title: "ออกจากระบบ",
                    id: SINGOUT_ID
                }
            ],
            itemsLight: [
                {
                    icon: "mdi-bell-outline",
                    title: "เร่งด่วน",
                },
                {
                    icon: "mdi-message-text-outline",
                    title: "งานชิว"
                }
            ],
            itemsMessage: [
                {
                    icon: "mdi-bell-outline",
                    title: "สวัสดี",
                },
                {
                    icon: "mdi-message-text-outline",
                    title: "ลาก่อน"
                }
            ],
            menuUser: false,
            menuLight: false,
            menuMessage: false,
            alert_message: null,
            alert_light: 8,
            SINGOUT_ID: SINGOUT_ID
        };
    },
    methods: {
        handleMenuItemClick(item) {
            if (item.id === SINGOUT_ID) {
                this.signoutPage();
            }
        },
        signoutPage() {
            const auth = this.$fireModule.auth();
            auth.signOut()
                .then(() => {
                    // ทำการ logout สำเร็จ
                    console.log("User has been logged out");
                    this.$router.push('/CenterShop/login');
                })
                .catch((error) => {
                    // เกิดข้อผิดพลาดในการ logout
                    console.error("Logout error:", error);
                });
        },
    },
};
</script>
<style>
.fontsPublic {
    font-family: "Prompt", sans-serif;
    font-weight: 300;
}
</style>