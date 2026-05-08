import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import './NewsWidget.css';

const newsDataUK = [
  {
    id: 1,
    title: "Шкільна наукова виставка 2026",
    date: "1 березня 2026",
    summary: "Студенти представляють STEM проекти"
  },
  {
    id: 2,
    title: "Весняний мюзикл оголошено",
    date: "20 лютого 2026",
    summary: "Вечір музики та драми"
  },
  {
    id: 3,
    title: "Нове меню їдальні",
    date: "15 січня 2026",
    summary: "Здорові та місцеві продукти"
  }
];

const newsDataRU = [
  {
    id: 1,
    title: "Школьная научная ярмарка 2026",
    date: "1 марта 2026",
    summary: "Студенты представляют проекты STEM"
  },
  {
    id: 2,
    title: "Объявлен весенний мюзикл",
    date: "20 февраля 2026",
    summary: "Вечер музыки и драмы"
  },
  {
    id: 3,
    title: "Новое меню столовой",
    date: "15 января 2026",
    summary: "Здоровые и местные продукты"
  }
];

function NewsWidget() {
  const { language, t } = useLanguage();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsData = language === 'uk' ? newsDataUK : newsDataRU;
    setNews(newsData);
  }, [language]);

  return (
    <aside className="news-widget">
      <div className="widget-header">
        <h3>📰 {t('newsTitle')}</h3>
      </div>
      <div className="news-feed">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-date">{item.date}</div>
            <h4>{item.title}</h4>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default NewsWidget;
