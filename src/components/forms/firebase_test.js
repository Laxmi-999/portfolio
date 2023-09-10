// How to set up React with Firebase/Firestore (Part 1)
// https://youtu.be/ig91zc-ERSE

import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./init_firebase";



export default function App() {
    console.log("Starting app");

    useEffect(
        () =>
            onSnapshot(collection(db, "Users"), (snapshot) => console.log(snapshot.docs.map((e) => e.data())))
    );

    return (
        <div className="root">
            <button className="button">
                New
            </button>


        </div>
    );
}
