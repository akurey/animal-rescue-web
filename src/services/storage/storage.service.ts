import IStorage from "../../types/storage.type";

export default class AppStorageService implements IStorage {
  // eslint-disable-next-line
  getItem(key: string) {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return item;
      }
      return undefined;
    } catch (e) {
      return undefined;
    }
  }

  getObject(key: string) {
    const value = this.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return value;
  }

  // eslint-disable-next-line
  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  // eslint-disable-next-line
  clearStorage() {
    localStorage.clear();
  }

  // eslint-disable-next-line
  setObject(key: string, value: any) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      return e;
    }
  }
}
