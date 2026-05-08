import { useLanguage } from '../../LanguageContext';
import NewsWidget from '../../components/NewsWidget';
import './HomePage.css';

function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="homepage">
      <div className="homepage-container">
        <div className="homepage-main">
          <section className="hero">
            <h1>{t('welcomeTitle')}</h1>
            <p>{t('welcomeSubtitle')}</p>
          </section>
          <section className="features">
            <div className="feature-card">
              <h2>{t('ourMission')}</h2>
              <p>{t('missionText')}</p>
            </div>
            <div className="feature-card">
              <h2>{t('academicPrograms')}</h2>
              <p>{t('programsText')}</p>
            </div>
            <div className="feature-card">
              <h2>{t('community')}</h2>
              <p>{t('communityText')}</p>
            </div>
          </section>
        </div>
        <aside className="homepage-sidebar">
          <NewsWidget />
        </aside>
      </div>
    </div>
  );
}

export default HomePage;
