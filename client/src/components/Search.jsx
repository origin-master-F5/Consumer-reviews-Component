import React from 'react';
import Sort from './Sort.jsx';

// cancelDisplay: false,
// pipe: 'pipe-division-no-cancel'
class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            cancelDisplay: true
        }
    }
    render() {
        return (
            <div className="search-and-sort-wrapper">
                <div className="search-bar-parent-div">
                    <form className="search-bar-form">
                        <input type="text" className="search-input" placeholder="Search customer reviews" />
                        {
                            this.state.cancelDisplay
                                ?
                                <button className="cancel-txt-btn">
                                    <img alt="cancel button" className="cancel-img" src="https://bby-reviews-images.s3-us-west-1.amazonaws.com/cancel-btn.png" />
                                </button>
                                :
                                <button className="cancel-filler">-</button>
                        }
                        <span className="pipe-division"> | </span>
                        <button className="search-submit" type="submit">
                            <img alt="search button" className="search-img" src="https://bby-reviews-images.s3-us-west-1.amazonaws.com/search-btn.png" />
                        </button>
                    </form>
                </div>
                <Sort changeSort={this.props.changeSort}/>
            </div>

        );
    }
}

export default Search