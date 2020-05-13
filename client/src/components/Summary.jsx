import React from 'react';
import { connect } from 'react-redux'



const mapStateToProps = state => {
  return { ...state }
}
class Summary extends React.Component {
  constructor(props) {
        super(props)
      }
  getRateAvg(arr) {
      let rateCount = 0;
      arr.forEach((review) => rateCount += review.rating)
      let avg = Math.round((rateCount / arr.length) * 10) / 10
      return avg.toString()
  }
  getStarAvg(arr) {
    let starCount = 0;
    arr.forEach((review) => starCount += review.rating)
    return Math.round((starCount / (arr.length * 5)) * 100)
}
  getRecommendedPercent(arr) {
    let trueCount = 0;
    arr.forEach((review) => {
      if (review.recommended) {
        trueCount++
      }
  })
    return Math.round((trueCount / arr.length) * 100)
}

        render() {
            return (
                <div className="summary-parent-div">
                    <div className="summary-title">Customer rating</div>
                    <div className="rating-avg-num">{this.getRateAvg(this.props.reviews)}</div>
                    <div>
                        <div className="summary-star-meter">
                            <span style={{width: `${this.getStarAvg(this.props.reviews)}%`}} className="summary-star-meter-filler"></span>
                        </div>
                        <span className="review-count">({this.props.reviews.length} Reviews)</span>
                    </div>
                    <div className="recommend-percent"><span className="percent-bold">{this.getRecommendedPercent(this.props.reviews)}%</span> would recommend to a friend.</div>
                    <a className="see-all-reviews" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">See all customer reviews</a>
                </div>
            );
    }
}

export default connect(
  mapStateToProps
)(Summary)
