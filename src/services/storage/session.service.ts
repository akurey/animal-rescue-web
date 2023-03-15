import IStorage from "../../types/storage.type";

export default class AppSessionService implements IStorage {

    getItem(key: string) {
        try {
            const item = sessionStorage.getItem(key);
            if (item) {
                return item;
            }
            return undefined;
        } catch (e) {
            return undefined;
        }
    };

    getObject(key: string) {
        const value = this.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        return value;
    };

    removeItem(key: string) {
        sessionStorage.removeItem(key);
    };

    clearStorage = () => {
        sessionStorage.clear();
    };

    setObject(key: string, value: any) {
        try {
            sessionStorage.setItem(key, value);
        } catch (e) {
            return e;
        }
    };
}