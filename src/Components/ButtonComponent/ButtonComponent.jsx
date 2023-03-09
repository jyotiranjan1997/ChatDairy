


import styles from "./Button.module.css";

export default function ButtonComponent({title,handleClick}){


    return (
        <button onClick={handleClick} className={styles.btn} >
            {title}
        </button>
    )
}