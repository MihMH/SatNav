import { useLanguage } from '../../LanguageContext';
import './AboutPage.css';

function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="aboutpage">
      <h1>{t('aboutTitle')}</h1>
      <p>{t('aboutIntro')}</p>
      <h2>{t('ourVision')}</h2>
      <p>{t('visionText')}</p>
      <h2>{t('ourValues')}</h2>
      <ul>
        <li>Повага / Уважение</li>
        <li>Відповідальність / Ответственность</li>
        <li>Цілісність / Целостность</li>
        <li>Спільнота / Сообщество</li>
      </ul>
    </div>
  );
}

export default AboutPage;
