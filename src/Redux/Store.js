import { configureStore} from "@reduxjs/toolkit";
import preloaderSlice from "./Features/PreLoaderSlice";
const store = configureStore({
    reducer: {
        preloader:preloaderSlice.reducer,
    }
})

export default store;