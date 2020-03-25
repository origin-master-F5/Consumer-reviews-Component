import React from 'react';
import axios from 'axios';


class Verified extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            switched: false,
            verifiedCount: 0
        }
    }
    componentDidMount() {
        axios.get('/reviews')
            .then((data) => {
                this.setState({
                    verifiedCount: this.findVerifiedCount(data.data)
                }, () => console.log(this.state))
            })
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
            <div>
                <div className="switch">switch</div>
                <div>
                    <p>Show only <b>Verified Purchases</b> ({this.state.verifiedCount})</p>
                    <a className="learn-more" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Learn more</a>
                </div>
            </div>
        );
    }
}

export default Verified