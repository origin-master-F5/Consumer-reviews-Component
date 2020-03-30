import React from 'react';
import Pic from './Pic.jsx';
import Comment from './Comment.jsx';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';

class Review extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstEight: [],
            firstSixteen: [],
            view: 'eight'
        }
    }
    componentDidMount() {
            this.setState({
                firstEight: this.props.reviews.slice(0, 8),
                firstSixteen: this.props.reviews.slice(0, 16)
            })
    }
    getVerified(arr) {
        // if (clicked) {
            let verifiedsOnly = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].verified) {
                    verifiedsOnly.push(arr[i])
                }
            }
            return verifiedsOnly
        // }
    }
    render() {
        // this.props.sample.firstEight
        let eight = this.props.reviews.slice(0, 8)
        console.log(eight)
        let sixteen = this.props.reviews.slice(0, 16)
            return (
                <div className="review-parent-div">
                    <div className="review-list-info">
                        <span>Showing <strong>1-8</strong> of {this.props.reviews.length} reviews</span>
                    </div>
                    <ul>
                        {eight.map((review, index) => (
                            <ReviewEntry
                                key={index}
                                id={review._id}
                                user={review.user}
                                rating={review.rating}
                                title={review.title}
                                verified={review.verified}
                                posted={review.createdAt}
                                purchased={review.purchasedDate}
                                body={review.body} 
                                pics={review.pics}
                                recommended={review.recommended}
                                helpful={review.helpfulCount}
                                unhelpful={review.unhelpfulCount}
                                comments={review.comments}
                                clickedHelp={review.clickedHelp}
                                clickedReport={review.clickedReport}
                            />
                        ))}
                    </ul>
                </div>
            );
    }
}

export default Review