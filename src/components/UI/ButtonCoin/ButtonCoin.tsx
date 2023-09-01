'use client'

import styles from './buttonCoin.module.scss'

import {GrBitcoin} from "react-icons/gr";
import {useAppSelector} from "@/redux/hooks";

export default function ButtonCoin () {

    const sumCoin = useAppSelector((state) => state.PayCoinSlice)

    return (
        <div className={styles.buttonCoin}>
            <GrBitcoin size={30} color={'white'} />
            <div className={styles.counterCoin}>
                <span>{sumCoin}</span>
            </div>
        </div>
    )
}