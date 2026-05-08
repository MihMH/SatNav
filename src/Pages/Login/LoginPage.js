import { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import "./LoginPage.css"

function LoginPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(t('fillAllFields'));
      return;
    }
    console.log("Login attempt:", { email, password });
            const request=await fetch("http://localhost:3001/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password,
            })
        })
        const data = await request.json();
        if(data.success===true){
            localStorage.setItem("token",data.token)
             window.location.href="/"
        }
        else{
            setError(data.error)
        }
    alert(t('loginSubmitted'));
  }

  return (
    <div className="PageContainer">
      <div className="LoginContainer">
        <h1>{t('loginTitle')}</h1>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="EmailContainer">
            <label>{t('contactEmail')}</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="test@example.com"
              value={email}
            />
          </div>
          <div className="PasswordContainer">
            <label>{t('password')}</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder="Enter your password"
              value={password}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">{t('login')}</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;