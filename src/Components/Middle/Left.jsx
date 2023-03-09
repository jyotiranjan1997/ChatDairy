import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../ButtonComponent/InputComponent";
import ChatComponent from "../ChatComponent/ChatComponent";
import FriendsCard from "../FriendsCard/FriendsCard";
import styles from "./home.module.css";

const get_data = async (value, token) => {
  return await axios.get(`http://localhost:5000/user/friends?name=${value}`, {
    headers: {
      "Content-type": "application/json",
      Auth: `Bearer ${token}`,
    },
  });
};

export default function Left() {
  const { authToken } = useSelector((store) => store.authLogin);
  const [firends, setFriends] = useState([]);
  const [searchName, setSearchName] = useState({ name: "", search: true });
  const [firends2, setFriends2] = useState([]);
  const navigate = useNavigate();
  const handleProfile = (user) => {
    setFriends([]);
    navigate("/profile", {
      state: {
        friend:user,
      },
    });
  };

  const get_friends = async (value) => {
    try {
      let res = await get_data(value, authToken);
      setFriends(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  let id;
  const debouncing = (get_friends, delay, value) => {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      get_friends(value);
    }, delay);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchName({ ...searchName, name: e.target.value });
    if (e.target.value == "" || e.target.value === null) {
      setFriends([]);
    } else {
      if (searchName) {
        debouncing(get_friends, 2000, value);
      }
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setFriends([]);
    setSearchName({ ...searchName, search: false });
    try {
      let res = await get_data(searchName, authToken);
      setFriends2(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.left}>
      <div>
        <div className={styles.search}>
          <InputComponent
            title="Search Friends by Name"
            handleChange={handleChange}
          />
          <div
            className={
              firends.length ? styles.searchOption2 : styles.searchOption1
            }
          >
            {firends.map((el) => (
              <div key={el._id} onClick={() => handleProfile(el)}>
                {" "}
                <ChatComponent data={el} />
              </div>
            ))}
          </div>

          <div className={styles.btn2}>
            <ButtonComponent title="Search" handleClick={handleClick} />
          </div>

          <div>
            {/* data here appaended friends list */}
            {firends2.map((el) => (
              <FriendsCard key={el._id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
