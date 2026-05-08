import { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import "./RegisterPage.css"

function RegisterPage(){
    const { t } = useLanguage();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fio, setFio] = useState("");
    const [error, setError] = useState("");
    const [verifyMode, setVerifyMode] = useState(false);
    const [code, setCode] = useState("");

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        if(verifyMode===false){
            
            if (!fio || !email || !password) {
                setError(t('fillAllFields'));
                return;
            }
            // In real app this would send to backend
            console.log("Register attempt:", { fio, email, password });
            const request=await fetch("http://localhost:3001/register",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password,
                    fio:fio
                })
            })
            const data = await request.json();
            if(data.status==="ok"){
                const request2=await fetch("http://localhost:3001/send-code",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                        email:email,
                    })
                })
                const data2 = await request2.json();
                if(data2.status==="ok"){
                    alert("Verification code sent to your email!");
                    setVerifyMode(true);
                }
                else{
                    setError("Failed to send verification code. Please try again.");
                }
            }
            else{
                setError(data.error)
            }
        }
        else{
            if (!code) {
                setError(t('fillAllFields'));
                return;
            }
            const request=await fetch("http://localhost:3001/verify-code",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    code:code,
                    email:email
                })
            })
            const data = await request.json();
            if(data.success===true){
                const request2=await fetch("http://localhost:3001/create-account",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                        email:email,
                        password:password,
                        fio:fio
                    })
                })
                const data2 = await request2.json();
                if(data2.success===true){
                    alert("Account created successfully! You can now log in.");
                    window.location.href="/login";
                }
            }
            else{
                setError(data.error)
            }

        }
    }

    return(
        <div className="PageContainer">
            <div className="RegisterContainer">
                {!verifyMode ? (
                <>
                    <h1>{t('registerTitle')}</h1>

                    {success && (
                        <p className="success">
                            {t('registeredSuccess')}
                        </p>
                        )}

                    <form onSubmit={(e) => onSubmitHandler(e)}>

                        <div className="FIOContainer">
                            <label>{t('fullName')}</label>

                            <input
                                onChange={(e) => setFio(e.target.value)}
                                type="text"
                                placeholder="John Doe"
                                value={fio}
                            />
                        </div>

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
                                placeholder="Enter a secure password"
                                value={password}
                            />
                        </div>

                        {error && (
                            <p className="error">
                                {error}
                            </p>
                        )}

                        <button type="submit">
                            {t('register')}
                        </button>

                    </form>
                </>
            ) : (
                <>
                    <h1>Verify Code</h1>

                    <form onSubmit={(e) => onSubmitHandler(e)}>

                        <div className="PasswordContainer">
                            <label>Verification Code</label>

                            <input
                                type="text"
                                placeholder="Enter verification code"
                                value={code}
                                onChange={(e) =>
                                    setCode(e.target.value)
                                }
                            />
                        </div>

                        <button type="submit">
                            Verify
                        </button>

                    </form>
                </>
            )}
            </div>
        </div>
    )
}

export default RegisterPage;