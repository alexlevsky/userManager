import { createAction } from '@ngrx/store';

export const addUser = createAction('[Users Component] Add User');
export const deleteUser = createAction('[Users Component] Delete User');
export const remoteUser = createAction('[Users Component] Get Remote User');
export const successUser = createAction('[Users Component] Get Remote Users Success');
export const failedUser = createAction('[Users Component] Get Remote Users Failed');