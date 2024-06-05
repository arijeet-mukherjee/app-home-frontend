import styles from './styles.module.css';
import Link from 'next/link';

interface listItem {
    label: string;
    url: string;
}
interface DDMenuProps {
    list?: listItem[];
    offsetX?: number;
    offsetY?: number;
}
const DDMenu: React.FC<DDMenuProps> = ({ list, offsetX = 0, offsetY = 0}) => {

    return (
        <div className={styles.dropdown} style={{ transform: `translateX(${offsetX}px) translateY(${offsetY}px)` }} aria-label='language menu'>
            {list?.map((item, index) => {
                return (
                    <div className={styles.tile}>
                    <Link href={`${item.url}`} aria-label={item.label} className={styles.ddItem} key={index}>{item.label}</Link>
                    </div>
                )
            })}
        </div>
    );
};

export default DDMenu;
