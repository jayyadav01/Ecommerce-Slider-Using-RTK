import { configureStore } from "@reduxjs/toolkit";
import slice from './Slice'

const store = configureStore({
    reducer : {
        slider : slice 
    }
})

export default store