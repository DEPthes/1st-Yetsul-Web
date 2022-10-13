import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    modal: boolean;
};

const initialState: InitialState = {
    modal: false,
};

const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        setMobileMenu: (state, action: PayloadAction<boolean>) => {
            const type = state;
            type.modal = action.payload;
            return state;
        },
    },
});

export const { setMobileMenu } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
