import PageTemplate from "../PageTemplate/PageTemplate";
import { Mail } from "lucide-react";
import styles from "./Request.module.scss";

const Request = () => {
    return (
        <PageTemplate>
            <div  className={styles.request}>
                <h3>Запись</h3>
                <h2>Оставьте заявку</h2>
                <p>Заполните форму ниже, и я свяжусь с вами в ближайшее время для<br />
                    уточнения деталей и назначения встречи</p>

                <form className={styles.form}>
                    <input type="text" className={`${styles.input} ${styles.inline}`} placeholder="Укажите породу собаки" required/>
                    <input type="text" className={`${styles.input} ${styles.inline}`} placeholder="Укажите кличку собаки" required/>
                    <input type="text" className={`${styles.input} ${styles.inline}`} placeholder="Укажите возраст собаки" required/>
                    <input type="text" className={`${styles.input} ${styles.inline}`} placeholder="Чем хотите заниматься" required/>
                    <input type="text" className={`${styles.input} ${styles.inline}`} placeholder="В какие дни удобно заниматься" required/>
                    <input type="text" className={`${styles.input} ${styles.inline}`} placeholder="Введите номер" required/>
                    <input type="text" className={`${styles.input} ${styles.inline}`} placeholder="Введите свой телеграм / @nickname /" />
                    <input type="text" className={`${styles.input} ${styles.inline}`} placeholder="Введите почтовый адресс" required/>
                    
                    <div className={styles.button}>
                        <Mail size={16}/>
                        <input type="submit" value="Отправить"/>
                    </div>
                </form>
            </div>
        </PageTemplate>
    )
}

export default Request;