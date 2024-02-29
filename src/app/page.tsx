import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import HomePage from "@/pages/home/home";

export default function Home() {
  return (
    <main className={styles.main}>
        <img src="/bgMonkey.png" className={styles.bgMonkey}/>
        <img src="/bgWaves.png" className={styles.bgWaves}/>
      <Navbar/>
        <HomePage/>
      <Footer/>
    </main>
  );
}
