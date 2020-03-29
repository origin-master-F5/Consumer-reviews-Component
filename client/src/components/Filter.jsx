import React from 'react';
import Verified from './Verified.jsx';
import Search from './Search.jsx';


class Filter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div className="filter-parent-div bottom-border-line">
                <Verified reviews={this.props.reviews}/>
                <Search changeSort={this.props.changeSort}/>
            </div>
        );
    }
}

export default Filter

