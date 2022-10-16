import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type soolotResultType = {
    id: number;
    AlcoholName: string;
    category: number;
    brewery: string;
    price: number;
    sweet: boolean;
    bitter: boolean;
    refreshing: boolean;
    clean: boolean;
    cool: boolean;
    sour: boolean;
    description: string;
    star: string;
    AlcoholByVolume: string;
    alcoholImage: string;
    likeCount: number;
};

type arrayType = {
    array: soolotResultType[];
};

const initialState: arrayType = {
    array: [],
};

const slotMachineResultSlice = createSlice({
    name: 'soolotResult',
    initialState,
    reducers: {
        setSoolotResult: (state, action: PayloadAction<soolotResultType[]>) => {
            const type = state;
            type.array = action.payload;
            return state;
        },
    },
});

export const { setSoolotResult } = slotMachineResultSlice.actions;

export default slotMachineResultSlice.reducer;
