import { useEffect } from "react";
import styles from "../styles/components/Card.module.css";
import Link from "next/link";
import AOS from "aos";

export default function Card({logoPath, text, link}){
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    
    <Link href={link}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <img src={logoPath} className={styles.logo} alt={text}/>
        </div>
        <div className={styles.textWrapper}>
          {text}
        </div>
      </div>
    </Link>
  );
}