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
            sortingStar: 0
        }
        this.handleViewChange = this.handleViewChange.bind(this)
        this.changeSort = this.changeSort.bind(this)
        this.switchVerified = this.switchVerified.bind(this)
        this.sortByStar = this.sortByStar.bind(this)
    }
    componentDidMount() {
        axios.get(`${this.state.sort}/${this.state.sku}`)
            .then((data) => {
                this.setState({
                    reviews: data.data
                })
            })

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
        // this.setState({
        //     starSort: true,
        //     sortingStar: star
        // }, () => console.log(`clicked!!! ${star}`, this.state))
        
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
                            sortByStar={(star) => this.sortByStar(star)}
                        />
                        <Gallery sort={this.state.sort} sku={this.state.sku} />
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
