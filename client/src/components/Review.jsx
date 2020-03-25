import React from 'react';
import Pic from './Pic.jsx';
import Comment from './Comment.jsx';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';

class Review extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            firstEight: [],
            firstSixteen: [],
            view: 'eight'
        }
    }
    componentDidMount() {
        axios.get('/reviews')
            .then((data) => {
                this.setState({
                    reviews: data.data,
                    firstEight: data.data.slice(0, 8),
                    firstSixteen: data.data.slice(0, 16)
                })
                console.log(this.state)
            })
    }

    render() {
        return (
            <div className="review-parent-div">
                <div className="review-list-info">
                    <span>Showing <strong>1-8</strong> of {this.state.reviews.length} reviews</span>
                </div>
                <ul>
                    {this.state.firstEight.map((review, index) => (
                        <ReviewEntry 
                            key={index} 
                            id={review._id} 
                            user={review.user} 
                            rating={review.rating} 
                            title={review.title} 
                            verified={review.verified} 
                            posted={review.createdAt} 
                            purchased={review.purchasedDate} 
                            body={review.body} pics={review.pics} 
                            recommended={review.recommended} 
                            helpful={review.helpfulCount} 
                            unhelpful={review.unhelpfulCount} 
                            comments={review.comments}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Review