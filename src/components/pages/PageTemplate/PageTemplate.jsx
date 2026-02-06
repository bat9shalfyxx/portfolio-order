import styles from "./PageTemplate.module.scss";

const PageTemplate = ({ children }) => {
    return (
        <main className={styles.pageTemplate}>
            { children }
        </main>
    )
}

export default PageTemplate;