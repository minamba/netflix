import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import "../css/SearchBar.css"

class Searchbar extends Component {

    state = {
        value:""
    }

    handleChange = e =>{
        this.setState({value: e.target.value})
    }

    render() {
        const {value} = this.state
        return (
            <div className="searchBar--container">
                <div className="searchBar">
                    <input className="searchBar--input" value={value} onChange={this.handleChange} type="text" placeholder="Rechercher un film"/>
                    <div onClick={() => this.props.onSearchClick(value)} className="searchBar--submit">
                        <FontAwesome className="searchIcon" name="search"></FontAwesome>
                    </div>
                </div>                
            </div>
        );
    }
}

export  {Searchbar};