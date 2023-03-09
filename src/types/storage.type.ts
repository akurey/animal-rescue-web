export default interface IStorage {
    getItem(key: string): string | undefined;
    getObject(key: string): object | undefined;
    removeItem(key: string): void;
    clearStorage(): void;
    setObject(key: string, value: any): any;
}