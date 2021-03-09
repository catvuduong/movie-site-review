import * as ActionType from './../constants/constants';

let intinialState = {
    listUsers: [],
}

const userReducer = (state = intinialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_USER: {
            state.listUsers = action.listUsers;
            // console.log(state);
            return { ...state }
        }


        default:
            return { ...state }
    }
}

export default userReducer;