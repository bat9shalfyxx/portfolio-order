import { CheckCircle, Users, User, CreditCard, Clock } from 'lucide-react';
import './Prices.scss';

const Prices = () => {
  const individualPrices = [
    {
      title: "Индивидуальные занятия",
      icon: <User className="dashboard-icon" />,
      items: [
        { duration: "60 минут", dogs: "одна собака", price: "2500₽" },
        { duration: "60 минут", dogs: "две собаки", price: "3200₽" },
        { duration: "30 минут", dogs: "одна собака", price: "1700₽" },
        { duration: "Абонемент", details: "4 занятия по 30 минут", price: "6400₽", highlight: true }
      ]
    }
  ];

  const groupPrices = [
    {
      title: "Групповые занятия",
      icon: <Users className="dashboard-icon" />,
      items: [
        { type: "Разовое занятие", duration: "60 минут в группе", price: "1500₽" },
        { type: "Абонемент", details: "5 занятий", price: "5000₽", highlight: true }
      ]
    }
  ];

  const groupRules = [
    "Группы формируются по уровню подготовки собак",
    "Максимум 6 собак в группе",
    "Обязательная предварительная запись",
    "Действующие вакцинации обязательны",
    "Первое занятие — пробное (условия уточняйте)",
    "Перенос занятия возможен за 24 часа до начала"
  ];

  return (
    <div className="pricing-dashboard">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1 className="dashboard-title">
            Стоимость занятий с кинологом
          </h1>
          <p className="dashboard-subtitle">
            Выберите подходящий формат тренировок для вашего питомца
          </p>
        </header>

        <div className="pricing-grid">
          {individualPrices.map((category, idx) => (
            <div key={idx} className="pricing-card pricing-card--individual">
              <div className="pricing-card__header">
                <div className="pricing-card__header-content">
                  <div className="pricing-card__icon-wrapper">
                    {category.icon}
                  </div>
                  <h2 className="pricing-card__title">{category.title}</h2>
                </div>
              </div>
              
              <div className="pricing-card__body">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className={`pricing-item ${item.highlight ? 'pricing-item--highlight pricing-item--individual-highlight' : ''}`}
                  >
                    <div className="pricing-item__content">
                      <div className="pricing-item__info">
                        <div className="pricing-item__duration">
                          <Clock className="pricing-item__icon" />
                          <span className="pricing-item__duration-text">{item.duration}</span>
                        </div>
                        <p className="pricing-item__description">{item.dogs || item.details}</p>
                      </div>
                      <div className="pricing-item__price">
                        <div className={`pricing-item__price-value ${item.highlight ? 'pricing-item__price-value--highlight' : ''}`}>
                          {item.price}
                        </div>
                        {item.highlight && (
                          <div className="pricing-item__savings">
                            Экономия 400₽
                          </div>
                        )}
                      </div>
                    </div>
                    {item.highlight && (
                      <div className="pricing-item__badge">
                        <CheckCircle className="pricing-item__badge-icon" />
                        <span className="pricing-item__badge-text">Самый популярный вариант</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {groupPrices.map((category, idx) => (
            <div key={idx} className="pricing-card pricing-card--group">
              <div className="pricing-card__header">
                <div className="pricing-card__header-content">
                  <div className="pricing-card__icon-wrapper">
                    {category.icon}
                  </div>
                  <h2 className="pricing-card__title">{category.title}</h2>
                </div>
              </div>
              
              <div className="pricing-card__body">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className={`pricing-item ${item.highlight ? 'pricing-item--highlight pricing-item--group-highlight' : ''}`}
                  >
                    <div className="pricing-item__content">
                      <div className="pricing-item__info">
                        <div className="pricing-item__duration">
                          <Users className="pricing-item__icon" />
                          <span className="pricing-item__duration-text">{item.type}</span>
                        </div>
                        <p className="pricing-item__description">{item.duration || item.details}</p>
                      </div>
                      <div className="pricing-item__price">
                        <div className={`pricing-item__price-value ${item.highlight ? 'pricing-item__price-value--highlight' : ''}`}>
                          {item.price}
                        </div>
                        {item.highlight && (
                          <div className="pricing-item__savings">
                            Экономия 2500₽
                          </div>
                        )}
                      </div>
                    </div>
                    {item.highlight && (
                      <div className="pricing-item__badge">
                        <CreditCard className="pricing-item__badge-icon" />
                        <span className="pricing-item__badge-text">Выгоднее на 500₽ за занятие</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rules-section">
          <div className="rules-section__header">
            <div className="rules-section__icon-wrapper">
              <CheckCircle className="rules-section__icon" />
            </div>
            <h3 className="rules-section__title">
              Правила посещения групповых занятий
            </h3>
          </div>
          
          <div className="rules-grid">
            {groupRules.map((rule, index) => (
              <div 
                key={index} 
                className="rules-item"
              >
                <CheckCircle className="rules-item__icon" />
                <span className="rules-item__text">{rule}</span>
              </div>
            ))}
          </div>
          
          <div className="rules-note">
            <p className="rules-note__text">
              💡 <span className="rules-note__highlight">Важно:</span> Все занятия проводятся сертифицированными кинологами. 
              Перед началом тренировок проводится бесплатная консультация для оценки уровня подготовки собаки.
            </p>
          </div>
        </div>

        <footer className="dashboard-footer">
          <p>Цены действительны на 2026 год. Возможны изменения. Подробности уточняйте у администратора.</p>
        </footer>
      </div>
    </div>
  );
};

export default Prices;