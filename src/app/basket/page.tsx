import styles from './page.module.scss';

import BasketList from "@/components/BasketList/BasketList";
import Link from "next/link";
import {RiArrowGoBackFill} from "react-icons/ri";

export const metadata = {
    title: 'Корзина',
}

export default function Basket() {

    return (
        <div className={styles.wrapper}>
            <Link href={'/'} className={styles.linkBack}>
                <RiArrowGoBackFill size={25} color={'white'}/>
            </Link>
            <BasketList/>
        </div>
    )
}