import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
const { REACT_APP_FACEBOOK_APP_ID } = process.env;
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

const LoginButtons = props => 
<div className="container login">
  <h1>Login</h1>

  <FacebookLogin
    appId={REACT_APP_FACEBOOK_APP_ID}
    fields="name,email,picture"
    callback={props.responseFacebook}
  />

  <br />
  <br />

  <GoogleLogin
    clientId={REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="LOGEARSE CON GOOGLE"
    onSuccess={props.responseGoogle}
    onFailure={props.responseGoogleFail}
  />
</div>

export default LoginButtons;