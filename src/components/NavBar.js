import { NavLink } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import './NavBar.css';

function NavBar() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <header className="navbar">
      <div className="navbar-logo">{t('schoolName')}</div>
      <nav className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          {t('home')}
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          {t('about')}
        </NavLink>
        <NavLink to="/admissions" className={({ isActive }) => isActive ? 'active' : ''}>
          {t('admissions')}
        </NavLink>
        <NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''}>
          {t('news')}
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          {t('contact')}
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
          {t('login')}
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>
          {t('register')}
        </NavLink>
      </nav>
      <div className="language-selector">
        <button 
          className={language === 'uk' ? 'lang-btn active' : 'lang-btn'}
          onClick={() => changeLanguage('uk')}
        >
          УК
        </button>
        <button 
          className={language === 'ru' ? 'lang-btn active' : 'lang-btn'}
          onClick={() => changeLanguage('ru')}
        >
          РУ
        </button>
      </div>
    </header>
  );
}

export default NavBar;
