import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    modal: boolean;
};

const initialState: InitialState = {
    modal: false,
};

const imageModalSlice = createSlice({
    name: 'imageModal',
    initialState,
    reducers: {
        setImageModal: (state, action: PayloadAction<boolean>) => {
            const type = state;
            type.modal = action.payload;
            return state;
        },
    },
});

export const { setImageModal } = imageModalSlice.actions;

export default imageModalSlice.reducer;
