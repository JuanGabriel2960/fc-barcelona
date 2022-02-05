import { createReducer, on } from '@ngrx/store';
import { startLoader, stopLoader, openModal, closeModal, setDarkMode, unsetDarkMode } from './ui.actions';

export interface State {
  loading: boolean;
  modal: boolean;
  darkmode: boolean;
}

const getDarkModeValue = () => {
  if (localStorage.getItem('darkmode') === 'true') {
    return true
  } else {
    return false
  }
}

export const initialState: State = {
  loading: false,
  modal: false,
  darkmode: getDarkModeValue()
}

const _uiReducer = createReducer(initialState,
  on(startLoader, state => ({ ...state, loading: true })),
  on(stopLoader, state => ({ ...state, loading: false })),
  on(openModal, state => ({ ...state, modal: true })),
  on(closeModal, state => ({ ...state, modal: false })),
  on(setDarkMode, state => ({ ...state, darkmode: true })),
  on(unsetDarkMode, state => ({ ...state, darkmode: false })),
);

export function uiReducer(state: any, action: any) {
  return _uiReducer(state, action);
}