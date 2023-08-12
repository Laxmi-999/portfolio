import React, { useState } from "react";
import './Loginform.css';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";


const Loginform = () =>
 {
    const navigate = useNavigate();
    // let history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
    //     navigate.push('/landing_page');

        
        e.preventDefault();
        const newEntry = { email: email, password: password }
        setAllEntry([...newEntry, newEntry]);
        console.log(setAllEntry);

    }

    return (
        <div className="login-container">
       
           
            {/* <frm> */}
                <form action="" onSubmit={submitForm}>
                    <div className ="frm">
                     <h1>LOGIN</h1>
                     <div className="email-field">
                       <label htmlfor="email">Email: </label>
                        <input type="text" name="email" id="em"
                            autoComplete="off" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>

                     <div class="password-field">
                        <label htmlfor="password">Password: </label>
                        <input type="password" name="password" id="pw"
                            autoComplete="off" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="submit-login">
                        <button type="submit" onClick={()=>{
                            navigate('/landing_page');
                        }}
                        >Login</button>
                    </div>
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
            {/* </frm> */}
        </div>
    )
}
export default Loginform;