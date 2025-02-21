import Dexie, { Table } from "dexie";
import {Buddy} from "@/db/dexieDB.def";

class DexieDB extends Dexie {
    buddy !: Table<Buddy>

    constructor() {
        super("dexieDB");
        this.version(1).stores({
            buddy: "++id, name, exp",
        });
    }
}

export const dexieDB = new DexieDB();
