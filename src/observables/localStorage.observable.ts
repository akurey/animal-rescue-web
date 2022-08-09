let isLocalStorageSupported = true;
const testKey = "ls_test";

try {
  if (window === undefined || window.localStorage === undefined) {
    isLocalStorageSupported = false;
  } else {
    window.localStorage.setItem(testKey, "test");
    window.localStorage.removeItem(testKey);
  }
} catch (e) {
  isLocalStorageSupported = false;
}

const inMemoryStorage: any = {};

const LocalStorage = {
  getItem: (key: string): any => {
    if (isLocalStorageSupported) {
      return window.localStorage.getItem(key);
    }
    return inMemoryStorage[key] || null;
  },

  setItem: (key: string, value: string): any => {
    if (isLocalStorageSupported) {
      return window.localStorage.setItem(key, value);
    }
    inMemoryStorage[key] = value;
    return inMemoryStorage;
  },

  removeItem: (key: string): any => {
    if (isLocalStorageSupported) {
      return window.localStorage.removeItem(key);
    }
    delete inMemoryStorage[key];
    return inMemoryStorage;
  },
};

export default LocalStorage;
