import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Login = () => {
  
  const responseGoogle = e => {
    
  }

  const responseFacebook = e => {
    console.log(e)
  }

  return (
    <div className="container login">
      <h1>Login</h1>

      <FacebookLogin
        appId="506724130477751"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default Login;