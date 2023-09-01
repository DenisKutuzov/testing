import {useAppSelector} from "@/redux/hooks";
import styles from "./sumprice.module.scss";

export default function SumPrice () {

    const basketCardList = useAppSelector((state) => state.BasketSlice)

    const totalPrice = basketCardList.reduce((acc, item) => (acc + item.price), 0)

    return (
            <p className={styles.totalPrice}>Сумма: {totalPrice}$</p>
    )
}