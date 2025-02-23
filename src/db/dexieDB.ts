import Dexie, { Table } from "dexie";
import {Buddy, User} from "@/db/dexieDB.def";

class DexieDB extends Dexie {
    buddy !: Table<Buddy>
    user !: Table<User>

    constructor() {
        super("dexieDB");
        this.version(1).stores({
            user: "++userId, name",
            buddy: "++buddyId, name"
        });
    }
}

export const dexieDB = new DexieDB();
