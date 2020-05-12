import React from 'react';
import { connect } from 'react-redux'
import { switchVerified } from '../actions/index';


const mapStateToProps = state => {
  return { ...state }
}

class Verified extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            switched: false,
        }
    this.handleSwitch = this.handleSwitch.bind(this)

    }
    handleSwitch() {
      if (this.props.verified) {
          this.props.switchVerified({
              verified: false
          })
      } else {
          this.props.switchVerified({
              verified: true
          })
      }
  }
    findVerifiedCount(arr) {
        let count = 0
        arr.forEach((review) => {
          if (review.verified) {
            count++
          }
        })
        return count
    }
    render() {
        return (
            <div className="verified-parent-div">
                <label className="switch">
                    <input type="checkbox" className="toggle-body" onChange={this.handleSwitch}/>
                    <span className="slider"></span>
                </label>
                <div className="verified-switch-text">
                    <p className="switch-text-p">Show only <b>Verified Purchases</b> ({this.findVerifiedCount(this.props.reviews)})</p>
                    <a className="learn-more" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Learn more</a>
                </div>
            </div>
        );
    }
}

export default connect(
  mapStateToProps,
  { switchVerified }
)(Verified)
