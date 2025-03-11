import { useEffect, useState } from "react";
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Dash() {

    const n = useNavigate();

    let [userData,setUserData] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserData(auth.currentUser);
        } else {
            n("/");
        }
    })}, [])

    return (
        <div className="dashboard">
            <div className="side-bar">

            </div>
            <div className="user-info">
                <h2>Dashboard</h2>
                <p>welcome back {(userData === null) ? "" : userData.displayName}</p>
                <button onClick={() => signOut(auth)}>Sign out</button>
            </div>
        </div>
    )
}

export default Dash