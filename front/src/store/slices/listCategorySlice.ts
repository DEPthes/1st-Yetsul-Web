import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    category: string;
};

const initialState: InitialState = {
    category: '전체',
};

const listCategorySlice = createSlice({
    name: 'listCategory',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            const type = state;
            type.category = action.payload;
            return state;
        },
    },
});

export const { setCategory } = listCategorySlice.actions;

export default listCategorySlice.reducer;
