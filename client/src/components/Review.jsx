import React from 'react';
import Pic from './Pic.jsx';
import Comment from './Comment.jsx';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';

class Review extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cutBy: 0,
            showMore: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.setState({
            cutBy: 8
        })
    }
    handleClick() {
        this.setState({
            cutBy: 16,
            showMore: true
        })
    }
    render() {
        let sample = this.props.reviews.slice(0, this.state.cutBy)

        return (
            <div className="review-parent-div">
                <div className="review-list-info">
                    <span>Showing <strong>1-{sample.length}</strong> of {this.props.reviews.length} reviews</span>
                </div>
                <ul>
                    {
                        this.props.verified
                            ?
                            sample.map((review, index) => {
                                if (review.verified) {
                                    return <ReviewEntry
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
                                }
                            })
                            :
                            sample.map((review, index) => (
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
                            ))
                    }
                </ul>
                {
                    this.state.showMore
                    ?
                    <div className="see-all-reviews-button-container bottom-border-line">
                        <button onClick={this.handleClick} className="see-more-reviews-btn">
                            See All Customer Reviews
                        </button>
                        <a className="write-a-review" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Write a Review
                        </a>
                    </div>
                    :
                    <div className="see-all-reviews-button-container bottom-border-line">
                        <button onClick={this.handleClick} className="see-more-reviews-btn">
                            Show More
                        </button>
                        <a className="write-a-review" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Write a Review
                        </a>
                    </div>
                }
            </div>
        );
    }
}

export default Review