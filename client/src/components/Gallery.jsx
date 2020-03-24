import React from 'react';
import axios from 'axios';
import Pic from './Pic.jsx';


class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pics: []
        }
    }
    componentDidMount() {
        axios.get('/reviews')
            .then((data) => {
                console.log(data.data)
                this.setState({
                    pics: this.getAllPics(data.data)
                }, () => console.log('new state->', this.state))
            })
    }
    getAllPics(arr) {
        let picArr = [];
        for (let i = 0; i < arr.length; i++) {
            // let currPic = arr[i].pics
            if (arr[i].pics.length > 0) {
                // let allPics = arr[i].pics.map(())
                for (let j = 0; j < arr[i].pics.length; j++) {
                    console.log('current spot->', j)
                    picArr = picArr.concat(arr[i].pics[j])
                }
            }
        }
        return picArr
    }
    render() {
        console.log(this.state.pics.length)
        return (
            <div className="gallery-wrapper">
                <h3 className="gallery-title">Customer images</h3>
                <div className="image-carousel">
                    <div className="carousel-wrapper">
                        <a role="button">left</a>
                        <ul className="image-list">
                            {this.state.pics.map((pic, index) => (
                                <Pic key={index} url={pic.url} />
                            ))}
                        </ul>
                        <a role="button">right</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery