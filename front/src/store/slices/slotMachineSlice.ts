import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    request: {
        weather: string;
        mood: string;
        situation: string;
    };
};

const initialState: InitialState = {
    request: {
        weather: 'clean',
        mood: 'joy',
        situation: 'party',
    },
};

const slotMachineSlice = createSlice({
    name: 'slotMachine',
    initialState,
    reducers: {
        setSlotMachineWeather: (state, action: PayloadAction<string>) => {
            const type = state;
            type.request = { ...state.request, weather: action.payload };
            return state;
        },
        setSlotMachineMood: (state, action: PayloadAction<string>) => {
            const type = state;
            type.request = { ...state.request, mood: action.payload };
            return state;
        },
        setSlotMachineSituation: (state, action: PayloadAction<string>) => {
            const type = state;
            type.request = { ...state.request, situation: action.payload };
            return state;
        },
    },
});

export const {
    setSlotMachineWeather,
    setSlotMachineMood,
    setSlotMachineSituation,
} = slotMachineSlice.actions;

export default slotMachineSlice.reducer;
