import React from 'react';
import Snapshot from './Snapshot.jsx';
import Gallery from './Gallery.jsx';
import Filter from './Filter.jsx';
import Review from './Review.jsx';

//Review Component will be mapped to the DOM later

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {}
    }
    render() {
        return (
            <div className="reviews-accordion">
                <h2>Reviews</h2>
                <Snapshot />
                <Gallery />
                <Filter />
                <Review />
            </div>
        );
    }
}

export default App
