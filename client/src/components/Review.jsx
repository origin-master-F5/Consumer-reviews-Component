import React from 'react';
import Pic from './Pic.jsx';
import Comment from './Comment.jsx';

class Review extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div>
                <Pic />
                <Comment />
            </div>
        );
    }
}

export default Review