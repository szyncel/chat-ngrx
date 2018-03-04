import { Action } from "@ngrx/store";
import { User } from "../../models/user";


export const Login = '[auth] Login';
export const Logout = '[auth] Logout';
export const LoginFailure = '[auth] Logout';
export const LoginSuccess = '[Auth] Login Success';


export class LoginAction implements Action {
    readonly type = Login;
    constructor(public payload: any) { }
}

export class LoginSuccessAction implements Action {
    readonly type = LoginSuccess;

    constructor(public payload: { user: User }) { }
}

export class LogoutAction implements Action {
    readonly type = Logout;
}

export class LoginFailureAction implements Action {
    readonly type = LoginFailure;
    constructor(public payload: any) { }
}


export type AuthActions = LoginAction | LogoutAction | LoginSuccessAction | LoginFailureAction;
