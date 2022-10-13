import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    modal: boolean;
};

const initialState: InitialState = {
    modal: false,
};

const formModalSlice = createSlice({
    name: 'formModal',
    initialState,
    reducers: {
        setFormModal: (state, action: PayloadAction<boolean>) => {
            const type = state;
            type.modal = action.payload;
            return state;
        },
    },
});

export const { setFormModal } = formModalSlice.actions;

export default formModalSlice.reducer;
