import { useEffect } from "react";
import styles from "../styles/components/Description.module.css";
import { isPast, getMinutes, getSeconds, getHours, getDaysInMonth } from 'date-fns';
import AOS from "aos";

export default function Description({text}){
  useEffect(() => {
    AOS.init();
  }, []);
  
  function getBirthdayCountdown(birthdayDate, birthdayMonth){
    
    const now = new Date();
    const birthday = (isPast(new Date(now.getFullYear(), birthdayMonth, birthdayDate))) ? new Date(now.getFullYear()+1, birthdayMonth, birthdayDate) : new Date(now.getFullYear(), birthdayMonth, birthdayDate);
    const restMonth = (now.getFullYear() == birthday.getFullYear()) ? (12 - now.getMonth() - (12-birthdayMonth)) : (12 - now.getMonth() + birthday.getMonth());
    
    if(restMonth != 0) return {
      month: restMonth
    };
    else return {
      date: birthday.getDate() - now.getDate()
    }
    
  }
  
  
  const date = getBirthdayCountdown(26, 8-1);
  
  return (
    
    <div data-aos="fade-in" className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.containerContent}>
        Hello, my name is <b>Stevennius Chandra</b>👋
        </div>
        
        <div className={styles.containerContent}>
       I&apos;m from <b>Indonesia</b>🇮🇩
        </div>
        
        <div className={styles.containerContent}>
        I&apos;m <b>X</b> years old ✌️
        </div>
        
        <div className={styles.containerContent}>
        Birthday on <b>26 August</b> 🎂
        </div>
        
        <div className={styles.birthdayWrapper}>
        My next birthday:
        </div>
        <p style={{
          fontWeight: "bold",
          fontSize: "1.6em",
          padding: 0,
          margin: 0,
          taxtAlign: "center"
        }}>{(date.month) ? `${date.month} ${(date.month > 1) ? "Months left" : "Month left"}` : `${date.date} ${(date.date > 1) ? "Days left" : "Day left"}`}</p>

        
      </div>
    </div>
  
  );
}