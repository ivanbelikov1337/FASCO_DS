import {combineReducers, configureStore} from "@reduxjs/toolkit";
import shopSlice from "./slices/shopSlices.ts";
import productsSlice from "./slices/productsSlice.ts"
import headerSlices from "./slices/headerSlices.ts";
import userSlice from "./slices/userSlice.ts";


export const rootReducer = combineReducers({
    shop: shopSlice,
    products: productsSlice,
    header: headerSlices,
    user: userSlice,
})

export const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    }
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch