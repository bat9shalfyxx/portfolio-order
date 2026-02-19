import { NavLink } from "react-router"
import PageTemplate from "../PageTemplate/PageTemplate";
import MyButton from "../../MyButton/MyButton";
import styles from "./About.module.scss";
import img from "../../../img/person.png";
import dog1 from "../../../img/dog1.png";
import dog2 from "../../../img/dog2.png";
import team from "../../../img/team.jpg";

const About = () => {
  const qualifications = [
    "Образование: СПбГАУ, бакалавр, специальность «Биология/кинология» (диплом с отличием), 2019 - 2023г.",
    "Тема ВКР: «Методика подготовки собак к соревнованиям по спортивной дисциплине NoseWork».",
    "С 2021 года - инструктор по бытовому послушанию, НоузВорк, наставник в «CleverDog Академии».",
    "Повышение квалификации: регулярное участие в курсах и семинарах от ведущих специалистов.",
    "Неоднократный призер и победитель соревнований по Nosework."
  ];

  return (
    <PageTemplate>
      <div className={styles.about}>
        <div className={styles.heroSection}>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img src={img} alt="Кинолог с собакой" className={styles.mainImg} loading="lazy"/>
              <div className={styles.imageDecoration}></div>
            </div>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.badge}>ПРОФЕССИОНАЛЬНЫЙ КИНОЛОГ</div>
            <h1 className={styles.title}>Анастасия Рагулина</h1>
            <p className={styles.subtitle}>
              Индивидуальный подход с использованием современных методов и положительного подкрепления. 
              Обучение для собак всех возрастов и пород.
            </p>
            
            <div className={styles.ctaButtons}>
              <NavLink to="/request" className={styles.primaryLink}>
                <MyButton className={styles.primaryButton} title="Записаться на занятия" />
              </NavLink>
            </div>
          </div>
          
        </div>

        <div className={styles.contentSection}>
          <div className={styles.mainContent}>
            <div className={styles.aboutCard}>
              <h2 className={styles.sectionTitle}>Обо мне</h2>
              <p className={styles.description}>
                Я инструктор - кинолог с 2021 года. Работаю с собаками всех возрастов и пород. Специализируюсь на проведении занятий по дисциплине Nosework и бытовом послушании. Рекомендованный инструктор Nosework от Российской ассоциации Ноузворк.
              </p>
              <p className={styles.description}>
                Моя миссия — создавать гармоничные отношения между хозяином и собакой через понимание, 
                уважение и эффективные методики обучения.
              </p>
            </div>

            <div className={styles.qualificationsCard}>
              <h2 className={styles.sectionTitle}>Квалификация и достижения</h2>
              <div className={styles.qualificationsList}>
                {qualifications.map((item, index) => (
                  <div key={index} className={styles.qualificationItem}>
                    <div className={styles.bullet}></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.educationDetails}>
                <h3 className={styles.detailsTitle}>Образование и курсы:</h3>
                <div className={styles.coursesGrid}>
                  <div className={styles.courseCard}>Dog-тренер (Антонина Зимарева)</div>
                  <div className={styles.courseCard}>Школа инструкторов Nosework 1-3 сессии</div>
                  <div className={styles.courseCard}>Курсы "Помойка" и "Трюки" (Антонина Зимарева)</div>
                  <div className={styles.courseCard}>«ПРО:управление» (Анастасия Бахчеван)</div>
                  <div className={styles.courseCard}>Создадим мир, в котором живет ваша собака (Ульяна Мальцева)</div>
                  <div className={styles.courseCard}>Инструктор-кинолог (CleverDog)</div>
                  <div className={styles.courseCard}>Семинар «Высший класс» (Анастасия Бахчеван)</div>
                  <div className={styles.courseCard}>Семинар по ОСО (Анастасия Бахчеван)</div>
                  <div className={styles.courseCard}>Семинар «Эффективный переход из класса в класс» (Александра Древнова)</div>
                  <div className={styles.courseCard}>Первая сессия школы для инструкторов и владельцев (Школа безконфликтной дрессировки)</div>
                </div>
              </div>
            </div>

            
            <div className={styles.teamHolder}>
              <div className={styles.teamInfo}>
                <h3>Мои ученики - неоднократные призеры и победители соревнований NoseWork. </h3>
                <p>За 2025 год была выстроена сплоченная команда учеников, которая регулярно становится призерами и победителями соревнований по дисциплине NoseWork в разных классах сложности.</p>
              </div>
              
              <div className={styles.teamImageHolder}>
                <div className={styles.imageWrapper}>
                  <img className={styles.teamImage} src={team} alt="Команда призеров" loading="lazy"/>
                  <div className={`${styles.imageDecorationSec}`}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Мои собаки</h3>
              <div className={styles.dogsInfo}>
                <div className={styles.dogCard}>
                  <img src={dog2} className={styles.dogAvatar} alt="Каспер" loading="lazy" />
                  <div className={styles.dogDetails}>
                    <h4>Каспер</h4>
                    <p className={styles.dogBreed}>Японский шпиц</p>
                    <p className={styles.dogActivity}>Ноузворк 1 класс, подготовка к ОКД</p>
                  </div>
                </div>
                <div className={styles.dogCard}>
                  <img src={dog1} className={styles.dogAvatar} alt="Тейна" loading="lazy" />
                  <div className={styles.dogDetails}>
                    <h4>Тейна</h4>
                    <p className={styles.dogBreed}>Бордер колли</p>
                    <p className={styles.dogActivity}>Ноузворк 1, обидиенс-1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Специализация</h3>
              <div className={styles.skillsList}>
                <div className={styles.skillItem}>НоузВорк</div>
                <div className={styles.skillItem}>Трюковая дрессировка</div>
                <div className={styles.skillItem}>Бытовое послушание</div>
                <div className={styles.skillItem}>Коррекция поведения</div>
                <div className={styles.skillItem}>Подготовка к соревнованиям</div>
                <div className={styles.skillItem}>Работа со щенками</div>
              </div>
            </div>

            <div className={styles.contactPrompt}>
              <p>Есть вопросы по дрессировке?</p>
              <a href="https://t.me/An_yah" target="blank" className={styles.contactLink}>
                <MyButton className={styles.contactButton} title="Написать мне" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default About;