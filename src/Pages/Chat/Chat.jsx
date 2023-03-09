import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatComponent from "../../Components/ChatComponent/ChatComponent";
import SingleChat from "../../Components/Middle/SingleChat";
import styles from "./Chat.module.css";

const Get_data = async (token) => {
  let res = await axios.get("http://localhost:5000/friend", {
    headers: {
      "Content-type": "application/json",
      Auth: `Bearer ${token}`,
    },
  });
  console.log(token);
  return res.data;
};

const get_data2 = async (value, token) => {
  return await axios.get(`http://localhost:5000/user/friends?name=${value}`, {
    headers: {
      "Content-type": "application/json",
      Auth: `Bearer ${token}`,
    },
  });
};

export default function Chat() {
  const [friends, setFriends] = useState([]);
  const [friends2, setFriends2] = useState([]);
  const { authToken } = useSelector((store) => store.authLogin);
  console.log(authToken);
  const get_friends = async () => {
    let res = await Get_data(authToken);
    setFriends2(res);
  };

  const get_friends2 = async (value) => {
    try {
      let res = await get_data2(value, authToken);
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
      get_friends2(value);
    }, delay);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    debouncing(get_friends, 2000, value);
  };

  useEffect(() => {
    get_friends();
  }, []);
  console.log(friends);
  return (
    <div>
      <div className={styles.chartPage}>
        <div>
          <input placeholder="Search your Friend" onChange={handleChange} />{" "}
          <div
            className={
              friends.length ? styles.searchOption2 : styles.searchOption1
            }
          >
            {" "}
            {friends.map((el) => (
              <div key={el._id}>
                {" "}
                <ChatComponent
                  data={el}
                  onClick={() => setFriends2(...friends2, [el])}
                />
              </div>
            ))}{" "}
          </div>
        </div>
        {friends2.length &&
          friends2.map((el) => <ChatComponent data={el} key={el._id} />)}

        <div className={styles.chatSpace}>
          <SingleChat />
        </div>
      </div>
    </div>
  );
}
