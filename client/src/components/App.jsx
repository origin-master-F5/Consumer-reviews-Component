import React from 'react';
import Snapshot from './Snapshot.jsx';
import Gallery from './Gallery.jsx';
import Filter from './Filter.jsx';
import Review from './Review.jsx';
import axios from 'axios';
import { connect } from 'react-redux'
import { getReviews, changeSku } from '../actions/index';


const mapStateToProps = state => {
  return { ...state }
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.onHashChange = this.onHashChange.bind(this)
        this.getNewItem = this.getNewItem.bind(this)
    }
    onHashChange() {
        window.addEventListener('hashchange', () => {
            var sku = window.location.hash.substring(1);
            if (!isNaN(sku)) {
                this.getNewItem(sku);
            }
        })
    }
    getNewItem(sku) {
      this.props.changeSku({ sku })
      this.props.getReviews()
    }
    componentDidMount() {
      this.props.getReviews()
        this.onHashChange()
        this.getNewItem
    }

    render() {
      return (
          <div className="all-components-wrapper">
              <div className="reviews-component-parent-div">
                  <Snapshot />
                  <Gallery />
                  <Filter />
                  <Review />
              </div>
          </div>
      );
    }
}

export default connect(
  mapStateToProps,
  { getReviews, changeSku }
)(App)
