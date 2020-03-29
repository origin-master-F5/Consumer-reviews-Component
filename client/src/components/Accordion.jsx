import React from 'react'

const Accordion = (props) => (
    <div className="all-components-wrapper">
        <div className="reviews-component-parent-div">
            <div onClick={props.changeView()} className="review-accordion bottom-border-line">
                <span className="reviews-title-text">Reviews</span>
                <span className={props.view}></span>
            </div>
        </div>
    </div>
)

export default Accordion