import Dexie, { Table } from "dexie";
import { Action, Buddy, User } from "@/db/dexieDB.def";

class DexieDB extends Dexie {
    buddy !: Table<Buddy>
    user !: Table<User>
    action !: Table<Action>

    constructor() {
        super("dexieDB");
        this.version(1).stores({
            user: "++userId, name",
            buddy: "++buddyId, name",
            action: "++actionId, userId, isCurrent",
        });
    }
}

export const dexieDB = new DexieDB();
