import { AuthState } from './AuthContext';

export enum ActionType {
  SIGN_IN = 'signIn',
  SIGN_OUT = 'signOut',
  CHANGE_FAV_TEAM = 'changeFavTeam',
  SET_USERNAME = 'setUsername',
}

type AuthAction =
  | { type: ActionType.SIGN_IN }
  | { type: ActionType.SIGN_OUT }
  | { type: ActionType.CHANGE_FAV_TEAM, payload: string }
  | { type : ActionType.SET_USERNAME, payload : string}

export const authReducer = (state : AuthState, action : AuthAction) : AuthState => {
    switch (action.type) {
      case ActionType.SIGN_IN:
          return {
            ...state,
              isLoggedIn : true,
              username : 'no-username-yet',
      };
      case ActionType.CHANGE_FAV_TEAM:
          return {
            ...state,
              favouriteTeam : action.payload,
      };
      case ActionType.SIGN_OUT:
        return {
          ...state,
          isLoggedIn: false,
          username: undefined,
          favouriteTeam : undefined,
        };
      case ActionType.SET_USERNAME:
        return {
          ...state,
          username : action.payload,
        };
      default:
          return state;
    }

};
