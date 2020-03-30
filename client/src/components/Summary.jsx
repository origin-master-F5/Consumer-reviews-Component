import React from 'react';

class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
        render() {
            return (
                <div className="summary-parent-div">
                    <div className="summary-title">Customer rating</div>
                    <div className="rating-avg-num">{this.props.rateAvg}</div>
                    <div>
                        <div className="summary-star-meter">
                            <span style={{width: `${this.props.starAvg}%`}} className="summary-star-meter-filler"></span>
                        </div>
                        <span className="review-count">({this.props.count} Reviews)</span>
                    </div>
                    <div className="recommend-percent"><span className="percent-bold">{this.props.wouldRecommend}%</span> would recommend to a friend.</div>
                    <a className="see-all-reviews" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">See all customer reviews</a>
                </div>
            );
    }   
}

export default Summary