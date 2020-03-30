import React from 'react';


class Verified extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            switched: false,
        }
    }

    findVerifiedCount(arr) {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].verified) {
                count++
            }
        }
        return count
    }
    render() {
        return (
            <div className="verified-parent-div">
                <label className="switch">
                    <input type="checkbox" className="toggle-body" onChange={this.props.switchVerified()}/>
                    <span className="slider"></span>
                </label>
                <div className="verified-switch-text">
                    <p className="switch-text-p">Show only <b>Verified Purchases</b> ({this.findVerifiedCount(this.props.reviews)})</p>
                    <a className="learn-more" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Learn more</a>
                </div>
            </div>
        );
    }
}

export default Verified