import React, { useState } from "react";
import Left from "../../Components/Middle/Left";
import Middle from "../../Components/Middle/Middle";
import Right from "../../Components/Middle/Right";
import Profile from "../Profile/Profile";
import styles from "./Home2.module.css";

export default function Home() {
    const [page, setPage] = useState(false);

    const handlePage = (e) => {
        e.preventDefault();
        setPage(!page);
    }

    return (<div className={styles.home} >
        <Left />
        { page ? <Profile/> :   <Middle handlePage={handlePage} />}
        <Right/>
    </div>)
}