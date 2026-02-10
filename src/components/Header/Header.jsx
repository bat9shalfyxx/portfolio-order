import MyNavLink from "../MyNavLink/MyNavLink";
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.about}>
                <MyNavLink to="/" title="Анастасия Рагулина"/>
            </div>

            <div className={styles.main}>
                <MyNavLink to="/prices" title="СТОИМОСТЬ ЗАНЯТИЙ  "/>
                <MyNavLink to="/request" title="ЗАПИСЬ"/>
            </div>
        </header>
    )
}

export default Header;