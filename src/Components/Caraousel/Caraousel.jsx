
import styles from "./Caraousel.module.css";
export const Caraousel = ({ele}) => {
    console.log(ele)
    return (
      <div className={styles.caraousel}>
        {ele.map((data, i) => {
          return  <div key={i} className={styles.box}> </div>;
        })}
      </div>
    );



}