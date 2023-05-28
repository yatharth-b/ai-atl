import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.hero_color}>
      <div className={styles.hero}>
        <div className={styles.hero_content_container}>
          <Image src='/logo.png' width={300} height={208.5} priority={true}></Image>
          <h3 className={styles.hero_text}>
          Atlanta’s first Generative AI hackathon<br></br>
          hosted by <a href="https://startup.exchange/"><u>builders at Georgia Tech</u></a>
          </h3>
        </div>
        <RegisterNowBanner></RegisterNowBanner>
      </div>
    </div>
  )
}

function RegisterNowBanner() {
  return (
    <div className={styles.register_now_banner_container}>
      <div className={styles.register_now_banner}>
        <div className={styles.infinite_text_container}>
          {
            [...Array(5)].map((_, i) => (
                <div className={styles.infinite} key={i}>
                  COMING THIS FALL
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}