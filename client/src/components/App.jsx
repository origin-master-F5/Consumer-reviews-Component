import React from 'react';
import Snapshot from './Snapshot.jsx';
import Gallery from './Gallery.jsx';
import Filter from './Filter.jsx';
import Review from './Review.jsx';

//Review Component will be mapped to the DOM later

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            view: 'down-chevron'
        }
        this.handleViewChange = this.handleViewChange.bind(this)
    }
    componentDidMount() {

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
    render() {
        console.log('acc state -->', this.state.view)
        if (this.state.view === 'down-chevron') {
            return (
                <div className="all-components-wrapper">
                    <div className="reviews-component-parent-div">
                        <div onClick={this.handleViewChange} className="review-accordian bottom-border-line">
                            <span className="reviews-title-text">Reviews</span>
                            <span className={this.state.view}></span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="all-components-wrapper">
                    <div className="reviews-component-parent-div">
                        <div onClick={this.handleViewChange} className="review-accordian">
                            <span className="reviews-title-text">Reviews</span>
                            <span className={this.state.view}></span>
                        </div>
                        <Snapshot />
                        <Gallery />
                        <Filter />
                        <Review />
                    </div>
                </div>
            );
        }
    }
}

export default App
