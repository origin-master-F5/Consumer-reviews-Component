import React from 'react';


class Sort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: '/reviews'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            sort: e.target.value
        })
    }
    render() {
        return (
            <div className="sort-parent-div">
                <label className="sort-title"><b>Sort by</b></label>
                <div className="dropdown-wrapper">
                    <select className="sort-dropdown" onChange={this.props.changeSort()}>
                        <option value="/reviews" >Most Relevant</option>
                        <option value="/reviews/help" >Most Helpful</option>
                        <option value="/reviews/recent" >Most Recent</option>
                        <option value="/reviews/oldest" >Oldest</option>
                        <option value="/reviews/highestRating" >Highest Rating</option>
                        <option value="/reviews/lowestRating" >Lowest Rating</option>
                    </select>
                </div>
                <button className="info-modal-btn">i</button>
            </div>
        );
    }
}

export default Sort