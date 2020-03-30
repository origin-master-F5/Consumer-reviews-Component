import React from 'react';
import Snapshot from './Snapshot.jsx';
import Gallery from './Gallery.jsx';
import Filter from './Filter.jsx';
import Review from './Review.jsx';
import Accordion from './Accordion.jsx';
import axios from 'axios';

//Review Component will be mapped to the DOM later

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            //view will be set to 'up-chevron' for the sake
            //of our demo, but typically it will initially be
            //set to 'down-chevron' and change depending on if the 
            //accordion is selected
            view: 'up-chevron',
            reviews: [],
            sort: '/reviews',
            sku: 1,
            verified: false,
            starSort: false,
            sortingStar: 0,
            rateAvg: 0,
            count: 0,
            wouldRecommend: 0,
            starAvg: 0,
            fiveStarCount: 0,
            fourStarCount: 0,
            threeStarCount: 0,
            twoStarCount: 0,
            oneStarCount: 0,
        }
        this.handleViewChange = this.handleViewChange.bind(this)
        this.changeSort = this.changeSort.bind(this)
        this.switchVerified = this.switchVerified.bind(this)
        this.sortByStar = this.sortByStar.bind(this)
        this.onHashChange = this.onHashChange.bind(this)
        this.getNewItem = this.getNewItem.bind(this)
        this.getRateAvg = this.getRateAvg.bind(this)
        this.getRecommendedPercent = this.getRecommendedPercent.bind(this)
        this.getStarAvg = this.getStarAvg.bind(this)
        this.getRatingCount = this.getRatingCount.bind(this)
    }
    onHashChange() {
        window.addEventListener('hashchange', () => {
            console.log('in reviews component');
            var sku = window.location.hash;
            sku = sku.substring(1);
            if (!isNaN(sku)) {
                this.getNewItem(sku);
            }
        })
    }
    getNewItem(sku) {
        axios.get(`${this.state.sort}/${sku}`)
            .then((data) => {
                this.setState({
                    reviews: data.data,
                    sku: sku,
                    rateAvg: this.getRateAvg(data.data),
                    count: data.data.length,
                    wouldRecommend: this.getRecommendedPercent(data.data),
                    starAvg: this.getStarAvg(data.data),
                    fiveStarCount: this.getRatingCount(data.data, 5),
                    fourStarCount: this.getRatingCount(data.data, 4),
                    threeStarCount: this.getRatingCount(data.data, 3),
                    twoStarCount: this.getRatingCount(data.data, 2),
                    oneStarCount: this.getRatingCount(data.data, 1),
                }, () => console.log('back sku', data.data))
            })
    }
    componentDidMount() {
        axios.get(`${this.state.sort}/${this.state.sku}`)
            .then((data) => {
                this.setState({
                    reviews: data.data,
                    rateAvg: this.getRateAvg(data.data),
                    count: data.data.length,
                    wouldRecommend: this.getRecommendedPercent(data.data),
                    starAvg: this.getStarAvg(data.data),
                    fiveStarCount: this.getRatingCount(data.data, 5),
                    fourStarCount: this.getRatingCount(data.data, 4),
                    threeStarCount: this.getRatingCount(data.data, 3),
                    twoStarCount: this.getRatingCount(data.data, 2),
                    oneStarCount: this.getRatingCount(data.data, 1),
                })
            })
        this.onHashChange()
        this.getNewItem
    }
    handleViewChange() {
        if (this.state.view === 'down-chevron') {
            this.setState({
                view: 'up-chevron'
            })
        } else {
            this.setState({
                view: 'down-chevron'
            })
        }
    }
    changeSort(e) {
        this.setState({
            sort: e.target.value
        }, () => axios.get(`${this.state.sort}/${this.state.sku}`)
            .then((data) => {
                this.setState({
                    reviews: data.data
                })
            }))
    }
    switchVerified() {
        if (this.state.verified) {
            this.setState({
                verified: false
            })
        } else {
            this.setState({
                verified: true
            })
        }
    }
    sortByStar(star) {
        if (this.state.starSort) {
            this.setState({
                starSort: false,
                sortingStar: 0
            }, () => console.log(`clicked!!! ${star}`, this.state))
        } else {
            this.setState({
                starSort: true,
                sortingStar: star
            })
        }
    }
    getRateAvg(arr) {
        let rateCount = 0;
        for (let i = 0; i < arr.length; i++) {
            rateCount += arr[i].rating
        }
        return Math.round((rateCount / arr.length) * 10) / 10
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
    getStarAvg(arr) {
        let starCount = 0;
        for (let i = 0; i < arr.length; i++) {
            starCount += arr[i].rating
        }
        return Math.round((starCount / (arr.length * 5)) * 100)
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
        if (this.state.view === 'down-chevron') {
            return (
                <Accordion view={this.state.view} changeView={() => this.handleViewChange} />
            )
        } else {
            return (
                <div className="all-components-wrapper">
                    <div className="reviews-component-parent-div">
                        {/* <div onClick={this.handleViewChange} className="review-accordion">
                            <span className="reviews-title-text">Reviews</span>
                            <span className={this.state.view}></span>
                        </div> */}
                        <Snapshot
                            sort={this.state.sort}
                            sku={this.state.sku}
                            rateAvg={this.state.rateAvg}
                            count={this.state.count}
                            wouldRecommend={this.state.wouldRecommend}
                            starAvg={this.state.starAvg}
                            fiveStar={this.state.fiveStarCount}
                            fourStar={this.state.fourStarCount}
                            threeStar={this.state.threeStarCount}
                            twoStar={this.state.twoStarCount}
                            oneStar={this.state.oneStarCount}
                        />
                        <Gallery reviews={this.state.reviews} />
                        <Filter
                            switchVerified={() => this.switchVerified}
                            changeSort={() => this.changeSort}
                            reviews={this.state.reviews}
                        />
                        <Review
                            starSort={this.state.starSort}
                            sortingStar={this.state.sortingStar}
                            reviews={this.state.reviews}
                            verified={this.state.verified}
                            sort={this.state.sort}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default App
