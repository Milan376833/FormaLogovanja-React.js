import React, { useState } from 'react'
import './LoginSignUp.css'

const LoginSignUp = () => {

    const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login"?<div></div>:<div className="input">
                <label for="ime_prezime">Ime i prezime:</label>
                <input id="ime_prezime" type="text" name="ime_prezime" placeholder="Nikola Simic"></input>
                </div>}
            </div>
            <div className="input">
                <label for="korisnicko_ime">Korisničko ime:</label>
                <input id="korisnicko_ime" type="text" name="korisnicko_ime" placeholder="nikola.simic1"></input>
            </div>
            <div className="input">
                <label for="email">Email adresa:</label>
                <input id="email" type="text" name="email" placeholder="nikola.simic@mail.com"></input>
            </div>
            <div className="input">
                <label for="lozinka">Lozinka:</label>
                <input id="lozinka" type="text" name="lozinka" placeholder="*******"></input>
            </div>
            <div className="input">
                <label for="ponovi_lozinku">Ponovi lozinku:</label>
                <input id="ponovi_lozinku" type="text" name="ponovi_lozinku" placeholder="*******"></input>
            </div>
            {action=="Sign Up"?<div></div>:<div className='forgot-password'>Lost password<span>Click Here!</span></div>}
            <div className='submit-container'>
                <div className={action ==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>SignUp</div>
                <div className={action ==="SignUp"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
    </div>
  )
}

export default LoginSignUp;

