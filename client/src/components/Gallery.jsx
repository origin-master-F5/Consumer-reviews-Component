import React from 'react';
import axios from 'axios';
import Pic from './Pic.jsx';


class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: []
        }
    }
    componentDidMount() {
        axios.get('/reviews')
            .then((data) => {
                this.setState({
                    reviews: data.data
                })
            })
    }
    render() {
        return (
            <div className="gallery-wrapper  bottom-border-line">
                <h3 className="gallery-title">Customer images</h3>
                <div className="image-carousel">
                    <div className="carousel-wrapper">
                        <img className="left-caret" src="/images/left-chevron-blue.png" />
                        <ul className="image-list">
                            {this.state.reviews.map((review, index) => {
                                if (review.pics.length > 0) {
                                   return review.pics.map((pic) => (
                                        <Pic key={pic._id} id={review._id} url={pic.url} />
                                    ))
                                }
                            })}
                        </ul>
                        <img className="right-caret" src="/images/right-chevron-blue.png" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery