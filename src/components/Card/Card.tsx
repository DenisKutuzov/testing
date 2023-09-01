'use client'

import styles from './card.module.scss'
import {addItem, removeItem} from "@/redux/features/BasketSlice"
import {useAppDispatch, useAppSelector} from "@/redux/hooks";

export interface CardProps {
    card : {
        id : number,
        title : string,
        price : number
    }
}

export default function Card({card}: CardProps) {

    const dispatch = useAppDispatch();

    const basketCardList = useAppSelector((state) => state.BasketSlice)

    const isExistInBasket = basketCardList.some(i => i.id === card.id)


    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{card.title}</h2>
            <p className={styles.price}>Цена: {card.price}$</p>
            <button onClick={() => isExistInBasket ? dispatch(removeItem(card)) : dispatch(addItem(card))}
                    className={isExistInBasket ? styles.cardButton_active : styles.cardButton }>
                {isExistInBasket ? 'Убрать из корзины' : 'Добавить в корзину'}
            </button>
        </div>)
}