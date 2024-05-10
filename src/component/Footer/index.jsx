import React from 'react'
import styles from "./styles.module.css";
import Image from 'next/image';

export default function index() {
  return (
    <div className={styles.container}>
      <Image src="/netherland.svg"
        alt="netherland"
        className={styles.netherland}
        width={250}
        height={225}
        priority
      />
      <div className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="secDesk logo"
          width={100}
          height={48}
          priority
        /></div>
      <div className={styles.topBtn}><Image
        className={styles.topBtn_img}
        src="/topBtn.svg"
        alt="top button"
        width={10}
        height={10}
        priority />Back to top</div>

      <hr className={styles.horizontalLine} />

      <div className={styles.center}>
        <ul className={styles.center_options}>
          <li>Contact</li>
          <li>Jobs</li>
          <li>Team</li>
          <li>Location</li>
          <li>About Us</li>
        </ul>
        <ul className={styles.center_options}>
          <li>Expertise</li>
          <li>Subscription</li>
          <li>Training</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className={styles.branding}>© Secdesk, Netherlands, 2024</div>

      <div className={styles.socials}>
        <Image
          src="/twitter.svg"
          alt="Vercel Logo"
          width={20}
          height={20}
          priority
        />
        <Image
          src="/youtube.svg"
          alt="Vercel Logo"
          width={20}
          height={20}
          priority
        />
        <Image
          src="/insta.svg"
          alt="Vercel Logo"
          width={20}
          height={20}
          priority
        />
        <Image
          src="/spotify.svg"
          alt="Vercel Logo"
          width={20}
          height={20}
          priority
        />
      </div>
    </div>
  )
}
