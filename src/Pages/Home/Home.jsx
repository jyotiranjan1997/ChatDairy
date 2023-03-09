import { Hide, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Left from "../../Components/Middle/Left";
import Middle from "../../Components/Middle/Middle";
import Right from "../../Components/Middle/Right";
import Profile from "../Profile/Profile";
import styles from "./Home2.module.css";

export default function Home() {
  const [page, setPage] = useState(false);
  const{authToken}=useSelector((store)=>store.authLogin)
  const navigate = useNavigate();
    const handlePage = (e) => {
        e.preventDefault();
      setPage(!page);
      navigate("/profile", {
        state: {
          user: authToken,
        },
      });
    }

    return (
      <div className={styles.home}>
         <Left handlePage={handlePage} />
          <Middle handlePage={handlePage} />
        <Show breakpoint="(min-width: 900px)">
          <Right />
        </Show>
      </div>
    );
}