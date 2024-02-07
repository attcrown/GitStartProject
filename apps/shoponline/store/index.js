// store/index.js
export const state = () => ({
    displayName: null,
    email: null,
    uid: null,
    deviceMode: false,
    list_item: [],
    show_list_item: [],
    detail_item: [],
});


export const mutations = {
    SET_USER(state, data) {
        state.displayName = data?.displayName || null;
        state.email = data?.email || null;
        state.uid = data?.uid || null;
    },

    SET_DEVICE(state, data) {
        state.deviceMode = data || false;
    },

    SET_LISTITEMS(state, data) {
        state.list_item = data || [];
    },

    SET_SHOWLISTITEMS(state, data) {
        state.show_list_item = data || [];
    },

    SET_DETAILITEM(state, data) {
        state.detail_item = data || [];
    }
};

