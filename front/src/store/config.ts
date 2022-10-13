import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { combineReducers } from 'redux';
import formModalSlice from './slices/formModalSlice';
import imageModalSlice from './slices/imageModalSlice';
import listCategorySlice from './slices/listCategorySlice';
import listModalSlice from './slices/listModalSlice';
import mobileMenuSlice from './slices/mobileMenuSlice';
import onModalSlice from './slices/onModalSlice';
import updateBackgroundGradientSlice from './slices/updateBackgroundGradientSlice';

const rootReducer = combineReducers({
    updateBackgroundGradient: updateBackgroundGradientSlice,
    onModal: onModalSlice,
    listCategory: listCategorySlice,
    listModal: listModalSlice,
    imageModal: imageModalSlice,
    formModal: formModalSlice,
    mobileMenu: mobileMenuSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
