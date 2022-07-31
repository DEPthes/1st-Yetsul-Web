import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    modal: boolean;
};

const initialState: InitialState = {
    modal: false,
};

const onModalSlice = createSlice({
    name: 'onModal',
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<boolean>) => {
            const type = state;
            type.modal = action.payload;
            return state;
        },
    },
});

export const { setModal } = onModalSlice.actions;

export default onModalSlice.reducer;
