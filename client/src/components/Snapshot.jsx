import React from 'react';
import Summary from './Summary.jsx'
import BarGraph from './BarGraph.jsx'
import ProConList from './ProConList.jsx'




class Snapshot extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div>
                <Summary />
                <BarGraph />
                <ProConList />
            </div>
        );
    }
}

export default Snapshot