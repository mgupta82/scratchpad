import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat : null};
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude}),
      err => console.log(err)
    );
  }

  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
      <SeasonDisplay lat={this.state.lat}/>
      <hr/>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
  
}

ReactDOM.render(<App/>,document.querySelector('#root'));