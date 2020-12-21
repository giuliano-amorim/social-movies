import React from 'react';
import NavBar from '../components/SearchNavBar';
import {NewsListItem} from '../components/NewsListItem';
export default class NewsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findTopNews();
    }

    render() {
        if (this.props.news) {
            return (
                <div>
                    <NavBar searchMovie={this.props.searchMovie}/>
                    <div className="container-fluid">
                        {/*<h2>Top News</h2>*/}
                        <div className='list-group'>
                            {this.props.news.map((news, index) => {
                                return (
                                    <NewsListItem key={index} news={news}/>
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