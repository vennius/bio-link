import Image from "next/image";
import styles from "../styles/components/ProfilePict.module.css";

export default function ProfilePict({path}){
  return (
  
    <div className={styles.wrapper}>
      <Image src={path} alt="profile" width="200" height="200"/>
    </div>
  
  );
}