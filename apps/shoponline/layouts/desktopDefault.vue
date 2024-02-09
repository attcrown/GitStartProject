<template>
    <div class="fontsPublic d-flex justify-space-around align-center pt-2"
            style="background-color: #694400ad; color: white; position: fixed; width: 100%; z-index: 100;" >
            <div class="d-flex align-center">
                ติดตามเราบน
                
            </div>

            <div class="d-flex align-center justify-space-around" v-if="$store.state?.uid">
                <v-btn
                    text
                    color="white"
                    style="font-size: 17px;"
                    @click="$router.push('/CenterShop/addstock')">
                        เพิ่มสินค้า
                        <v-icon>mdi mdi-invoice-list</v-icon>
                </v-btn>
                <v-btn
                    text
                    color="white"
                    style="font-size: 17px;"
                    @click="$router.push('/CenterShop/shop')">
                        รายการสินค้า
                        <v-icon>mdi mdi-store</v-icon>
                </v-btn>
            </div>

            <div class="d-flex align-center">                
                <div v-if="!$store.state?.uid" class="d-flex align-center">
                    <span class="mdi mdi-account-circle text-h5"></span> &nbsp<a @click="$router.push('/CenterShop/login')"
                        style="color: white">เข้าสู่ระบบ</a>
                </div>
                <div v-if="$store.state?.displayName" class="d-flex align-center">
                    <v-menu offset-y v-model="menuUser">
                        <template v-slot:activator="{ attrs, on }">
                            <div v-bind="attrs" v-on="on" class="d-flex align-center">
                                <v-avatar size="32px">
                                    <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                                </v-avatar> &nbsp
                                {{ $store.state.displayName }}
                                <span class="mdi mdi-menu-down text-h5"></span>
                            </div>
                        </template>

                        <v-list>
                            <v-list-item v-for="item in items" :key="item.to" router :to="item.to" @click="handleMenuItemClick(item)">
                                <v-list-item-action>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-action>
                                <v-list-item-title>
                                    {{ item.title }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </div>
</template>
<script>
import {SINGOUT_ID} from '../services/const';
export default {
    name: "publicLayout",
    data() {
        return {
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
            itemsLight:[
                {
                    icon: "mdi-bell-outline",
                    title: "เร่งด่วน",
                },
                {
                    icon: "mdi-message-text-outline",
                    title: "งานชิว"
                }
            ],
            itemsMessage:[
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
            menuMessage : false,
            alert_message: null,
            alert_light: 8,
            SINGOUT_ID : SINGOUT_ID
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
        }
    },
};
</script>
<style>
.fontsPublic {
    font-family: "Prompt", sans-serif;
    font-weight: 300;
}
</style>