
import { createContext, useReducer } from 'react';
import React from 'react';
import { ActionType, authReducer } from './authReducer';

//* DEFINIR LA ESTRUCTURA DEL CONTEXT

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favouriteTeam?: string;
}

//* Estado inicial

export const authInitialState: AuthState = {
  isLoggedIn: true,
  username: undefined,
  favouriteTeam: undefined,
};

//* DEFINIR QUE OFRECE EL CONTEXT A LOS HIJOS

export interface AuthContexProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavouriteTeam: (favouriteTeam: string) => void;
  setUserName : (userName : string) => void

}

export const AuthContext = createContext({} as AuthContexProps);

//* DEFINIR EL COMPONENTE PROVEEDOR DEL ESTADO

export const AuthProvider = ({ children }: {children : JSX.Element[]} ) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: ActionType.SIGN_IN });
  };
  const signOut = () => {
    dispatch({ type: ActionType.SIGN_OUT });
  };
  const changeFavouriteTeam = (favouriteTeam: string) => {
    dispatch({ type: ActionType.CHANGE_FAV_TEAM, payload: favouriteTeam });
  };
  const setUserName = (userName: string) => {
    dispatch({ type: ActionType.SET_USERNAME, payload: userName });
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      signOut,
      changeFavouriteTeam,
      setUserName,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
