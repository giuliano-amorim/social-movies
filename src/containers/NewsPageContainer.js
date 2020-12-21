import {connect} from 'react-redux';
import * as actions from '../actions/news';
import NewsList from "./NewsList";

const dispatcherToPropsMapper = (dispatch) => ({
    findTopNews: () => actions.findTopNews(dispatch)
})

const stateToPropsMapper = (state) => ({
    news: state.newsReducer.news
})

const NewsPageContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(NewsList);

export default NewsPageContainer;