import { useLanguage } from '../../LanguageContext';
import './AdmissionsPage.css';

function AdmissionsPage() {
  const { t } = useLanguage();

  return (
    <div className="admissionspage">
      <h1>{t('admissionsTitle')}</h1>
      <p>{t('admissionsIntro')}</p>
      <p><strong>{t('applicationSteps')}</strong></p>
      <ol>
        <li>{t('step1')}</li>
        <li>{t('step2')}</li>
        <li>{t('step3')}</li>
        <li>{t('step4')}</li>
      </ol>
      <p>
        {t('additionalQuestions')} <a href="/contact">{t('contactOurOffice')}</a> {t('or')} (555) 123-4567.
      </p>
    </div>
  );
}

export default AdmissionsPage;
