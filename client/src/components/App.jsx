import React from 'react';
import Snapshot from './Snapshot.jsx';
import Gallery from './Gallery.jsx';
import Filter from './Filter.jsx';
import Review from './Review.jsx';
import Accordion from './Accordion.jsx';
import axios from 'axios';
import { connect } from 'react-redux'
import { getReviews } from '../actions/index';


const mapStateToProps = state => {
  return { ...state }
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            //view will be set to 'up-chevron' for the sake
            //of our demo, but typically it will initially be
            //set to 'down-chevron' and change depending on if the
            //accordion is selected
            view: 'up-chevron',
            reviews: [], //added to redux
            sort: '/reviews', //added to redux
            sku: 1, //added to redux
            verified: false, //added to redux
            starSort: false, //added to redux
            sortingStar: 0, //added to redux
        }
        this.handleViewChange = this.handleViewChange.bind(this)
        this.changeSort = this.changeSort.bind(this)
        this.onHashChange = this.onHashChange.bind(this)
        this.getNewItem = this.getNewItem.bind(this)
    }
    onHashChange() {
        window.addEventListener('hashchange', () => {
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
                })
            })
    }
    componentDidMount() {
      this.props.getReviews().then(() => console.log(this.props))
        axios.get(`${this.state.sort}/${this.state.sku}`)
            .then((data) => {
                this.setState({
                    reviews: data.data,
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
                        <Snapshot />
                        <Gallery reviews={this.state.reviews} />
                        <Filter
                            changeSort={() => this.changeSort}
                        />
                        <Review />
                    </div>
                </div>
            );
        }
    }
}

export default connect(
  mapStateToProps,
  { getReviews }
)(App)
