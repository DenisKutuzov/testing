'use client'

import styles from './modalPay.module.scss'
import {useState} from "react";
import {AiFillCloseCircle} from "react-icons/ai";
import {HiCurrencyDollar} from "react-icons/hi";
import {SiBitcoinsv} from "react-icons/si";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {modalPayToggle, modalPassedToggle} from "@/redux/features/ModalSlice";
import {removeAllItem} from "@/redux/features/BasketSlice";
import {changeSumCoin} from '@/redux/features/PayCoinSlice'
import SumPrice from "@/components/UI/SumPrice/SumPrice";
import {CartItemType} from "@/redux/features/types";
import Link from "next/link";


export default function ModalPay() {

    const dispatch = useAppDispatch();

    const [selectedOption, setSelectedOption] = useState<string>('dollars');


    const basketCardList: CartItemType[] = useAppSelector((state) => state.BasketSlice)

    const sumCoin: number = useAppSelector((state) => state.PayCoinSlice)

    const sumDollar: number = useAppSelector((state) => state.PayDollarSlice)

    const totalPrice: number = basketCardList.reduce((acc, item) => (acc + item.price), 0)

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };


    const pay = () => {
        if (selectedOption === 'dollars') {
            if (sumDollar >= totalPrice) {
                dispatch(changeSumCoin(sumDollar - totalPrice))
                dispatch(removeAllItem())
                dispatch(modalPayToggle(false))
                dispatch(modalPassedToggle(true))
                setTimeout(() => {
                    dispatch(modalPassedToggle(false))
                }, 1500)
            }
        }

        if (selectedOption === 'coins') {

            if (sumCoin >= totalPrice) {
                dispatch(changeSumCoin(sumCoin - totalPrice))
                dispatch(removeAllItem())
                dispatch(modalPayToggle(false))
                dispatch(modalPassedToggle(true))
                setTimeout(() => {
                    dispatch(modalPassedToggle(false))
                }, 1500)
            }
        }
    }

    console.log(selectedOption)

    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3 className={styles.text}>Выберите способ оплаты</h3>
                    <button onClick={() => dispatch(modalPayToggle(false))} className={styles.closeBtn}>
                        <AiFillCloseCircle size={40} color={'white'}/>
                    </button>
                </div>
                <div className={styles.radioBlock}>
                    <label className={styles.radio}>
                        <input
                            type="radio"
                            value="dollars"
                            checked={selectedOption === 'dollars'}
                            onChange={handleOptionChange}
                        />
                        <HiCurrencyDollar size={45} color={'white'}/>
                        <span>Dollars Всего {sumDollar}</span>
                    </label>
                    <label className={styles.radio}>
                        <input
                            type="radio"
                            value="coins"
                            checked={selectedOption === 'coins'}
                            onChange={handleOptionChange}
                        />
                        <SiBitcoinsv size={40} color={'white'}/>
                        <span>Coin Всего {sumCoin}</span>
                    </label>
                </div>
                <SumPrice/>
                {sumDollar < totalPrice && selectedOption === 'dollars' &&
                    <Link className={styles.coinBtn} href={'cash'}>
                        <button>Не хватает Dollars, нажмни чтобы пополнить баланс</button>
                    </Link>
                }
                {sumCoin < totalPrice && selectedOption === 'coins' &&
                    <Link className={styles.coinBtn} href={'cash'}>
                        <button>Не хватает COIN, нажмни чтобы пополнить баланс</button>
                    </Link>
                }

                    <button onClick={() => pay()} className={styles.payBtn}>Оплатить</button>

            </div>
        </div>
    )
}