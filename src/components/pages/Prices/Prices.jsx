import PageTemplate from '../PageTemplate/PageTemplate';
import MyNavLink from "../../MyNavLink/MyNavLink"
import styles from './Prices.module.scss';
import { CheckCircle, Clock, Dog, PhoneCall } from 'lucide-react';

const Prices = () => {
  const individualServices = [
    {
      title: '60 минут одна собака',
      price: '2500₽',
      description: 'Занятие с одной собакой',
      icon: <Dog size={24} />,
    },
    {
      title: '60 минут две собаки',
      price: '3200₽',
      description: 'Занятие для двух собак',
      icon: <Dog size={24} />,
    },
    {
      title: '30 минут одна собака',
      price: '1700₽',
      description: 'Короткая интенсивная тренировка',
      icon: <Clock size={24} />,
    },
    {
      title: 'Абонемент на 4 занятия по 30 минут',
      price: '6400₽',
      icon: <CheckCircle size={24} />,
      saving: '400₽',
      popular: true,
    },
  ];

  const groupServices = [
    {
      title: 'Разовое занятие в группе 60 минут',
      price: '1400₽',
      description: 'Занятие в группе до 4 собак',
      icon: <Dog size={24} />,
    },
    {
      title: 'Абонемент на 5 занятий',
      price: '5000₽',
      description: 'Занятие в группе до 4 собак',
      icon: <CheckCircle size={24} />,
      saving: '2000₽',
      popular: true,
    },
  ];

  const rules = [
    'Собаки должны быть социально адаптированы и не агрессивны к другим собакам.',
    'Разовое  занятие в группе возможно при наличии мест.',
    'В рамках абонемента возможен один бесплатный пропуск.',
    'В случаe, если на абонемент приходятся 2 пропуска, то возможна отработка пропущенного занятия в другой группе (при наличии мест).',
    'Собака должна быть привита и обработана от паразитов согласно графику.',
  ];

  return (
    <PageTemplate>
      <div className={styles.prices}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Стоимость занятий</h1>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.mainContent}>
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <Dog className={styles.sectionIcon} size={28} />
                  Индивидуальные занятия
                </h2>
                {/* <p className={styles.sectionDescription}>
                  Персональный подход к вашей собаке с разработкой индивидуальной программы тренировок
                </p> */}
              </div>

              <div className={styles.servicesGrid}>
                {individualServices.map((service, index) => (
                  <div 
                    key={index} 
                    className={`${styles.serviceCard} ${service.popular ? styles.popular : ''}`}
                  >
                    {service.popular && (
                      <div className={styles.popularBadge}>Выгодно</div>
                    )}
                    
                    <div className={styles.serviceHeader}>
                      <div className={styles.iconWrapper}>
                        {service.icon}
                      </div>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                    </div>
                    
                    <div className={styles.priceSection}>
                      <div className={styles.price}>{service.price}</div>
                      {service.saving && (
                        <div className={styles.saving}>
                          <span className={styles.originalPrice}>
                            {service.saving === '400₽' ? '6800₽' : '7500₽'}
                          </span>
                          Экономия {service.saving}
                        </div>
                      )}
                    </div>
                    
                    <p className={styles.serviceDescription}>{service.description}</p>
                    
                    <MyNavLink to="/request" className={styles.bookButton}>
                        <button className={styles.bookButton}>
                          Записаться
                        </button>
                      </MyNavLink>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <Dog className={styles.sectionIcon} size={28} />
                  Групповые занятия (Nosework)
                </h2>
                {/* <p className={styles.sectionDescription}>
                  Обучение в группе для социализации и отработки команд в условиях реальной среды
                </p> */}
              </div>

              <div className={styles.servicesGrid}>
                {groupServices.map((service, index) => (
                  <div 
                    key={index} 
                    className={`${styles.serviceCard} ${service.popular ? styles.popular : ''}`}
                  >
                    {service.popular && (
                      <div className={styles.popularBadge}>Выгодно</div>
                    )}
                    
                    <div className={styles.serviceHeader}>
                      <div className={styles.iconWrapper}>
                        {service.icon}
                      </div>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                    </div>
                    
                    <div className={styles.priceSection}>
                      <div className={styles.price}>{service.price}</div>
                      {service.saving && (
                        <div className={styles.saving}>
                          <span className={styles.originalPrice}>
                            {service.saving === '2000₽' ? '7000₽' : ''}
                          </span>
                          Экономия {service.saving}
                        </div>
                      )}
                    </div>
                    
                    <p className={styles.serviceDescription}>{service.description}</p>
                    
                      <MyNavLink to="/request" className={styles.bookButton}>
                        <button className={styles.bookButton}>
                          Записаться
                        </button>
                      </MyNavLink>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.rulesCard}>
              <div className={styles.rulesHeader}>
                <h2 className={styles.rulesTitle}>Где проходят занятия:</h2>
                <div className={styles.where}>
                  <div className={styles.whereEl}>
                    <h4>Занятия проходят в уютном зале «DogLoft» по адресу: ул.Лиственная 18 корпус 1.</h4>
                  </div>
                  <div className={styles.whereEl}>
                    <h4>При необходимости занятия могут проходить на улице.</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rulesCard}>
              <div className={styles.rulesHeader}>
                <h2 className={styles.rulesTitle}>Правила посещения групповых занятий (Nosework)</h2>
              </div>
              
              <div className={styles.rulesList}>
                {rules.map((rule, index) => (
                  <div key={index} className={styles.ruleItem}>
                    <CheckCircle className={styles.ruleIcon} size={20} />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
              
              {/* <div className={styles.notes}>
                <p className={styles.note}>
                    <strong>Место проведения:</strong> Занятия проходят в оборудованном кинологическом центре 
                  по адресу: ул. Собачья, 123
                </p>
                <p className={styles.note}>
                  <strong>Расписание:</strong> Групповые занятия проводятся по вторникам и четвергам в 18:00, 
                  субботам в 11:00. Индивидуальные - по предварительной записи.
                </p>
              </div> */}
            </div>
          </div>

          <div className={styles.sidebar}>
            {/* <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Что включено в стоимость</h3>
              <ul className={styles.includedList}>
                <li>Консультация кинолога перед началом курса</li>
                <li>Индивидуальная программа тренировок</li>
                <li>Обратная связь после каждого занятия</li>
                <li>Помощь в подборе снаряжения</li>
                <li>Рекомендации по питанию и уходу</li>
                <li>Поддержка в чате между занятиями</li>
              </ul>
            </div> */}

            {/* <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Дополнительные услуги</h3>
              <div className={styles.extraServices}>
                <div className={styles.extraService}>
                  <div className={styles.extraServiceHeader}>
                    <span>Консультация онлайн</span>
                    <span className={styles.extraPrice}>1500₽</span>
                  </div>
                  <p className={styles.extraDescription}>Видеоконсультация по вопросам поведения</p>
                </div>
                <div className={styles.extraService}>
                  <div className={styles.extraServiceHeader}>
                    <span>Выгул с тренировкой</span>
                    <span className={styles.extraPrice}>2000₽</span>
                  </div>
                  <p className={styles.extraDescription}>60 минут прогулки с отработкой команд</p>
                </div>
                <div className={styles.extraService}>
                  <div className={styles.extraServiceHeader}>
                    <span>Подготовка к выставке</span>
                    <span className={styles.extraPrice}>3000₽</span>
                  </div>
                  <p className={styles.extraDescription}>Специализированная тренировка</p>
                </div>
              </div>
            </div> */}

            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>Есть вопросы?</h3>
              <p className={styles.contactText}>
                Подберём оптимальный формат занятий именно для вашей собаки
              </p>
                <a href="https://t.me/An_yah" target="blank" className={styles.tgLink}>
                  <button className={styles.contactButton}>
                      Написать в Telegram
                  </button>
                </a>
              <div className={styles.contactInfo}>
                <p><PhoneCall size={15}/> +7 (922) 817-80-00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Prices;