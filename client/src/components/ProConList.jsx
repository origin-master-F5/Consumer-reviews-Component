import React from 'react';
import Pros from './Pros.jsx';
import Cons from './Cons.jsx';



class ProConList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div>
                <Pros />
                <Cons />
            </div>
        );
    }
}

export default ProConList