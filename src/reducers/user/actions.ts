import { LocalStorageKeys } from "../../constants/local-storage-keys.constant";
import { ACTION_SET_USER } from "../../constants/reduce-actions.constant";
import AppStorage from "../../services/storage/app-storage.service";
import AppSessionService from "../../services/storage/session.service";
import AppStorageService from "../../services/storage/storage.service";
import IUser from "../../types/user.types";

// eslint-disable-next-line
export const userAction = {
  setUser: (user: IUser) => {
    const storageService = new AppStorageService();
    const sessionService = new AppSessionService();
    storageService.removeItem(LocalStorageKeys.USER);
    sessionService.removeItem(LocalStorageKeys.USER);
    const storage = user.remember ? storageService : sessionService;
    const appStorage = new AppStorage(storage);
    appStorage.storage.setObject(LocalStorageKeys.USER, JSON.stringify(user));
    return {
      type: ACTION_SET_USER,
      // eslint-disable-next-line
      user: user,
    };
  },
};
