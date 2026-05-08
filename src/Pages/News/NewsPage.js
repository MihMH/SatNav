import { useState, useEffect } from 'react';
import { useLanguage } from '../../LanguageContext';
import './NewsPage.css';

// dummy data - in real application this might come from API/Mongo
const initialNewsUK = [
  {
    id: 1,
    title: "Шкільна наукова виставка 2026",
    date: "1 березня 2026",
    summary: "Студенти представляють свої STEM проекти на щорічній науковій виставці."
  },
  {
    id: 2,
    title: "Весняний мюзикл оголошено",
    date: "20 лютого 2026",
    summary: "Приєднайтеся до вечора музики та драми з нашими талановитими студентами."
  },
  {
    id: 3,
    title: "Нове меню їдальні",
    date: "15 січня 2026",
    summary: "Більш здорові варіанти та місцеві продукти в'їжджають незабаром."
  }
];

const initialNewsRU = [
  {
    id: 1,
    title: "Школьная научная ярмарка 2026",
    date: "1 марта 2026",
    summary: "Студенты представляют свои проекты STEM на ежегодной научной ярмарке."
  },
  {
    id: 2,
    title: "Объявлен весенний мюзикл",
    date: "20 февраля 2026",
    summary: "Присоединяйтесь к вечеру музыки и драмы с нашими талантливыми студентами."
  },
  {
    id: 3,
    title: "Новое меню столовой",
    date: "15 января 2026",
    summary: "Более здоровые варианты и местные продукты скоро поступят."
  }
];

function NewsPage() {
  const { language, t } = useLanguage();
  const [news, setNews] = useState([]);

  useEffect(() => {
    // simulate fetch delay
    const newsData = language === 'uk' ? initialNewsUK : initialNewsRU;
    setTimeout(() => setNews(newsData), 500);
  }, [language]);

  return (
    <div className="newspage">
      <h1>{t('newsTitle')}</h1>
      {news.length === 0 ? (
        <p>{t('loading')}</p>
      ) : (
        <ul className="news-list">
          {news.map(item => (
            <li key={item.id} className="news-item">
              <h2>{item.title}</h2>
              <span className="date">{item.date}</span>
              <p>{item.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsPage;
