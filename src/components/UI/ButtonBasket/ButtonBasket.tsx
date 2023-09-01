'use client'
import styles from './buttonBasket.module.scss'


import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {IoIosBasket} from "react-icons/io";

export default function ButtonBasket () {

    const basketCardList = useAppSelector((state) => state.BasketSlice)


    return (
        <div className={styles.buttonBasket}>
            <IoIosBasket size={30} color={'white'} />
            <div className={styles.counterBasket}>
            <span>{basketCardList.length}</span>
            </div>
        </div>
    )
}