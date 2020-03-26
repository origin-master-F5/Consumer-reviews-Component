import React from 'react';


class Sort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: '/reviews'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState({
            sort: e.target.value
        })
    }
    render() {
        console.log(this.state.sort)
        return (
            <div className="sort-parent-div">
                <label><b>Sort by</b></label>
                <select onChange={this.handleClick}>
                    <option value="/reviews" >Most Relevant</option>
                    <option value="/reviews/help" >Most Helpful</option>
                    <option value="/reviews/recent" >Most Recent</option>
                    <option value="/reviews/oldest" >Oldest</option>
                    <option value="/reviews/highestRating" >Highest Rating</option>
                    <option value="/reviews/lowestRating" >Lowest Rating</option>
                </select>
                <button className="info-modal">i</button>
            </div>
        );
    }
}

export default Sort