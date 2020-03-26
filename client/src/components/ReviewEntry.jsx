import React from 'react';
import Pic from './Pic.jsx';
import Comment from './Comment.jsx';

class ReviewEntry extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div className="review-entry-wrapper">
                <li>
                    <div className="review-entry-user">
                        <p>{this.props.user}</p>
                    </div>
                    <div className="review-content-wrapper">
                        <div className="review-heading">
                            <div className="review-entry-stars"></div>
                            <h4>{this.props.title}</h4>
                        </div>
                        <div className="review-entry-info">
                            <div className="verified-icon">
                                <button>
                                    <img alt="checkmark" src="https://www.bestbuy.com/~assets/bby/_com/ugc-raas/ugc-common-assets/ugc-badge-verified-check.svg" />
                                    <strong>Verified Purchase</strong>
                                </button>
                                <span className="verified-pipe"> | </span>
                            </div>
                            <div className="info-text">Posted {this.props.posted}. Owned for {this.props.purchased} when reviewed.</div>
                        </div>
                        <div className="review-body">
                            <p>{this.props.body}</p>
                        </div>
                        {/* <Pic /> */}
                        <div>
                            <strong>I would recommend this to a friend</strong>
                        </div>
                        <div className="feedback-row">
                            <div className="help-buttons-wrapper">
                                <button className="helpful-btn">Helpful ({this.props.helpful})</button>
                                <button className="unhelpful-btn">Unhelpful ({this.props.unhelpful})</button>
                                <span> | </span>
                            </div>
                            <div className="report-button-wrapper">
                                <span className="report-btn">Report</span>
                                <span> | </span>
                            </div>
                            <div className="comment-btn-wrapper">
                                <span className="post-comment-btn">Post comment</span>
                                {
                                    this.props.comments.length > 0
                                        ?
                                        <div>
                                            <span> | </span>
                                            <span>Show comment ({this.props.comments.length})</span>
                                        </div>
                                        :
                                        this.props.comments.length > 1
                                            ?
                                            <div>
                                                <span> | </span>
                                                <span>Show comments ({this.props.comments.length})</span>
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