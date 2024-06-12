import styles from './styles.module.css';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@store/store';
import { setGlobalLanguage } from '@store/globalLanguageSlice';

interface listItem {
    label: string;
    url: string;
}
interface DDMenuProps {
    list?: listItem[];
    offsetX?: number;
    offsetY?: number;
}
const DDMenu: React.FC<DDMenuProps> = ({ list, offsetX = 0, offsetY = 0 }) => {
    const dispatch = useAppDispatch();
    const handleLanguage = (lang: string) => {
        dispatch(setGlobalLanguage({ globalLanguage: lang }))
    }

    return (
        <div className={styles.dropdown} style={{ transform: `translateX(${offsetX}px) translateY(${offsetY}px)` }} aria-label='language menu'>
            {list?.map((item, index) => {
                return (
                    <div className={styles.tile}>
                        <Link href={`${item.url}`} aria-label={item.label} onClick={() => handleLanguage(item.label)} className={styles.ddItem} key={index}>{item.label}</Link>
                    </div>
                )
            })}
        </div>
    );
};

export default DDMenu;
