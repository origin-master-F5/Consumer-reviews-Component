import React from 'react';
import { connect } from 'react-redux'
import { sortByStar } from '../actions/index';
import RatingBar from './RatingBar.jsx'

const mapStateToProps = state => {
  return { ...state }
}


class BarGraph extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            checkOne: '',
            checkTwo: '',
            checkThree: '',
            checkFour: '',
            checkFive: ''
        }
        this.handleCheck = this.handleCheck.bind(this)
    }
    getRatingCount(arr, rating) {
      let rateCount = 0;
      arr.forEach((review) => {
        if (review.rating === rating) {
          rateCount++
        }
      })
      return rateCount
  }
    handleCheck(marker, star) {
        if (this.state[marker] === 'checkmark') {
            this.setState({
                [marker]: ''
            })
        } else {
            this.setState({
                [marker]: 'checkmark'
            })
        }

        if (this.props.starSort) {
          this.props.sortByStar({
              starSort: false,
              sortingStar: 0
          })
      } else {
          this.props.sortByStar({
              starSort: true,
              sortingStar: star
          })
      }
    }
    render() {

        return (
            <div className="bargraph-parent-div">
                <div className="rating-bars">
                  <RatingBar
                    handleCheck={() => this.handleCheck('checkFive', 5)}
                    checkType={this.state.checkFive}
                    ratingCount={this.getRatingCount(this.props.reviews, 5)}
                    count={this.props.reviews.length}
                    ratingNum={5}
                  />
                  <RatingBar
                    handleCheck={() => this.handleCheck('checkFour', 4)}
                    checkType={this.state.checkFour}
                    ratingCount={this.getRatingCount(this.props.reviews, 4)}
                    count={this.props.reviews.length}
                    ratingNum={4}
                  />
                  <RatingBar
                    handleCheck={() => this.handleCheck('checkThree', 3)}
                    checkType={this.state.checkThree}
                    ratingCount={this.getRatingCount(this.props.reviews, 3)}
                    count={this.props.reviews.length}
                    ratingNum={3}
                  />
                  <RatingBar
                    handleCheck={() => this.handleCheck('checkTwo', 2)}
                    checkType={this.state.checkTwo}
                    ratingCount={this.getRatingCount(this.props.reviews, 2)}
                    count={this.props.reviews.length}
                    ratingNum={2}
                  />
                  <RatingBar
                    handleCheck={() => this.handleCheck('checkOne', 1)}
                    checkType={this.state.checkOne}
                    ratingCount={this.getRatingCount(this.props.reviews, 1)}
                    count={this.props.reviews.length}
                    ratingNum={1}
                  />
                </div>
            </div>
        );
    }
}

export default connect(
  mapStateToProps,
  { sortByStar }
)(BarGraph)