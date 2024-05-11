'use client';
import React from 'react'
import styles from "./styles.module.css";
import Image from 'next/image';
import {getCurrentYear, goToTop} from '../../utils/util/index'

export default function footer() {
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
      <div className={styles.topBtn} aria-label="back to top" onClick ={()=>{goToTop()}}><Image
        className={styles.topBtn_img}
        src="/topBtn.svg"
        alt="top button"
        width={10}
        height={10}
        priority />Back to top</div>

      <hr className={styles.horizontalLine} aria-label='horizontal line'/>

      <div className={styles.center}>
        <ul className={styles.center_options}>
          <li aria-label="contact">Contact</li>
          <li aria-label="jobs">Jobs</li>
          <li aria-label="team">Team</li>
          <li aria-label="location">Location</li>
          <li aria-label="about us">About Us</li>
        </ul>
        <ul className={styles.center_options}>
          <li aria-label="experties">Expertise</li>
          <li aria-label="subscription">Subscription</li>
          <li aria-label="training">Training</li>
          <li aria-label="privacy policy">Privacy Policy</li>
        </ul>
      </div>

      <div className={styles.branding} aria-label={`copy-right secdesk, Neitherlands, ${getCurrentYear()}`}>© Secdesk, Netherlands, {getCurrentYear()}</div>

      <div className={styles.socials}>
        <Image
          src="/twitter.svg"
          alt="twitter logo"
          width={20}
          height={20}
          priority
        />
        <Image
          src="/youtube.svg"
          alt="youtube logo"
          width={20}
          height={20}
          priority
        />
        <Image
          src="/insta.svg"
          alt="instagram logo"
          width={20}
          height={20}
          priority
        />
        <Image
          src="/spotify.svg"
          alt="spotify logo"
          width={20}
          height={20}
          priority
        />
      </div>
    </div>
  )
}
