import styles from './header.module.scss'
import ButtonBasket from "@/components/UI/ButtonBasket/ButtonBasket";
import Link from 'next/link'
import ButtonCoin from "@/components/UI/ButtonCoin/ButtonCoin";
import ButtonDollars from "@/components/UI/ButtonDollars/ButtonDollars";

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.header}>
                <Link href={'/'}>
                    <h1 className={styles.title}>Marketplace</h1>
                </Link>
                <Link href={'/basket'}>
                    <ButtonBasket/>
                </Link>
                <Link href={'/cash'}>
                    <ButtonCoin/>
                </Link>
                <Link href={'/cash'}>
                    <ButtonDollars/>
                </Link>
            </div>
        </header>
    )
}