import { Link } from "react-router-dom";
import Label from "../../components/Label";
import InputBox from "../../components/InputBox";
import MainButton from "../../components/MainButton";
import AnchorLink from "../../components/AnchorLink";

function LoginChildContainer() {
    const inputTextmessageProps = {
        labelTxt: 'Email',
        placeholdertxt: '  Email..',
        inputType: 'text'
    };

    const inputPasswordmessageProps = {
        labelTxt: 'Password',
        placeholdertxt: '  Password..',
        inputType: 'password'
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


            >
                <br />
                <br />
                <Label message={"Login"} />
                <br />
                <InputBox {...inputTextmessageProps} />
                <br />
                <InputBox {...inputPasswordmessageProps} />
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
