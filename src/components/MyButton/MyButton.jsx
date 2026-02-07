import styles from "./MyButton.module.scss";

const MyButton = ({ icon, title }) => {
    return (
        <button className={styles.button}>
            {icon && <span className={styles.icon}>icon</span>}
            {title}
        </button>
    )
}

export default MyButton;