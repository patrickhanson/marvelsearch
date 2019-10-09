import React, { Component } from 'react';
import './App.css';
import marvelLogo from './images/Font-Marvel-Logo.jpg'
import SearchResults from './SearchResults'
import { Button, Input } from 'semantic-ui-react';

class App extends Component {
  state = {
    value: "",
    searchResults: []
  }
  
  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  getComics = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }

    const apikey = "53edf8013ffc768094d59e068d968211"
    const ts = "1"
    const hash = "7e9a6f0439c442930f6bcf44fdd8dd49"
    
    fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${apikey}&ts=${ts}&hash=${hash}&title=${this.state.value}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.data.results.length > 0) {
          this.setState({ searchResults: data.data.results })
          console.log(this.state.searchResults)
          this.setState({ value: "" })
        } else {
          alert("No matches! Check your spelling and try again.")
        }
      })
  }

  submitSearch = () => {
    this.getComics()
  }

  submitKeySearch = (event) => {
    if (event.key === "Enter") {
      this.getComics()
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="pageHeader">
          <img src={marvelLogo} alt='Marvel Logo' width='200px' />
          <h1 className="title">Search</h1>
        </header>
        <div className="body" >
          <Input 
            focus placeholder="Search for Comic Book"
            className="searchInput"
            icon="search"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.submitKeySearch}
          />
          <Button 
            className='ui button' 
            onClick={this.submitSearch}
          >
            Search
          </Button>
          <div className="main" >
            <h2>Results</h2>
            <SearchResults results={this.state.searchResults} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
