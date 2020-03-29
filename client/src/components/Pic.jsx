import React from 'react';


const Pic = (props) => (
        <li className="img-list-item">
            <button className="image-thumbnail-btn">
                <img alt="customer image" className="image-thumbnail" src={props.url} />
            </button>
        </li>
);

export default Pic