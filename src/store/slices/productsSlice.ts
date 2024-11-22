import {createSlice} from "@reduxjs/toolkit";
import {IDataOrder, IDataShopCard} from "../../utility/types.ts";
import {getRandomInt} from "../../utility/data.ts";

interface IInitialState {
    efects: {
        indexSize: number
        indexColor: number
    },
    favorite: IDataShopCard[]
    order: IDataOrder[]
}

const initialState: IInitialState = {
    efects: {
        indexSize: -1,
        indexColor: -1,
    },
    favorite: [],
    order: []
}


const useProducts = createSlice({
    name: "products",
    initialState,
    reducers: {
        setIndexSize(state, action) {
            state.efects.indexSize = action.payload
        },
        setIndexColor(state, action) {
            state.efects.indexColor = action.payload
        },
        addItemsToFavorite(state, action) {
            state.favorite.push(action.payload)
        },
        removeItemsFromFavorite(state, action) {
            const findIndex = state.favorite.findIndex(el => el.id === action.payload)
            state.favorite.splice(findIndex, 1)
        },
        addItemToOrder(state, {payload}: { payload: IDataOrder }) {
            if (state.order.find(el => el.id === payload.id && el.selectedSize === payload.selectedSize && el.selectedColor === payload.selectedColor)) {
                const index = state.order.findIndex(el => el.id === payload.id)
                state.order[index].quantity = state.order[index].quantity + payload.quantity
            } else {
                if (state.order.find(el => el.id === payload.id)) {
                    const {img, selectedColor, selectedSize, title, quantity, price} = payload
                    let {id} = payload
                    id = getRandomInt(10000)
                    state.order.push({id, img, selectedColor, selectedSize, title, quantity, price})
                } else state.order.push(payload)

            }
        },
        removeItemsFromOrder(state, {payload}) {
            const findIndex = state.order.findIndex(el => el.id === payload)
            state.order.splice(findIndex, 1)
        },
        addThingsQuantity(state, {payload}) {
            const index = state.order.findIndex(el => el.id === payload.id)
            if (state.order[index].quantity >= payload.id) return
            state.order[index].quantity = state.order[index].quantity + 1
        },
        removeThingsQuantity(state, {payload}) {
            const index = state.order.findIndex(el => el.id === payload.id)
            if (state.order[index].quantity <= 1) return
            state.order[index].quantity = state.order[index].quantity - 1
        }
    }
})


export const {
    setIndexColor,
    setIndexSize,
    addItemToOrder,
    removeThingsQuantity,
    addThingsQuantity,
    addItemsToFavorite,
    removeItemsFromFavorite,
    removeItemsFromOrder
} = useProducts.actions
export default useProducts.reducer