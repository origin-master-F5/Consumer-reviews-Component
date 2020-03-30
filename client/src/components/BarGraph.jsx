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
            checkOne: '',
            checkTwo: '',
            checkThree: '',
            checkFour: '',
            checkFive: ''
        }
        this.handleCheck = this.handleCheck.bind(this)
    }
    componentDidMount() {
        axios.get(`${this.props.sort}/${this.props.sku}`)
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
                            <span className="progress-bar" style={{ width: `${Math.round((this.state.fiveStar / (this.state.totalCount)) * 100)}%` }}></span>
                        </div>
                        <span className="star-count-display">{this.state.fiveStar}</span>
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
                            <span className="progress-bar" style={{ width: `${Math.round((this.state.fourStar / (this.state.totalCount)) * 100)}%` }}></span>
                        </div>
                        <span>{this.state.fourStar}</span>
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
                            <span className="progress-bar" style={{ width: `${Math.round((this.state.threeStar / (this.state.totalCount)) * 100)}%` }}></span>
                        </div>
                        <span>{this.state.threeStar}</span>
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
                            <span className="progress-bar" style={{ width: `${Math.round((this.state.twoStar / (this.state.totalCount)) * 100)}%` }}></span>
                        </div>
                        <span>{this.state.twoStar}</span>
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
                            <span className="progress-bar" style={{ width: `${Math.round((this.state.oneStar / (this.state.totalCount)) * 100)}%` }}></span>
                        </div>
                        <span>{this.state.oneStar}</span>
                    </div>

                </div>
            </div>
        );
    }
}

export default BarGraph