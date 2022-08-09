import { BehaviorSubject } from "rxjs";
import { LocalStorageKeys } from "../constants/local-storage-keys.constant";
import LocalStorage from "./localStorage.observable";

const authData = LocalStorage.getItem(LocalStorageKeys.AUTH_INFO);
const userInfo = authData && JSON.parse(authData);

const userSubject = new BehaviorSubject(userInfo?.user);

/* eslint-disable import/prefer-default-export */
export const UserObservable = Object.freeze({
  setUser: (user: any) => {
    const credentials = LocalStorage.getItem(LocalStorageKeys.AUTH_INFO);
    const parsedCredentials = credentials && JSON.parse(credentials);
    if (parsedCredentials && user) {
      parsedCredentials.user = { ...user };
      LocalStorage.setItem(
        LocalStorageKeys.AUTH_INFO,
        JSON.stringify(parsedCredentials)
      );
    } else if (!user) {
      LocalStorage.removeItem(LocalStorageKeys.AUTH_INFO);
      LocalStorage.removeItem(LocalStorageKeys.AT);
    }
    userSubject.next(user);
  },
  updateUserCredentials: (data: any) => {
    if (data) {
      LocalStorage.setItem(LocalStorageKeys.AUTH_INFO, JSON.stringify(data));
      userSubject.next(data.user);
    } else {
      LocalStorage.removeItem(LocalStorageKeys.AUTH_INFO);
      userSubject.next(undefined);
    }
  },
  user$: userSubject.asObservable(),
});
