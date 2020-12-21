import * as constants from '../constants/index';

export const findTopNews = dispatch => {
    fetch(constants.TOP_NEWS_URL)
        .then(response => response.json())
        .then(news => dispatch({
            type: constants.FIND_TOP_NEWS,
            news: news
        }))
}

export const findPopularNews = dispatch => {
    fetch(constants.POPULAR_NEWS_URL)
        .then(response => response.json())
        .then(popularNews => dispatch({
            type: constants.FIND_POPULAR_NEWS,
            popularNews: popularNews
        }))
}

export const findExternalReviews = dispatch => {
    fetch(constants.EXTERNAL_REVIEWS_URL)
        .then(response => response.json())
        .then(externalReviews => dispatch({
            type: constants.FIND_EXTERNAL_REVIEWS,
            externalReviews: externalReviews
        }))
}