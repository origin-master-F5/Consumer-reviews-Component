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
            <div>
                <Verified />
                <Search />
            </div>
        );
    }
}

export default Filter