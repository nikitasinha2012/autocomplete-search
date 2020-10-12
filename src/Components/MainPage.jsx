import React, { Component } from 'react';
import './MainPage.css';
const options = [
  'apple', 'orange', 'peach'
];
class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: [],
      text: ''
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    let suggestions = [];
    if (value.length > 0) {
      suggestions = options.filter(
        (option) => option.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
    }
    this.setState(() => ({
      suggestions,
      text: value
    }))
  }

  selectedText(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }

  onDelete() {
    this.setState({
      text: '',
      suggestions: []
    })
  }

  getAllSuggestions = () => {
    let { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul >
        {
          suggestions.map((item, index) => (<div className="list-item-style">
            <li key={index} onClick={() => this.selectedText(item)}>{item}</li>
            <span onClick={() => this.onDelete(item)}>x</span>
          </div>))
        }
      </ul>
    );
  }

  onErase = (event) => {
    event.target.value = '';
  }

  render() {
    const { text } = this.state;
    return (
      <div className="search">
        <h1>Autocomplete</h1>
        <div className="text-container">
          <input type="text" onChange={this.handleChange} value={text} onClick={this.onErase} />
        </div>

        {this.getAllSuggestions()}

      </div>
    );
  }
}

export default MainPage;