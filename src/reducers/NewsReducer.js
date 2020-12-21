import * as constants from '../constants';

let newsInitialState = {
    news: [],
    popularNews: [],
    externalReviews: []
};

const newsReducer = (state = newsInitialState, action) => {
    switch (action.type) {
        case constants.FIND_TOP_NEWS:
            return {news: action.news.results}
        case constants.FIND_POPULAR_NEWS:
            return {popularNews: action.popularNews.results}
        case constants.FIND_EXTERNAL_REVIEWS:
            return {externalReviews: action.externalReviews.results}

        default:
            return state;
    }
};

export default newsReducer;