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
            //accodion is selected
            view: 'up-chevron',
            reviews: [],
            sort: '/reviews',
            firstEight: [],
            firstSixteen: [],
            view: 'eight'
        }
        this.handleViewChange = this.handleViewChange.bind(this)
        this.changeSort = this.changeSort.bind(this)
    }
    componentDidMount() {
        axios.get(this.state.sort)
            .then((data) => {
                this.setState({
                    reviews: data.data,
                    firstEight: data.data.slice(0, 8),
                    firstSixteen: data.data.slice(0, 16)
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
        }, () => axios.get(this.state.sort)
            .then((data) => {
                this.setState({
                    reviews: data.data,
                    firstEight: data.data.slice(0, 8),
                    firstSixteen: data.data.slice(0, 16)
                })
            }))
    }
    render() {
        console.log('acc state -->', this.state.view)
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
                        <Snapshot />
                        <Gallery />
                        <Filter changeSort={() => this.changeSort} />
                        <Review reviews={this.state.reviews} sample={this.state} sort={this.state.sort} />
                    </div>
                </div>
            );
        }
    }
}

export default App
