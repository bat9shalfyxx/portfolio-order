import PageTemplate from "../PageTemplate/PageTemplate";
import { Mail, Calendar, Target, Loader2 } from "lucide-react";
import styles from "./Request.module.scss";
import { useState } from "react";
import emailjs from "emailjs-com";

const Request = () => {
    const [formData, setFormData] = useState({
        breed: "",
        name: "",
        age: "",
        activity: "",
        schedule: "",
        phone: "",
        telegram: "",
        email: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");

    const activities = [
        "NoseWork",
        "Коррекция поведения",
        "Послушание"
    ];

    const schedules = [
        "Будние днем",
        "Будни вечером",
        "Выходные днем",
        "Выходные вечером"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const cleanText = (text) => {
                if (!text) return '';
                return text
                    .toString()
                    .replace(/[<>"&]/g, '') // Удаляем опасные символы
                    .trim()
                    .substring(0, 500); // Ограничиваем длину
            };
      
            const templateParams = {
                breed: cleanText(formData.breed),
                name: cleanText(formData.name),
                age: cleanText(formData.age),
                activity: cleanText(formData.activity),
                schedule: cleanText(formData.schedule),
                phone: cleanText(formData.phone),
                telegram: cleanText(formData.telegram) || "Не указан",
                email: cleanText(formData.email),
                date: new Date().toLocaleString('ru-RU'),
            }
            
            console.log('Отправляем данные:', templateParams); 

            await emailjs.send(
                'service_7b41bak',
                'template_pkj8hah',
                templateParams,
                'alKJsAHSl2IrF4Pdv'
            )
    
            setIsSent(true);
    
            setFormData({
                breed: "",
                name: "",
                age: "",
                activity: "",
                schedule: "",
                phone: "",
                telegram: "",
                email: ""
            })
    
            setTimeout(() => {
                setIsSent(false);
            }, 5500)
        } 
        catch (err) {
            console.log(err);
            setError('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
        } 
        finally {
            setIsLoading(false);
        }
    };

    return (
        <PageTemplate>
            <div className={styles.request}>
                <div className={styles.header}>
                    <h3 className={styles.subtitle}>Запись</h3>
                    <h2 className={styles.title}>Оставьте заявку</h2>
                    <p className={styles.description}>
                        Заполните форму ниже, и я свяжусь с вами в ближайшее время для 
                        уточнения деталей и назначения встречи
                    </p>
                </div>

                {isSent && (
                    <div className={styles.successMessage}>
                        ✅ Заявка успешно отправлена! Я свяжусь с вами в ближайшее время.
                    </div>
                )}

                {error && (
                    <div className={styles.errorMessage}>
                        ❌ {error}
                    </div>
                )}

                <form className={styles.form} onSubmit={sendEmail}>
                    <div className={styles.formGrid}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="breed" className={styles.label}>Порода собаки *</label>
                            <input
                                id="breed"
                                name="breed"
                                type="text"
                                className={styles.input}
                                placeholder="Например: Лабрадор"
                                value={formData.breed}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.label}>Кличка собаки *</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className={styles.input}
                                placeholder="Например: Бакс"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="age" className={styles.label}>Возраст собаки *</label>
                            <input
                                id="age"
                                name="age"
                                type="text"
                                className={styles.input}
                                placeholder="Например: 1 год"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="activity" className={styles.label}>
                                <Target size={16} />
                                Чем хотите заниматься *
                            </label>
                            <select
                                id="activity"
                                name="activity"
                                className={`${styles.input} ${styles.select}`}
                                value={formData.activity}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Выберите направление</option>
                                {activities.map((activity, index) => (
                                    <option key={index} value={activity}>
                                        {activity}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="schedule" className={styles.label}>
                                <Calendar size={16} />
                                В какие дни удобно заниматься *
                            </label>
                            <select
                                id="schedule"
                                name="schedule"
                                className={`${styles.input} ${styles.select}`}
                                value={formData.schedule}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Выберите удобное время</option>
                                {schedules.map((schedule, index) => (
                                    <option key={index} value={schedule}>
                                        {schedule}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone" className={styles.label}>Номер телефона *</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className={styles.input}
                                placeholder="+7 (___) ___-__-__"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="telegram" className={styles.label}>Telegram (при наличии)</label>
                            <input
                                id="telegram"
                                name="telegram"
                                type="text"
                                className={styles.input}
                                placeholder="@username"
                                value={formData.telegram}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Email *</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={styles.input}
                                placeholder="example@mail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={20} className={styles.spinner} />
                                <span>Отправка...</span>
                            </>
                        ) : (
                            <>
                                <Mail size={20} />
                                <span>Отправить заявку</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </PageTemplate>
    );
};

export default Request;