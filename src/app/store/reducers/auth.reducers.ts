import { AuthActions, Login, Logout } from "../actions/auth.actions";
import { User } from "../../models/user";
import { createFeatureSelector, createSelector } from "@ngrx/store";


export interface State {
    loggedIn: boolean;
    user: User;
}

export const initialState: State = {
    loggedIn: false,
    user: null,
};

export function authReducer(state = initialState, action: AuthActions): State {
    switch (action.type) {
        case Login: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user
            };
        }

        case Logout: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
export const getAuthState = createFeatureSelector<State>('auth');
export const getLoggedIn = createSelector(
    getAuthState,
    (state: State) => state.loggedIn
);

export const getUser = createSelector(
    getAuthState,
    (state: State) => state.user
);
