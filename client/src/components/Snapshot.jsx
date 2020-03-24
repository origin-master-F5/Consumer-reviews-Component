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
            <div className="snapshot-parent-div">
                <Summary />
                <div className="snapshot-spacer"><p> </p></div>
                <BarGraph />
                <div className="snapshot-spacer"><p> </p></div>
                <ProConList />
            </div>
        );
    }
}

export default Snapshot