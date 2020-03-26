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
    handleCheck(marker) {
        if (this.state[marker] === 'checkmark') {
            this.setState({
                [marker]: ''
            })
        } else {
            this.setState({
                [marker]: 'checkmark'
            })
        }
    }
    render() {
        return (
            <div className="bargraph-parent-div">
                <div className="rating-bars">
                    <div onClick={() => this.handleCheck('checkFive')} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkFive}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>5</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${this.state.fiveStar}%` }}></span>
                        </div>
                        <span className="star-count-display">{this.state.fiveStar}</span>
                    </div>
                    <div onClick={() => this.handleCheck('checkFour')} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkFour}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>4</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${this.state.fourStar}%` }}></span>
                        </div>
                        <span>{this.state.fourStar}</span>
                    </div>

                    <div onClick={() => this.handleCheck('checkThree')} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkThree}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>3</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${this.state.threeStar}%` }}></span>
                        </div>
                        <span>{this.state.threeStar}</span>
                    </div>

                    <div onClick={() => this.handleCheck('checkTwo')} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkTwo}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>2</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${this.state.twoStar}%` }}></span>
                        </div>
                        <span>{this.state.twoStar}</span>
                    </div>

                    <div onClick={() => this.handleCheck('checkOne')} className="single-rating-bar">
                        <div className="checkbox">
                            <i className={this.state.checkOne}></i>
                            <input type="checkbox" className="checkbox-filter" />
                        </div>
                        <div className="star-value">
                            <span>1</span>
                            <span className="single-star"></span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <span className="progress-bar" style={{ width: `${this.state.oneStar}%` }}></span>
                        </div>
                        <span>{this.state.oneStar}</span>
                    </div>

                </div>
            </div>
        );
    }
}

export default BarGraph