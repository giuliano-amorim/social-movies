import {connect} from 'react-redux';
import * as actions from '../actions/news';
import ExternalReviewsList from "./ExternalReviewsList";

const dispatcherToPropsMapper = (dispatch) => ({
    findExternalReviews: () => actions.findExternalReviews(dispatch)
})

const stateToPropsMapper = (state) => ({
    externalReviews: state.newsReducer.externalReviews
})

const ExternalReviewsContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(ExternalReviewsList);

export default ExternalReviewsContainer;