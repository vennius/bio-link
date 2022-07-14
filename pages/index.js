import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import styles from "../styles/Home.module.css";
import ProfilePict from "../components/ProfilePict";
import Card from "../components/Card";
import Name from "../components/Name";
import Description from "../components/Description";

export default function Home(props) {
  useEffect(function(){
    AOS.init();
  }, []);
  return (
  <>
    <div className={styles.container}>
      <ProfilePict path="https://media.discordapp.net/attachments/995606239847383050/997083458872557628/IMG_27-12-2021_18-25-12_8.2.204.jpg"/>
      <Name name={"Stevennius Chandra"}/>
      <Description/>
      <div>
        <Card logoPath={"https://cdn-icons-png.flaticon.com/512/1051/1051326.png"} text="Github" link={"https://github.com/vennius"}/>
        <Card logoPath={"https://cdn-icons-png.flaticon.com/512/5968/5968841.png"} text="WhatsApp" link={"https://api.whatsapp.com/send?phone=6289503184112"}/>
        <Card logoPath={"https://cdn-icons-png.flaticon.com/512/174/174872.png"} text="Spotify" link={"https://open.spotify.com/user/phrwhw6clgsyl565wic0j6qjo?si=1mSw_rv3TzmH_pHz13aUTA&utm_source=copy-link"}/>
        <Card logoPath={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"} text="Instagram" link={"https://www.instagram.com/stevennius_chandra/"}/>
        <Card logoPath={"https://cdn-icons-png.flaticon.com/512/3046/3046121.png"} text="TikTok" link={"https://vt.tiktok.com/ZSRdnmDxh/"}/>
      </div>
    </div>
  </>
  );
}