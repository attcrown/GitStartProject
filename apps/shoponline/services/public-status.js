export function publicStatus(auth, store) {
    auth.onAuthStateChanged((user) => {
        if (user?.emailVerified) {
            store.commit("SET_USER", user);
            return;
        }
        // ไม่มีผู้ใช้ลงทะเบียน, ทำการเข้าสู่ระบบ
        store.commit("SET_USER", null);
    });
}
