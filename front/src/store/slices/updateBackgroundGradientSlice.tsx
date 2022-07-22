import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    color1: string;
    color2: string;
};

const initialState: InitialState = {
    color1: '#e2dfda',
    color2: '#fff',
};

const updateBackgroundGradientSlice = createSlice({
    name: 'updateBackground',
    initialState,
    reducers: {
        setColor1: (state, action: PayloadAction<string>) => {
            const type = state;
            type.color1 = action.payload;
            return state;
        },
        setColor2: (state, action: PayloadAction<string>) => {
            const type = state;
            type.color2 = action.payload;
            return state;
        },
    },
});

export const { setColor1, setColor2 } = updateBackgroundGradientSlice.actions;

export default updateBackgroundGradientSlice.reducer;
