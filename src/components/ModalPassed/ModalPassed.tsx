import styles from './modalPassed.module.scss'

export default function ModalPassed() {
    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <h3 className={styles.title}>Покупка прошла успешно</h3>
            </div>
        </div>
    )
}