import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    toggle: false
}

const useHeader = createSlice({
    name: "header",
    initialState,
    reducers: {
        setToggleActive(state) {
            state.toggle = true
        },
        setToggleAnActive(state) {
            state.toggle = false
        }
    }
})


export const {setToggleActive, setToggleAnActive} = useHeader.actions
export default useHeader.reducer