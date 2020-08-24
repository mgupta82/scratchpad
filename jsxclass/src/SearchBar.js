import React from 'react';

class SearchBar extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    //babel js converts to constructor and initialize state
    state = {term : ''};

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} >
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