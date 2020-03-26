import React from 'react';
import Sort from './Sort.jsx';


class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: ''
        }
    }
    render() {
        return (
            <div className="search-and-sort-wrapper">
                <div className="search-bar-parent-div">
                    <form>
                        <input type="text" className="search-input" placeholder="Search customer reviews" />
                        <button className="cancel-text-btn">
                            <svg viewBox="0 0 100 100"></svg>
                        </button>
                        <span className="pipe-division"></span>
                        <button className="search-submit" type="submit">
                            <svg viewBox="0 0 100 100"></svg>
                        </button>
                    </form>
                </div>
                <Sort />
            </div>

        );
    }
}

export default Search