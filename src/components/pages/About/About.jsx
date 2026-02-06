import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./About.module.scss";

const About = () => {
    return (
        <PageTemplate>
            <div className={styles.about}>
                <p>About</p>
            </div>
        </PageTemplate>
    )
}

export default About;

