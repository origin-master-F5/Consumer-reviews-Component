import React from 'react';
import Pic from './Pic.jsx';
import Comment from './Comment.jsx';
import moment from 'moment'

class ReviewEntry extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        let purchased;
        if (this.props.purchased) {
            purchased = this.props.purchased.substring(0, 10);
        }
        purchased = '2020-02-03'
        let posted = this.props.posted.substring(0, 10);

        return (
            <div className="review-entry-wrapper bottom-border-line">
                <li>
                    <div className="review-entry-user-wrapper">
                        <p className="review-entry-user">{this.props.user}</p>
                    </div>
                    <div className="review-content-wrapper">
                        <div className="review-heading">
                            <div className="review-entry-stars">
                                <img className="single-review-stars" src={`https://bby-reviews-images.s3-us-west-1.amazonaws.com/${this.props.rating}-star.png`}/>
                            </div>
                            <h4 className="review-entry-title">{this.props.title}</h4>
                        </div>
                        {
                            this.props.verified
                                ?
                                <div className="review-entry-info">
                                    <div className="verified-icon-wrapper">
                                        <button className="verified-btn">
                                            <img className="v-checkmark" alt="checkmark" src="https://www.bestbuy.com/~assets/bby/_com/ugc-raas/ugc-common-assets/ugc-badge-verified-check.svg" />
                                            <strong className="v-btn-text">Verified Purchase</strong>
                                        </button>
                                    </div>
                                    <div className="info-text">| Posted {moment(posted, "YYYYMMDD").fromNow()}. Owned for {moment(posted, "YYYYMMDD").from(purchased, "YYYYMMDD")} when reviewed.</div>
                                </div>
                                :
                                <div className="review-entry-info">
                                    <div className="info-text">Posted {moment(posted, "YYYYMMDD").fromNow()}.</div>
                                </div>
                        }
                        <div className="review-body">
                            <p>{this.props.body}</p>
                        </div>
                        <ul>
                            {
                                this.props.pics.length > 0
                                    ?
                                    this.props.pics.map((pic, index) => (
                                        <Pic key={index} id={this.props.id} url={pic.url} />
                                    ))
                                    :
                                    <span></span>
                            }

                        </ul>
                        {
                            this.props.recommended
                                ?
                                <div className="recommended-wrapper">
                                    <span className="dark-check-mark"></span>
                                    <strong className="true-recommend-text">I would recommend this to a friend</strong>
                                </div>
                                :
                                <div className="recommended-wrapper">
                                    <span className="dark-cancel-mark"></span>
                                    <strong className="false-recommend-text">No, I would not recommend this to a friend</strong>
                                </div>

                        }
                        <div className="feedback-row">
                            <div className="help-buttons-wrapper">
                                <button className="helpful-btn">Helpful ({this.props.helpful})</button>
                                <button className="unhelpful-btn">Unhelpful ({this.props.unhelpful})</button>
                            </div>
                            <span className="feedback-pipe"> | </span>
                            <div className="report-button-wrapper">
                                <button className="report-btn">Report</button>
                                <span className="feedback-pipe"> | </span>
                            </div>
                            <div className="comment-btn-wrapper">
                                <button className="post-comment-btn">Post comment</button>
                                {
                                    this.props.comments.length > 0
                                        ?
                                        <div className="show-comments-wrapper">
                                            <span className="feedback-pipe"> | </span>
                                            <button className="show-comment">Show comment ({this.props.comments.length})</button>
                                        </div>
                                        :
                                        <span></span>
                                }
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default ReviewEntry