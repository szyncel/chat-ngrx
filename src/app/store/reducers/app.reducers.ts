import { Message } from "../../models/messages";
import { MsgAction, ADD_MESSAGE, UPDATE_FORM } from "../actions/message.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";


export interface AppState {
    messages: Message[];
    formValue: any;
}

export const initialState: AppState = { messages: [], formValue: { name: "", surname: "", message: "" } };

export function reducer(state = initialState, action: MsgAction) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    { name: action.payload.name, surname: action.payload.surname, message: action.payload.message }
                ]
            };

        case UPDATE_FORM:
            return {
                ...state,
                // messages: [...state.messages],
                formValue: { name: action.payload.name, surname: action.payload.surname, message: action.payload.message }

            }
        default:
            return state;
    }
}

// Selectors
export const getMessageState = createFeatureSelector<AppState>('message');

export const getMessages = createSelector(
    getMessageState,
    (state: AppState) => state.messages
);

export const getFormValue = createSelector(
    getMessageState,
    (state: AppState) => state.formValue
); 