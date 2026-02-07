import MyNavLink from "../MyNavLink/MyNavLink";
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.about}>
                <MyNavLink to="/" title="Случайный Пользователь"/>
            </div>

            <div className={styles.main}>
                <MyNavLink to="/prices" title="УСЛУГИ"/>
                <MyNavLink to="/request" title="ЗАКАЗАТЬ"/>
            </div>
        </header>
    )
}

export default Header;