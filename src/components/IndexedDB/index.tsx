import { useEffect } from "react";
import { addItem, getItem } from "@/Util/indexedDB";

const IndexedDBExample = () => {
    useEffect(() => {
        addItem("myDatabase", "users", { name: "Alice", age: 25 });

        getItem("myDatabase", "users", 1).then((user) => {
            console.log("Fetched user:", user);
        });
    }, []);

    return <div>IndexedDB Example</div>;
};

export default IndexedDBExample;
