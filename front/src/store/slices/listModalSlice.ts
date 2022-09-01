import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    modal: boolean;
};

const initialState: InitialState = {
    modal: false,
};

const listModalSlice = createSlice({
    name: 'listModal',
    initialState,
    reducers: {
        setListModal: (state, action: PayloadAction<boolean>) => {
            const type = state;
            type.modal = action.payload;
            return state;
        },
    },
});

export const { setListModal } = listModalSlice.actions;

export default listModalSlice.reducer;
