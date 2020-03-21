import React from 'react';
import Verified from './Verified.jsx';
import Search from './Search.jsx';
import Sort from './Sort.jsx';


class Filter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div>
                <Verified />
                <Search />
                <Sort />
            </div>
        );
    }
}

export default Filter