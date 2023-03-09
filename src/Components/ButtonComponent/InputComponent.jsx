
import styles from "./Button.module.css"

export default function InputComponent({ title, handleChange, type, name, value }) {
    

    return (
      <input
        placeholder={title}
        onChange={handleChange}
        type={(type = "text")}
        name={name}
        value={value}
        className={styles.Input}
      />
    );
}