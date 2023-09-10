import React, { useState } from "react";
import './Loginform.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";


const Loginform = () => {
    const navigate = useNavigate();
    // let history = useHistory();
    let email, password;
    let isError;
    const [errMsg, setErrMsg] = useState("");
    const [loading, setLoading] = useState(false);



    const [value, setVlaue] = useState({
        email: "",
        password: "",
    });
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    // const [allEntry, setAllEntry] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();
        setErrMsg("");
        setLoading(true);


        const newEntry = { email: email, password: password }
        // setAllEntry([...newEntry, newEntry]);
        // console.log(setAllEntry);

        const auth = getAuth();
        try {
            var user = await signInWithEmailAndPassword(auth, value.email, value.password);

            setLoading(false);
            console.log("loggin with user" + user.email);
            navigate('/landing');

        } catch (error) {
            setLoading(false);


            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setErrMsg(errorMessage);

        }






    }

    return (
        <div className="login-container">
            <form>
                <div className="frm">
                    <h1>LOGIN</h1>
                    <div className="email-field">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" id="em"
                            // autoComplete="off"
                            value={email}
                            onChange={(e) => setVlaue((prev) => ({ ...prev, email: e.target.value }))
                            } />
                    </div>

                    <div className="password-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="pw"
                            // autoComplete="off"
                            value={password}
                            onChange={(e) => setVlaue((prev) => ({ ...prev, password: e.target.value }))
                            } />

                    </div>
                    <b className='errMsg'>{errMsg}</b>
                    <div>
                        {loading === true && <b className='loading'>Loading...</b>}
                    </div>
                    <div className="submit-login">
                        <button onClick={async (e) => await submitForm(e)}
                        >Login</button>
                    </div>
                </div>
            </form>
            {/* <div>
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
            </div> */}
        </div>
    )
}
export default Loginform;