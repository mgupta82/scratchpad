import React from 'react';

function Login() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <h3>Login to your account</h3>
            <label>username: </label>
            <input type="text" name="userid" />
            <br/>
            <label>password: </label>
            <input type="password" name="passcode" />
            <br/>
            <input type="submit" value="Submit"/>
          </form>
        </header>
      </div>
    );
  }
  
  export default Login;