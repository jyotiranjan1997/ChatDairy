import { Flex } from "@chakra-ui/react";
import styles from "./ChatComponent.module.css";

export default function ChatComponent({handleChat}) {



    return (
      <div className={styles.person} onClick={handleChat} >
            <Flex mt="15px"  alignItems="center" gap="40px" >
                <div> <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full w-20"
            alt="Avatar"
                />  </div>
                <div>
                    <h4>Sanjana Sahoo</h4>
                </div>
                <div>

                </div>
         
        </Flex>
      </div>
    );
}