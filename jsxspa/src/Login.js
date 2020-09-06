import React,{useState} from 'react';
import axios from 'axios';

function Login() {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    axios.post('http://localhost:3001/login', {username, password})
    .then((res) => {
      console.log(res);
      document.cookie = 'jwt-token='+res.data.token+'; max-age=60;';
      })
    .catch((error) => {
      console.log(error);});

  }

    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <h3>Login to your account</h3>
            <label>username: </label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} name="username" />
            <br/>
            <label>password: </label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} name="password" />
            <br/>
            <input type="submit" value="Submit"/>
          </form>
        </header>
      </div>
    );
  }
  
  export default Login;