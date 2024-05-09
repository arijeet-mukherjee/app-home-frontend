'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import { useRef, useState, useEffect } from "react";

interface ButtonProps {
  label: string;
  action_svg: string;
}

const Button: React.FC<ButtonProps> = ({ label, action_svg }) => {
  const elementRef: any = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleResize() {
      const x = elementRef.current.offsetLeft;
      const y = elementRef.current.offsetTop;
      setPosition({ x, y });
      localStorage.setItem('nav_bar_button_coordinates', JSON.stringify({ x, y }));
  }

    handleResize(); // initial call to get position of the element on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  return (<>
    <button className={styles.button} ref={elementRef}>
      {label}
      <Image
        src={`/${action_svg}`}
        alt="Next.js Logo"
        width={18}
        height={18}
      />
    </button>
  </>)
}

export default Button;

