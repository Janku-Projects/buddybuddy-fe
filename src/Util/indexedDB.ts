export const openDB = (dbName: string, storeName: string) => {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
            }
        };

        request.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest).result);
        request.onerror = (event) => reject(event);
    });
};

// 데이터 추가 함수
export const addItem = async (dbName: string, storeName: string, item: any) => {
    const db = await openDB(dbName, storeName);
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    store.add(item);
};

// 데이터 가져오기 함수
export const getItem = async (dbName: string, storeName: string, id: number) => {
    return new Promise((resolve, reject) => {
        openDB(dbName, storeName).then((db) => {
            const transaction = db.transaction(storeName, "readonly");
            const store = transaction.objectStore(storeName);
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    });
};
