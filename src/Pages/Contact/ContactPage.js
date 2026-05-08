import { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import './ContactPage.css';

function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // in real app we'd send to server
    console.log('Contact form submitted', form);
    const request=await fetch("http://localhost:3001/contactSupport",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email:JSON.stringify(form.email),
                message:JSON.stringify(form.message),
                name:JSON.stringify(form.name)
            })
        })
        const data = await request.json();
        if(data.success===true){
            setSubmitted(true);
        }
        else{

        }
    

  };

  return (
    <div className="contactpage">
      <h1>{t('contactTitle')}</h1>
      {submitted ? (
        <p>{t('thanksMessage')}</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            {t('contactName')}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t('contactEmail')}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t('contactMessage')}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">{t('sendMessage')}</button>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
