import {createSlice} from "@reduxjs/toolkit"
import {dataShopCard, formatTextToNumber} from "../../utility/data.ts";

const initialState = {
    shopData: dataShopCard,
    filter: {
        indexSize: -1,
        indexColor: -1,
        indexPrice: -1,
        indexBrands: -1,
        indexCollections: -1,
        indexTags: -1,
    }

}

const useSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        sortLowPrice(state) {
            state.shopData = state.shopData.sort((a, b) => a.price - b.price)
        },
        sortHeightPrice(state) {
            state.shopData = state.shopData.sort((a, b) => b.price - a.price)
        },
        sortAll(state) {
            state.filter.indexSize = -1
            state.filter.indexBrands = -1
            state.filter.indexCollections = -1
            state.filter.indexTags = -1
            state.filter.indexColor = -1
            state.filter.indexPrice = -1
            state.shopData = dataShopCard
        },
        filterByColor(state, action) {
            if (state.shopData.length === 0) state.shopData = dataShopCard

            state.shopData = state.shopData.filter((el) => el.ballColor.includes(action.payload))
        },
        filterByPrice(state, action) {
            if (state.shopData.length === 0) state.shopData = dataShopCard

            state.shopData = state.shopData.filter((el) => {
                const [firstNum, secondNum] = formatTextToNumber(action.payload)
                return !(el.price < firstNum || el.price > secondNum);
            })
        },
        setIndexSize(state, action) {
            state.filter.indexSize = action.payload
        },
        setIndexColor(state, action) {
            state.filter.indexColor = action.payload
        },
        setIndexPrice(state, action) {
            state.filter.indexPrice = action.payload
        },
        setIndexBrands(state, action) {
            state.filter.indexBrands = action.payload
        },
        setIndexCollections(state, action) {
            state.filter.indexCollections = action.payload
        },
        setIndexTags(state, action) {
            state.filter.indexTags = action.payload
        },
    }
})

export const {
    sortLowPrice,
    setIndexColor,
    setIndexPrice,
    setIndexBrands,
    setIndexCollections,
    setIndexTags,
    sortHeightPrice,
    setIndexSize,
    sortAll,
    filterByColor,
    filterByPrice
} = useSlice.actions

export default useSlice.reducer