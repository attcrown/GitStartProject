export async function publicStatus(auth, store) {
    await auth.onAuthStateChanged((user) => {
        if (user?.emailVerified) {
            store.commit("SET_USER", user);
            return;
        }
        // ไม่มีผู้ใช้ลงทะเบียน, ทำการเข้าสู่ระบบ
        store.commit("SET_USER", null);
    });
}
