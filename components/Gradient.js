import Image from "next/image";
import styles from "../styles/components/Gradient.module.css";

export default function Gradient(){
  return (
  
    <div className={styles.wrapper}>
      <img className={styles.gradient} src="/gradient.jpeg" width="300" height="300"/>
    </div>
  
  );
}