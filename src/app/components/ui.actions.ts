import { createAction } from '@ngrx/store';

export const startLoader = createAction('[UI Component] startLoader');
export const stopLoader = createAction('[UI Component] stoptLoader');

export const openModal = createAction('[UI Component] openModal');
export const closeModal = createAction('[UI Component] closeModal');