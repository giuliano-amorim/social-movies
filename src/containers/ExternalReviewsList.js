import React from 'react';
import NavBar from '../components/SearchNavBar';
import {ExternalReviewsListItem} from '../components/ExternalReviewsListItem';
export default class ExternalReviewsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findExternalReviews();
    }

    render() {
        if (this.props.externalReviews) {
            return (
                <div>
                    <NavBar searchMovie={this.props.searchMovie}/>
                    <div className="container-fluid">
                        {/*<h2>Top News</h2>*/}
                        <div className='list-group'>
                            {this.props.externalReviews.map((externalReview, index) => {
                                return (
                                    <ExternalReviewsListItem key={index} externalReview={externalReview}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h3>Loading</h3>
                </div>
            );
        }
    }
}