'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import { useRef, useEffect } from "react";


interface ButtonProps {
  label: string;
  action_svg: string;
  svg_height?: number;
  svg_width?: number;
}

const Button: React.FC<ButtonProps> = ({ label, action_svg, svg_height = 18, svg_width = 18 }) => {


  const elementRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function handleResize() {
      let rect = elementRef?.current?.getBoundingClientRect();
      //read the position of the button from the localStorage with key 'nav_bar_button_coordinates
    }

    handleResize(); // initial call to get position of the element on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button className={styles.button} ref={elementRef} aria-label='Contact button'>
        {label}
        <Image
          src={`/${action_svg}`}
          alt={`${label} icon`}
          width={svg_width}
          height={svg_height}
        />
      </button>

    </>)
}

export default Button;

