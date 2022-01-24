import { createReducer, on } from '@ngrx/store';
import { startLoader, stopLoader, openModal, closeModal } from './ui.actions';

export interface State{
    loading: boolean;
    modal: boolean;
}

export const initialState: State = {
    loading: false,
    modal: false,
}

const _uiReducer = createReducer(initialState,
  on(startLoader, state => ({...state, loading: true})),
  on(stopLoader, state => ({...state, loading: false})),
  on(openModal, state => ({...state, modal: true})),
  on(closeModal, state => ({...state, modal: false})),
);

export function uiReducer(state: any, action: any) {
  return _uiReducer(state, action);
}