import styles from './basketCard.module.scss'
import {RiDeleteBin6Fill} from "react-icons/ri";
import {removeItem} from "@/redux/features/BasketSlice"
import {useAppDispatch} from "@/redux/hooks";
import {CardProps} from "@/types/types";

export default function BasketCard({card}: CardProps) {

    const dispatch = useAppDispatch();

    return (
        <div className={styles.basketCard}>
            <h2 className={styles.title}>{card.title}</h2>
            <span className={styles.price}>{card.price}$</span>
            <button onClick={() => dispatch(removeItem(card))} className={styles.btnDelete}>
                <RiDeleteBin6Fill size={35} color={'white'}/>
            </button>
        </div>
    )
}