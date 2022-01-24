import { createReducer, on } from '@ngrx/store';
import { startLoader, stopLoader } from './ui.actions';

export interface State{
    loading: boolean;
}

export const initialState: State = {
    loading: false
}

const _uiReducer = createReducer(initialState,
  on(startLoader, state => ({...state, loading: true})),
  on(stopLoader, state => ({...state, loading: false}))
);

export function uiReducer(state: any, action: any) {
  return _uiReducer(state, action);
}