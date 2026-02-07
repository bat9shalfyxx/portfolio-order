import { NavLink } from "react-router";
import PageTemplate from "../PageTemplate/PageTemplate";
import MyButton from "../../MyButton/MyButton";
import styles from "./About.module.scss";
import img from "../../../img/person.png";
import dog1 from "../../../img/dog1.png";
import dog2 from "../../../img/dog2.png";

const About = () => {
  const qualifications = [
    "Специализация: НоузВорк - начальный, средний и профи уровень, Бытовое послушание.",
    "Образование: СПбГАУ, бакалавр, специальность «Биология/кинология» (диплом с отличием).",
    "Тема ВКР: «Методика подготовки собак к соревнованиям по спортивной дисциплине NoseWork».",
    "Опыт работы: с 2021 года - инструктор по бытовому послушанию, НоузВорк, наставник в «CleverDog Академии».",
    "Повышение квалификации: регулярное участие в курсах и семинарах от ведущих специалистов.",
    "Достижения: призер соревнований по ноузворку, подготовка собак к ОКД и обидиенс."
  ];

//   const stats = [
//     { number: "3+", label: "года опыта" },
//     { number: "100+", label: "довольных клиентов" },
//     { number: "2", label: "собственных собаки" },
//     { number: "10+", label: "пройденных курсов" }
//   ];

  return (
    <PageTemplate>
      <div className={styles.about}>
        <div className={styles.heroSection}>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img src={img} alt="Кинолог с собакой" className={styles.mainImg} />
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
                <MyButton className={styles.primaryButton} title="Стать нашим клиентом" />
              </NavLink>
              <NavLink to="/contact" className={styles.secondaryLink}>
                <MyButton className={styles.secondaryButton} title="Задать вопрос" variant="outline" />
              </NavLink>
            </div>
          </div>
          
        </div>

        {/* <div className={styles.statsSection}>
          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        <div className={styles.contentSection}>
          <div className={styles.mainContent}>
            <div className={styles.aboutCard}>
              <h2 className={styles.sectionTitle}>Обо мне</h2>
              <p className={styles.description}>
                Я специализируюсь на индивидуальном подходе к каждому клиенту и собаке, 
                используя современные методы дрессировки с акцентом на положительное подкрепление. 
                Мой опыт позволяет работать с собаками всех возрастов и пород — от щенков до взрослых собак.
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
              
              <div className={styles.experienceDetails}>
                <h3 className={styles.detailsTitle}>Опыт работы:</h3>
                <ul className={styles.experienceList}>
                  <li>С 06.2021 — инструктор по бытовому послушанию</li>
                  <li>С 08.2021 — передержка домашних животных</li>
                  <li>С 08.2022 — инструктор НоузВорк</li>
                  <li>С 02.2023 — наставник в «CleverDog Академии»</li>
                  <li>С 09.2023 — инструктор в кинологическом лагере «CleverDog»</li>
                </ul>
              </div>
              
              <div className={styles.educationDetails}>
                <h3 className={styles.detailsTitle}>Образование и курсы:</h3>
                <div className={styles.coursesGrid}>
                  <div className={styles.courseCard}>Dog-тренер (Антонина Зимарева)</div>
                  <div className={styles.courseCard}>Школа инструкторов Nosework 1-3 сессии</div>
                  <div className={styles.courseCard}>Курсы "Помойка" и "Трюки" (Антонина Зимарева)</div>
                  <div className={styles.courseCard}>Мир вашей собаки (Ульяна Мальцева)</div>
                  <div className={styles.courseCard}>Инструктор-кинолог (CleverDog)</div>
                  <div className={styles.courseCard}>Семинар по ОСО (Анастасия Бахчеван)</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Мои собаки</h3>
              <div className={styles.dogsInfo}>
                <div className={styles.dogCard}>
                  <img src={dog1} className={styles.dogAvatar} alt="Каспер" />
                  <div className={styles.dogDetails}>
                    <h4>Каспер</h4>
                    <p className={styles.dogBreed}>Японский шпиц</p>
                    <p className={styles.dogActivity}>Ноузворк 1 класс, подготовка к ОКД</p>
                  </div>
                </div>
                <div className={styles.dogCard}>
                  <img src={dog2} className={styles.dogAvatar} alt="Тейна" />
                  <div className={styles.dogDetails}>
                    <h4>Тейна</h4>
                    <p className={styles.dogBreed}>Бордер колли</p>
                    <p className={styles.dogActivity}>Ноузворк 0 класс, подготовка к обидиенс-1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Специализация</h3>
              <div className={styles.skillsList}>
                <div className={styles.skillItem}>НоузВорк</div>
                <div className={styles.skillItem}>Бытовое послушание</div>
                <div className={styles.skillItem}>Коррекция поведения</div>
                <div className={styles.skillItem}>Подготовка к соревнованиям</div>
                <div className={styles.skillItem}>Работа со щенками</div>
              </div>
            </div>

            <div className={styles.contactPrompt}>
              <p>Есть вопросы по дрессировке?</p>
              <NavLink to="/contact" className={styles.contactLink}>
                <MyButton className={styles.contactButton} title="Написать мне" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default About;