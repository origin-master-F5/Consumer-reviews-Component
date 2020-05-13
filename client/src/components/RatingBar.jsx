import React from 'react';


const RatingBar = (props) => (
  <div onClick={props.handleCheck} className="single-rating-bar">
    <div className="checkbox">
        <i className={props.checkType}></i>
        <input type="checkbox" className="checkbox-filter" />
    </div>
    <div className="star-value">
<span>{props.ratingNum}</span>
        <span className="single-star"></span>
    </div>
    <div className="progress-bar-wrapper">
        <span className="progress-bar" style={{ width: `${Math.round((props.ratingCount /  (props.count)) * 100)}%` }}></span>
    </div>
    <span className="star-count-display">{props.ratingCount}</span>
  </div>
);

export default RatingBar