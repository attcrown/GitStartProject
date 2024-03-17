export async function checkStatus(auth, store, router) {
    await auth.onAuthStateChanged((user) => {
        if (user?.emailVerified) {
            store.commit("SET_USER", user);
            return;
        }
        // ไม่มีผู้ใช้ลงทะเบียน, ทำการเข้าสู่ระบบ
        store.commit("SET_USER", null);
        router.push("/CenterShop/login");
    });
}
