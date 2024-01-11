import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import redditAPI from "../Reddit";

export const fetchData = createAsyncThunk(
    'items/fetchData',
    async(arg, thunkAPI) => {
        const response = await redditAPI.getItems();
        return response;
    }
)

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchData.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.hasError = false;
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
});

export const selectItems = (state) => state.items.items;
export const selectIsLoading = state => state.items.isLoading;
export default itemsSlice.reducer;