import { createSlice } from "@reduxjs/toolkit";
const preloaderSlice = createSlice({

    name: "preloader",
    initialState: {
        loading: false,

    },
    reducers: {
        openPreloader: () => {
            state.loading = true;
        },
        closePreloader: () => {
            state.loading = false;
        }
    }
});



export const {openPreloader,closePreloader}=preloaderSlice.actions;
export default preloaderSlice;