import styles from './styles.module.css';
import Link from 'next/link';
interface DDMenuProps {
    list: string[];
    offsetX?: number;
    offsetY?: number;
}
const DDMenu: React.FC<DDMenuProps> = ({ list, offsetX = 0, offsetY = 28 }) => {
    return (
        <div className={styles.dropdown} style={{ transform: `translateX(${offsetX}px) translateY(${offsetY}px)` }} aria-label='language menu'>
            {list.map((item, index) => {
                return (
                    <Link href="" aria-label={item} className={styles.ddItem} key={index}>{item}</Link>
                )
            })}
        </div>
    );
};

export default DDMenu;