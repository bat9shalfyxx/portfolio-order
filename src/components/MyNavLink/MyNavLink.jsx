import { NavLink } from "react-router";
import styles from "./MyNavLink.module.scss";

const MyNavLink = ({ to, title, children }) => {
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

            {children}
        </NavLink>
    )
}

export default MyNavLink;