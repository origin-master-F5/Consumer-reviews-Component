import React from 'react';
import axios from 'axios';
import Pic from './Pic.jsx';


class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            margin: 0
        }
        this.scrollRight = this.scrollRight.bind(this)
        this.scrollLeft = this.scrollLeft.bind(this)
    }
    componentDidMount() {
        axios.get(`${this.props.sort}/${this.props.sku}`)
            .then((data) => {
                this.setState({
                    reviews: data.data
                })
            })
    }
    scrollRight() {
        this.setState({
            margin: this.state.margin - 648
        })
    }
    scrollLeft() {
        this.setState({
            margin: this.state.margin + 648
        })
    }
    render() {
        return (
            <div className="gallery-wrapper  bottom-border-line">
                <h3 className="gallery-title">Customer images</h3>
                <div className="image-carousel">
                    <div className="carousel-wrapper">
                        {
                            this.state.margin
                                ?
                                <img className="left-caret" src="/images/left-chevron-blue.png" onClick={this.scrollLeft} />
                                :
                                <img className="left-caret-grey" src="/images/left-chevron-grey.png" />
                        }
                        <ul className="image-list">
                            <li className="img-list-item" style={{ marginLeft: `${this.state.margin}px` }}></li>
                            {this.state.reviews.map((review, index) => {
                                if (review.pics.length > 0) {
                                    return review.pics.map((pic) => (
                                        <Pic key={pic._id} id={review._id} url={pic.url} />
                                    ))
                                }
                            })}
                        </ul>
                        {
                            this.state.margin <= -648
                                ?
                                <img className="right-caret-grey" src="/images/right-chevron-grey.png" />
                                :
                                <img className="right-caret" src="/images/right-chevron-blue.png" onClick={this.scrollRight} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery