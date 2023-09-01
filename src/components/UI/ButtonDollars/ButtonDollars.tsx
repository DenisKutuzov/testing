'use client'

import styles from './buttonDollars.module.scss'

import {useAppSelector} from "@/redux/hooks";
import {PiCurrencyDollarSimpleFill} from "react-icons/pi";

export default function ButtonDollars () {

    const sumDollars : number = useAppSelector((state) => state.PayDollarSlice)

    return (
        <div className={styles.buttonDollar }>
            <PiCurrencyDollarSimpleFill size={30} color={'white'} />
            <div className={styles.counterDollar}>
                <span>{sumDollars}</span>
            </div>
        </div>
    )
}