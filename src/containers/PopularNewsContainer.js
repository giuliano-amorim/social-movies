import {connect} from 'react-redux';
import * as actions from '../actions/news';
import PopularNewsList from "./PopularNewsList";

const dispatcherToPropsMapper = (dispatch) => ({
    findPopularNews: () => actions.findPopularNews(dispatch)
})

const stateToPropsMapper = (state) => ({
    popularNews: state.newsReducer.popularNews
})

const PopularNewsContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(PopularNewsList);

export default PopularNewsContainer;