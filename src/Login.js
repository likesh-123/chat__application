import React from 'react'
import { Button } from "@material-ui/core"
import "./Login.css"
import { auth, provider } from './firebase'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import image from './images/favicon-96x96.png';


function Login() {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((err) => alert(err.message))
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src={image} alt="" />
                <div className="login__text">
                    <h1>Sign in to Live Chat</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
