import React, { Component } from 'react';
import './AutoComplete.css';

class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }


    onHandleChange = (event) => {
        const value = event.target.value;
        console.log('value?', value)
        let suggestions = [];
        let tempArray = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            console.log('suggggg', regex)
            this.props.options.map((item, index) => {
                tempArray.push(item.Name)
            })
            suggestions = tempArray.sort().filter(v => regex.test(v))
            console.log('sugg', suggestions)
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

        event.target.value = null
    }

    render() {
        const { text } = this.state;
        console.log('props?', this.state.suggestions, text)
        return (
            <div className="search">
                <h1>Autocomplete</h1>
                <div className="text-container">
                    <input type="text" onChange={this.onHandleChange} value={text} onClick={this.onErase} />
                    <span class="clearBtn" onClick={this.onErase} >X</span>
                </div>

                {this.getAllSuggestions()}

            </div>
        );
    }

}

export default AutoComplete;