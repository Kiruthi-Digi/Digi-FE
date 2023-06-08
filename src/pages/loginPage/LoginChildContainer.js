import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Label from "../../components/Label";
import InputBox from "../../components/InputBox";
import MainButton from "../../components/MainButton"

function LoginChildContainer() {
    const navigate = useNavigate();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform validation
        if (username === 'Jane' && password === '1234') {
            // Redirect user to the dashboard
            window.location.href = '/dashboard';
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    const handleUsername = (e) => {
        setusername(e.target.value);
    };

    const handlePSW = (e) => {
        setpassword(e.target.value);
    };

    const inputTextmessageProps = {
        labelTxt: 'Email',
        placeholdertxt: 'Email..',
        inputType: 'text',
        id: "eml",
        value: username,
        onChange: handleUsername

    };

    const inputPasswordmessageProps = {
        labelTxt: 'Password',
        placeholdertxt: 'Password..',
        inputType: 'password',
        id: "psw",
        value: password,
        onChange: handlePSW
    };

    return (
        <div
            style={{
                boxSizing: 'border-box',
                background: '#D5C6B6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                float: 'left',
                clear: 'none',
                fontFamily: 'Montserrat, sans-serif',
                height: '100vh',
                width: '100%',
                padding: '0',
                margin: '0'

            }}

        >
            <form
                style={{
                    backgroundColor: '#FFFFFF',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '0 50px',
                    borderRadius: '5px',
                }}
                onSubmit={handleSubmit}
            >
                <br />
                <br />
                <Label message={"Login"} />
                {errorMessage && <p
                style={{
                    color: 'red'
                }}
                >{errorMessage}</p>}
                <br />
                <InputBox
                    {...inputTextmessageProps}
                />
                <br />
                <InputBox
                    {...inputPasswordmessageProps}
                />
                <br />
                <div>
                    <p><b><Link to="forgotpsw"
                        style={{
                            color: 'black',
                            fontSize: '14px',
                            textDecoration: 'none',
                            margin: '15px 0'
                        }}
                    >Forgot password?</Link> </b></p>
                </div>
                <br />
                <MainButton message={"Login"} />
                <br />
                <div>
                    <p><b>Or <Link to="register"
                        style={{
                            color: 'black',
                            fontSize: '14px',
                            textDecoration: 'none',
                            margin: '15px 0'
                        }}
                    >sign up</Link> </b></p>
                </div>
                <br />
                <br />
            </form>
        </div>
    );
}
export default LoginChildContainer;
