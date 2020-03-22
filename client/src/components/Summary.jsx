import React from 'react';
import axios from 'axios';

class Summary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allReviews: [],
            rateAvg: 0,
            count: 0,
            wouldRecommend: 0
        }
    }
    componentDidMount() {
        axios.get('/reviews')
            .then((data) => {
                this.setState({
                    allReviews: data.data,
                    rateAvg: this.getRateAvg(data.data),
                    count: data.data.length,
                    wouldRecommend: this.getRecommendedPercent(data.data)
                })
            })
        }
        getRateAvg(arr) {
                let rateCount = 0;
                for (let i = 0; i < arr.length; i++) {
                    rateCount += arr[i].rating
                }
                return  Math.round((rateCount / arr.length) * 10) / 10
        }
        getRecommendedPercent(arr) {
            let trueCount = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].recommended) {
                    trueCount++
                }
            }
            return Math.round((trueCount / arr.length) * 100)
        }
        render() {
            return (
                <div className="summary-parent-div">
                    {/* <h2>hello from inside SUMMARY</h2> */}
                    <div className="summary-title">Customer rating</div>
                    <div className="rating-avg-num">{this.state.rateAvg}</div>
                    <div className="summary-star-meter">*****</div>
                    <div className="review-count">({this.state.count} Reviews)</div>
                    <div className="recommend-percent"><span className="percent-bold">{this.state.wouldRecommend}%</span> would recommend to a friend.</div>
                    <div className="see-all-reviews">See all customer reviews</div>
                </div>
            );
    }   
}

export default Summary