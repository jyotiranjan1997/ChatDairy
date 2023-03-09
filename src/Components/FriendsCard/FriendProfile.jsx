import ModalOpen from "./Modal";

import Post from "./Post/Post";
import Styles from "./Profile.module.css";
import CircumIcon from "@klarr-agency/circum-icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Styles from "./FriendsProfile.module.css";
export default function FriendsProfile() {
  return (
    <div className={Styles.middle}>
      <div className={Styles.back} onClick={handleBack}>
        <CircumIcon
          name="circle_chev_left"
          color="rgb(42, 230, 189)"
          size="50px"
        />{" "}
      </div>

      <div className={Styles.background}>
        <div className={Styles.prflImage}>
          {" "}
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full w-40"
            alt="Avatar"
          />
        </div>
      </div>
      <div className={Styles.About}>
        <div className={Styles.profileBtn}>
          <div>
            <ModalOpen name="Jyotiranjan Mohanty" dob="" about="" />
            <h1>Jyotiranjan Mohanty</h1>
            <h1>Balikuda,Odisha</h1>
          </div>

          <div>
            <div className={Styles.frn}>
              <h1>100</h1>
              <h2>Friends</h2>
            </div>
            <div className={Styles.frn}>
              <h1>100</h1>
              <h2>Follwers</h2>
            </div>
            <div className={Styles.frn}>
              <h1>100</h1>
              <h2>Posts</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.container}>
        <div>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            perferendis explicabo optio magni! Quasi ipsa in, nam cum sed
            facilis est eligendi fuga accusamus, autem dignissimos? Similique,
            itaque. Distinctio, ab.
          </p>
        </div>
        <div>
          <h1>Photos</h1>
        </div>
        <div>
          <h1>Posts</h1>
          <div>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
