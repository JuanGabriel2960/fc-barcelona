import { createAction } from '@ngrx/store';

export const startLoader = createAction('[UI Component] startLoader');
export const stopLoader = createAction('[UI Component] stoptLoader');

export const openModal = createAction('[UI Component] openModal');
export const closeModal = createAction('[UI Component] closeModal');

export const setDarkMode = createAction('[UI Component] setDarkMode');
export const unsetDarkMode = createAction('[UI Component] unsetDarkMode');