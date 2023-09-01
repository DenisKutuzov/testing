import styles from './page.module.scss';

import Link from "next/link";
import {RiArrowGoBackFill} from "react-icons/ri";
import Exchange from "@/components/Exchange/Exchange";

export const metadata = {
    title: 'Обмен валюты',
}

export default function Basket() {

    return (
        <div className={styles.wrapper}>
            <Link href={'/'} className={styles.linkBack}>
                <RiArrowGoBackFill size={25} color={'white'}/>
            </Link>
            <Exchange/>
        </div>
    )
}