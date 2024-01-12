import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import redditAPI from "../Reddit";
import { categories } from "../Reddit";

export const fetchData = createAsyncThunk(
    'items/fetchData',
    async(arg, thunkAPI) => {
        const response = await redditAPI.getItems(arg);
        return response;
    }
);

export const searchDataByTerm = createAsyncThunk(
    'items/searchDataByTerm',
    async(arg, thunkAPI) => {
        const response = await redditAPI.getItemsByTerm(arg);
        return response;
    }
)

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        categories: categories,
        selectedCategory: undefined,
        isLoading: false,
        hasError: false
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            action.payload.index === 34 ? state.selectedCategory = undefined :
            state.selectedCategory = categories[action.payload.index];
        }
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
            .addCase(searchDataByTerm.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(searchDataByTerm.fulfilled, (state,action) => {
                state.isLoading = false;
                state.hasError = false;
                state.items = action.payload;
            })
            .addCase(searchDataByTerm.rejected, (state)=>{
                state.isLoading = false;
                state.hasError = true;
            })
    }
});

export const selectItems = (state) => state.items.items;
export const selectIsLoading = state => state.items.isLoading;
export const selectCategories = state => state.items.categories;
export const selectHasError = state => state.items.hasError;
export const selecItem = (item_id) => (state) => {
    return state.items.items.filter(item => item.id == item_id)
};
export const selectSelectedCategory = state => state.items.selectedCategory;
export const {setSelectedCategory} = itemsSlice.actions;
export default itemsSlice.reducer;