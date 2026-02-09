import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p><span>Анастасия Рагулина</span></p>
            <p>Кинолог-консультант · Санкт-Питербург</p>
            <p>© 2026. Все права защищены.</p>
        </footer>
    )
}

export default Footer;