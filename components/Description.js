import { useEffect } from "react";
import styles from "../styles/components/Description.module.css";
import AOS from "aos";

export default function Description({text}){
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    
    <div data-aos="fade-in" className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.containerContent}>
        Hello, my name is <b>Stevennius Chandra</b>👋
        </div>
        
        <div className={styles.containerContent}>
        My programing languages: <b>Javascript, PHP</b>👨‍💻
        </div>
        
        <div className={styles.containerContent}>
        My frameworks: <b>Express.js, Next.js</b>🎞️
        </div>
        
        <div className={styles.containerContent}>
        Databases Im using: <b>MySQL, MongoDB</b>📂
        </div>
        
      </div>
    </div>
  
  );
}