import React from 'react';

class SearchBar extends React.Component {

    //babel js converts to constructor and initialize state
    state = {term : ''};

    render() {
        return (
            <div>
                <form onSubmit={(e) => e.preventDefault()} >
                    <input type="text" 
                    value={this.state.term} 
                    onChange={(e) => this.setState({term : e.target.value.toUpperCase()})} 
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;