import React, { useState } from "react";
import './loginform.css';


const Loginform = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password }
        setAllEntry([...newEntry, newEntry]);
        console.log(setAllEntry);
    }

    return (
        <div className="login">
       
           
            <frm>
                <form action="" onSubmit={submitForm}>
                    <div class="frm">
                     <h1>LOGIN</h1>

                     <div className="text-field">
                       <label htmlfor="email">Email: </label>
                        <input type="text" name="email" id="em"
                            autoComplete="off" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                     </div>
                    </div>

                    <div class="center">
                        <label htmlfor="password">Password: </label>
                        <input type="password" name="password" id="pw"
                            autoComplete="off" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="sub">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div>
                    {
                        allEntry.map((curElem) => {
                            return (
                                <div className="showdetails">
                                    <p>{curElem.email}</p>
                                    <p>{curElem.password}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </frm>
        </div>
    )
}
export default Loginform;