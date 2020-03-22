import React from 'react';


class Summary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div className="summary-parent-div">
                {/* <h2>hello from inside SUMMARY</h2> */}
                <div className="summary-title">Customer rating</div>
                <div className="rating-avg-num">4.7</div>
                <div className="summary-star-meter">*****</div>
                <div className="review-count">(930 Reviews)</div>
                <div className="recommend-percent"><span className="percent-bold">97%</span> would recommend to a friend.</div>
                <div className="see-all-reviews">See all customer reviews</div>
            </div>
        );
    }
}

export default Summary