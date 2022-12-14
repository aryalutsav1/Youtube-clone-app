import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state= {
        searchTerm: ' ',
    }
handleChange = (event) => {
     this.setState({ searchTerm: event.target.value})
}

handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault(searchTerm);

}

    render() {
    return(
              <Paper elevation={15} style={{padding: '25px'}}>
          <form onSubmit={this.handleSubmit}>
             <TextField fullwidth label="Search........." onChange={this.handleChange}/>
          </form>
      </Paper>
    )
    }
}

export default SearchBar;