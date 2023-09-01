'use client'

import styles from './exchange.module.scss'
import {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {changeSumCoin} from '@/redux/features/PayCoinSlice'
import {changeSumDollars} from '@/redux/features/PayDollarSlice'

export default function Exchange () {

    const dispatch = useAppDispatch();

    const [dollars, setDollars] = useState<number>(1);
    const [coin, setCoin] = useState<number>(1);

    const sumCoin: number = useAppSelector((state) => state.PayCoinSlice)

    const sumDollar: number = useAppSelector((state) => state.PayDollarSlice)

    function handleDollarsBuy(e: ChangeEvent<HTMLInputElement>) {
        const amount: number = parseFloat(e.target.value);
        if (amount < 1) {
            setDollars(1)
        } else {
        setDollars(amount)
        }
    }
    function handleCoinChange(e: ChangeEvent<HTMLInputElement>) {
        const amount: number = parseFloat(e.target.value);
        if (amount < 1) {
            setCoin(1)
        } else {
            setCoin(amount)
        }
    }

    const exChange = () => {
        if (sumDollar >= coin) {
            dispatch(changeSumDollars(sumDollar - coin))
            dispatch(changeSumCoin(dollars + sumCoin))
        }
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Зачислить Доллары</h2>
            <div className={styles.input}>
                <input type="number" value={dollars}  onChange={handleDollarsBuy}/>
            </div>
            <button onClick={ () => dollars > 0 && dispatch(changeSumDollars(dollars + sumDollar))} className={styles.btn}>Купить Dollars $</button>
            <p className={styles.title}>Обмен Dollars на COIN</p>
            <div className={styles.input}>
            <input type="number" value={coin} onChange={handleCoinChange}/>
            </div>
            <button onClick={ () => coin > 0 && exChange()} className={styles.btn}>Получить COIN</button>
        </div>
    )
}