import { Action } from "@ngrx/store";
import { Message } from "../../models/messages";


export const ADD_MESSAGE = 'ADD_MESSAGE';
export class AddMessageAction implements Action {
    readonly type = ADD_MESSAGE;
    constructor(public payload: Message) { }
}

export const UPDATE_FORM = 'UPDATE_FORM';
export class UpdateFormAction implements Action {
    readonly type = UPDATE_FORM;
    constructor(public payload: any) { }
}

export type MsgAction = AddMessageAction | UpdateFormAction;