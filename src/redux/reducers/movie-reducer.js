import * as ActionType from './../constants/constants';

let intinialState = {
    listMovie: [],
    movie: [],
}

const movieReducer = (state = intinialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_MOVIE: {
            state.listMovie = action.listMovie;
            // console.log(state);
            return { ...state }
        }
        case ActionType.GET_DETAIL_MOVIE: {
            state.movie = action.movie
            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default movieReducer;