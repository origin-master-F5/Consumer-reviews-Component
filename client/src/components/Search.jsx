import React from 'react';
import Sort from './Sort.jsx';


class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            cancelDisplay: false
        }
    }
    render() {
        return (
            <div className="search-and-sort-wrapper">
                <div className="search-bar-parent-div">
                    <form className="search-bar-form">
                        <input type="text" className="search-input" placeholder="Search customer reviews" />
                        <button className="cancel-txt-btn"></button>
                        <span className="pipe-division"> | </span>
                        <button className="search-submit" type="submit"></button>
                    </form>
                </div>
                <Sort />
            </div>

        );
    }
}

export default Search