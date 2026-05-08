import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import NewsPage from './Pages/News/NewsPage';
import ContactPage from './Pages/Contact/ContactPage';
import AdmissionsPage from './Pages/Admissions/AdmissionsPage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
