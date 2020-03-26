import React from 'react';
import axios from 'axios';


class BarGraph extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            fiveStar: 0,
            fourStar: 0,
            threeStar: 0,
            twoStar: 0,
            oneStar: 0,
            totalCount: 0,
            checked: false
        }
    }
    componentDidMount() {
        axios.get('/reviews')
            .then((data) => {
                this.setState({
                    reviews: data.data,
                    fiveStar: this.getRatingCount(data.data, 5),
                    fourStar: this.getRatingCount(data.data, 4),
                    threeStar: this.getRatingCount(data.data, 3),
                    twoStar: this.getRatingCount(data.data, 2),
                    oneStar: this.getRatingCount(data.data, 1),
                    totalCount: data.data.length
                })
            })

    }
    getRatingCount(arr, rating) {
        let rateCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].rating === rating) {
                rateCount++
            }
        }
        return rateCount
    }
    render() {
        return (
            <div className="bargraph-parent-div">
                <div className="rating-bars">
                    <div className="checkbox">
                        <i className="custom-checkbox-input"></i>
                        <input type="checkbox" className="checkbox-filter" />
                    </div>
                    <div className="star-value">
                        <span>5</span>
                        <span className="single-star"></span>
                    </div>
                    <div className="progress-bar-wrapper">
                        <span className="progress-bar"></span>
                    </div>
                    <span>{this.state.fiveStar}</span>
                    

                    {/* <label className="five-graph rate-bar">
                        <input className="five-filter-button" type="checkbox"/>
                        [5-star-width={Math.round((this.state.fiveStar / this.state.totalCount) * 100)}%=====================================]-{this.state.fiveStar}
                    </label>
                    <label className="four-graph rate-bar">
                        <input className="four-filter-button" type="checkbox"/>
                        [4-star-width={Math.round((this.state.fourStar / this.state.totalCount) * 100)}%=====================================]-{this.state.fourStar}
                    </label>
                    <label className="three-graph rate-bar">
                        <input className="three-filter-button" type="checkbox"/>
                        [3-star-width={Math.round((this.state.threeStar / this.state.totalCount) * 100)}%=====================================]-{this.state.threeStar}
                    </label>
                    <label className="two-graph rate-bar">
                        <input className="two-filter-button" type="checkbox"/>
                        [2-star-width={Math.round((this.state.twoStar / this.state.totalCount) * 100)}%=====================================]-{this.state.twoStar}
                    </label>
                    <label className="one-graph rate-bar">
                        <input className="one-filter-button" type="checkbox"/>
                        [1-star-width={Math.round((this.state.oneStar / this.state.totalCount) * 100)}%=====================================]-{this.state.oneStar}
                    </label> */}
                </div>
            </div>
        );
    }
}

export default BarGraph