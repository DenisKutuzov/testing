import styles from './page.module.css'
import CardList from "@/components/CardList/CardList";

export const metadata = {
  title: 'Маркетплейс',
}

// async function getCardList() {
//   const response = await fetch(
//       'https://dummyjson.com/carts')
//   return response.json()
// }

export default async  function  Home() {

  // const cardList = await getCardList()

  return (
    <div className={styles.wrapper}>
          <CardList />
          {/*<CardList cardList={cardList}/>*/}
    </div>
  )
}
