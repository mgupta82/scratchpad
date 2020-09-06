import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome User <Link to="/user">Your Details</Link>
          </p>
        </header>
      </div>
    );
  }
  
  export default Home;