import { useDispatch as reduxUseDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../stores/store'; 
import { Action } from '@reduxjs/toolkit'; 


type AppDispatch = ThunkDispatch<RootState, void, Action>;


export const useTypeDispatch = () => reduxUseDispatch<AppDispatch>();
