import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk('getdata', async (page) => {
    const response = await fetch('https://fakestoreapi.com/products/' + page);
    const result = response.json();
    return result;
})

const Slice = createSlice({
    name : 'Slider',
    initialState : {
        page : 1,
        loading : false,
        products : []
    },
    reducers : {
        leftbutton : function(state){
            state.page = state.page - 1
        },
        rightbutton : function(state,action){
            state.page = state.page + 1
        }
    },
    extraReducers : {
        [getAllData.pending] : function(state)
        {
            state.loading = true
        },

        [getAllData.fulfilled] : function(state,action)
        {
            state.loading = false
            state.products = action.payload
        },

        [getAllData.rejected] : function(state)
        {
            state.loading = false
        }
    }
    
})

export const {leftbutton,rightbutton} = Slice.actions
export default Slice.reducer