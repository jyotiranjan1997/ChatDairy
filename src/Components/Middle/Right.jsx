import ButtonComponent from "../ButtonComponent/ButtonComponent";
import styles from "./home.module.css";

export default function Right() {
  return <div className={styles.right}>

    <div>
      <ButtonComponent title="Suggested Friends" />
    </div>
  </div>;
}
