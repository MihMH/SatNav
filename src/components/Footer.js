import { useLanguage } from '../LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My School. {t('allRightsReserved')}</p>
        <p>{t('address')} • {t('phone')} • {t('email')}</p>
      </div>
    </footer>
  );
}

export default Footer;
