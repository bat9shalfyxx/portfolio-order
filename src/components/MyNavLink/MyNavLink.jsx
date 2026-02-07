import { NavLink } from "react-router";
import styles from "./MyNavLink.module.scss";

const MyNavLink = ({ to, title }) => {
    return (
        <NavLink 
            to={to}
            className={({ isActive }) =>
                isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
            } 
        >
            <span className={styles.title}>
                {title}
            </span>
        </NavLink>
    )
}

export default MyNavLink;