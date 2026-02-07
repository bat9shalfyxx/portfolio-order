import { CheckCircle, Users, User, CreditCard, Clock } from 'lucide-react';
import './Prices.scss';
import PageTemplate from '../PageTemplate/PageTemplate';

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
    <PageTemplate>
        <div className="pricing-dashboard">
            <p>Prices</p>
        </div>
    </PageTemplate>
  );
};

export default Prices;