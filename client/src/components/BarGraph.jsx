import React from 'react';


class BarGraph extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
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
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].rating === rating) {
                rateCount++
            }
        }
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
        this.props.sortByStar(star)
    }
    render() {
        return (
            <div className="bargraph-parent-div">
                <div className="rating-bars">
                    <div onClick={() => this.handleCheck('checkFive', 5)} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkFive}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>5</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${Math.round((this.props.fiveStar / (this.props.count)) * 100)}%` }}></span>
                        </div>
                        <span className="star-count-display">{this.props.fiveStar}</span>
                    </div>
                    <div onClick={() => this.handleCheck('checkFour', 4)} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkFour}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>4</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${Math.round((this.props.fourStar / (this.props.count)) * 100)}%` }}></span>
                        </div>
                        <span>{this.props.fourStar}</span>
                    </div>

                    <div onClick={() => this.handleCheck('checkThree', 3)} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkThree}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>3</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${Math.round((this.props.threeStar / (this.props.count)) * 100)}%` }}></span>
                        </div>
                        <span>{this.props.threeStar}</span>
                    </div>

                    <div onClick={() => this.handleCheck('checkTwo', 2)} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkTwo}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>2</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${Math.round((this.props.twoStar / (this.props.count)) * 100)}%` }}></span>
                        </div>
                        <span>{this.props.twoStar}</span>
                    </div>

                    <div onClick={() => this.handleCheck('checkOne', 1)} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkOne}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>1</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${Math.round((this.props.oneStar / (this.props.count)) * 100)}%` }}></span>
                        </div>
                        <span>{this.props.oneStar}</span>
                    </div>

                </div>
            </div>
        );
    }
}

export default BarGraph