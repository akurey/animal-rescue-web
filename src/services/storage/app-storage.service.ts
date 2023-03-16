import IStorage from "../../types/storage.type";

export default class AppStorage {
  storage: IStorage;

  constructor(storage: IStorage) {
    this.storage = storage;
  }
}
