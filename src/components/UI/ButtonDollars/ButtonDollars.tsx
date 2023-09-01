'use client'

import styles from './buttonDollars.module.scss'

import {useAppSelector} from "@/redux/hooks";
import {PiCurrencyDollarSimpleFill} from "react-icons/pi";

export default function ButtonCoin () {

    const sumCoin = useAppSelector((state) => state.PayCoinSlice)

    return (
        <div className={styles.counterDollar }>
            <PiCurrencyDollarSimpleFill size={30} color={'white'} />
            <div className={styles.counterCoin}>
                <span>{sumCoin}</span>
            </div>
        </div>
    )
}