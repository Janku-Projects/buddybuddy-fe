import { useEffect, useState } from "react";
import { dexieDB } from "@/db/dexieDB";

const Test = () => {
    const [test, setTest] = useState<any[]>([]);

    useEffect(() => {
        // dexieDB.buddy.add({ exp: "0", name: "Alice"});
        dexieDB.buddy.toArray().then(setTest);
    }, []);


    return <>
        {test.map(item => (<p>{JSON.stringify(item)}</p>))}
    </>
};


export default Test;