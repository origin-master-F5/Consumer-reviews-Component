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
            <div className="proconlist-parent-div">
                <h2>hello from inside PROCONLIST</h2>
                <Pros />
                <Cons />
            </div>
        );
    }
}

export default ProConList