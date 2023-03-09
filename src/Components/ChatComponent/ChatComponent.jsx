import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./ChatComponent.module.css";

export default function ChatComponent({ handleChat ,data}) {
  const [friends, setFriends] = useState({});


  useEffect(() => {
    setFriends(data);
  },[])

  return (
    <div className={styles.person} onClick={handleChat}>
      <Flex mt="15px" alignItems="center" gap="40px">
        <div>
          {" "}
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full w-20"
            alt="Avatar"
          />{" "}
        </div>
        <div>
          <h4>{friends.name}</h4>
        </div>
        <div></div>
      </Flex>
    </div>
  );
}
