import styles from "./home.module.css"
import CircumIcon from "@klarr-agency/circum-icons-react";
import { Caraousel } from "../Caraousel/Caraousel";
import Chat from "./Chat";
import { useState } from "react";
import SingleChat from "./SingleChat";
import { useNavigate } from "react-router-dom";

export default function Middle({ handlePage }) {
  const [page, setPage] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setPage(true);
    navigate("/chart");
  };

 

  return (
    <div className={styles.middle}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <div onClick={handlePage}>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-full w-20"
              alt="Avatar"
            />
          </div>
          <div>
            <CircumIcon name="bell_on" />
          </div>
          <div onClick={handleClick}>
            <CircumIcon name="chat_2" />
          </div>
        </div>
      </div>
      <div>
        <Caraousel ele={[1, 2, 3, 4]} />
      </div>
    </div>
  );
}
