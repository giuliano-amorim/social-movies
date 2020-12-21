import React from 'react';
import NavBar from '../components/SearchNavBar';
import {PopularNewsListItem} from '../components/PopularNewsListItem';
export default class PopularNewsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findPopularNews();
    }

    render() {
        if (this.props.popularNews) {
            return (
                <div>
                    <NavBar searchMovie={this.props.searchMovie}/>
                    <div className="container-fluid">
                        <h2>Now Trending</h2>
                        <div className='list-group'>
                            {this.props.popularNews.map((popularNews, index) => {
                                return (
                                    <PopularNewsListItem key={index} popularNews={popularNews}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Loading</h3>
                </div>
            );
        }
    }
}