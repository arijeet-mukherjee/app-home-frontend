'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import { useRef, useEffect, useState } from "react";
import { isMobile } from '@util/index';

interface ButtonProps {
  label: string;
  buttonColor?: string;
  transform?: string;
  action_svg: string;
  svg_height?: number;
  svg_width?: number;
  hc?: Function;

}

const Button: React.FC<ButtonProps> = ({ label, 
  buttonColor = "var(--text-primary-color)", 
  transform = "translateX(0) translateY(0)",
  action_svg, svg_height = 18, 
  svg_width = 18, 
  hc,
}) => {


  const elementRef = useRef<HTMLButtonElement>(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  let action_svg_width_style = isMobileDevice? 'calc((100vw / 393)* 1920)' : `calc((100vw/1920)* ${svg_width}`;

  useEffect(() => {
    setIsMobileDevice(isMobile());
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
      <button className={styles.button} 
      ref={elementRef} 
      aria-label={`${label} button`} 
      style={{
        backgroundColor: `${buttonColor}`,
        transform: `${transform}`,
      }}
      onClick={(e) =>{
        if(hc) hc(e);
      }}>
        {label}
        <Image
          src={`/${action_svg}`}
          alt={`${label} icon`}
          width={svg_width}
          height={svg_height}
          style={{
            width: `calc((100vw/1920)* ${svg_width}`,
            height: 'auto',
          }}
        />
      </button>

    </>)
}

export default Button;

