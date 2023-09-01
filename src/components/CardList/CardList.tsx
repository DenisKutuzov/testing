'use client'

import Card from "@/components/Card/Card";

import styles from './cardList.module.scss'
import {useGetCardQuery} from "@/redux/services/cardApi";
import {CartItemType} from "@/redux/features/types"
import {Carts} from "@/types/types";


export default function CardList() {

    const {isLoading, isFetching, data, error} = useGetCardQuery(null);


    let filterCardList: CartItemType[] = [];

    if (data) {
        const uniqueArr: CartItemType[][] = data.carts.map((item: Carts) => {
            return item.products;
        });

        const uniqueObjects = new Set<number>();

        uniqueArr.forEach((array) => {
            array.forEach((obj: CartItemType) => {
                uniqueObjects.add(obj.id);
            });
        });

        filterCardList = Array.from(uniqueObjects).map((id) => {
            return uniqueArr.flat().find((obj: CartItemType) => obj.id === id) as CartItemType;
        });
    }


    return <div className={styles.cardList}>
        {filterCardList.map((item) => (
            <div key={item.id}>
                <Card card={item}/>
            </div>
        ))}

    </div>
}