import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import './Sidebar.css';

function Sidebar() {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">{t('schoolName')}</div>
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>

        <nav className="sidebar-nav">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsOpen(false)}
          >
            <span className="icon">🏠</span> {t('home')}
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsOpen(false)}
          >
            <span className="icon">ℹ️</span> {t('about')}
          </NavLink>
          
          <NavLink 
            to="/admissions" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsOpen(false)}
          >
            <span className="icon">📋</span> {t('admissions')}
          </NavLink>
          
          <NavLink 
            to="/news" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsOpen(false)}
          >
            <span className="icon">📰</span> {t('news')}
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsOpen(false)}
          >
            <span className="icon">📧</span> {t('contact')}
          </NavLink>

          <div className="nav-divider"></div>

          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsOpen(false)}
          >
            <span className="icon">🔐</span> {t('login')}
          </NavLink>
          
          <NavLink 
            to="/register" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsOpen(false)}
          >
            <span className="icon">✍️</span> {t('register')}
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="language-selector">
            <button 
              className={language === 'uk' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => changeLanguage('uk')}
              title="Українська"
            >
              УК
            </button>
            <button 
              className={language === 'ru' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => changeLanguage('ru')}
              title="Русский"
            >
              РУ
            </button>
          </div>
        </div>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;
