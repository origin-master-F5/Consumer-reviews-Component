import React from 'react';
import Verified from './Verified.jsx';
import Search from './Search.jsx';


class Filter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="filter-parent-div bottom-border-line">
                <Verified />
                <Search />
            </div>
        );
    }
}

export default Filter

