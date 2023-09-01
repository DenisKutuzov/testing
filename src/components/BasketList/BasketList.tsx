'use client'

import styles from './basketList.module.scss'
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import ModalPay from "@/components/ModalPay/ModalPay";
import {modalPayToggle} from "@/redux/features/ModalSlice";
import BasketCard from "@/components/BasketCard/BasketCard";
import SumPrice from "@/components/UI/SumPrice/SumPrice";
import ModalPassed from "@/components/ModalPassed/ModalPassed";


export default function BasketList() {

    const dispatch = useAppDispatch();

    const basketCardList = useAppSelector((state) => state.BasketSlice)

    const toggleModal = useAppSelector((state) => state.ModalSlice)



    return (
        <>
            {basketCardList.length > 0 ?
                <div>
                    {basketCardList.map((element: any) => (
                        <div key={element.id}>
                            <BasketCard card={element}/>
                        </div>
                    ))}

                    <SumPrice/>

                    <button onClick={() => dispatch(modalPayToggle(true))} className={styles.btn}>Перейти к оплате</button>
                </div> :
                <div>
                    <h2 className={styles.titleEmpty}>Пустая корзина</h2>
                </div>
            }
            {toggleModal.modalPay &&
                <ModalPay/>}
            {toggleModal.modalPassed &&
                <ModalPassed/>}
        </>
    )
}