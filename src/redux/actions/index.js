import * as ActionType from '../constants/constants';
import axios from 'axios';

export const actGetListMovieAPI = () => {
    return dispatch => {
        axios({
            method: "GET",
            url: "https://localhost:5001/movies/get-list",
        })
            .then(result => {
                // console.log(result.data);
                dispatch({
                    type: ActionType.GET_LIST_MOVIE,
                    listMovie: result.data
                });
            },
                () => {
                    // console.log(listMovie);
                }
            )
            .catch(err => {
                console.log(err);
            })
    };
};

export const actGetDetailMovieAPI = id => {
    return dispatch => {
        axios({
            method: "GET",
            url: `https://localhost:5001/movies/get/${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.GET_DETAIL_MOVIE,
                    movie: result.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const actLogin = (user, history) => {
    console.log(user);
    return dispatch => {
        const api = axios.create({ baseURL: 'https://localhost:5001' })
        api.post('https://localhost:5001/users/login', user)
            .then(result => {
                console.log(result);
                if (result.data.role === 0) {
                    localStorage.setItem("Admin", JSON.stringify(result.data));
                    alert("Login success");
                    history.push("/dash-board");
                } else {
                    alert("Login failure, you are not admin");
                }
            })
            .catch(err => {
                console.log(err);
                alert(err.response.data.message);
            })
    }
}
export const actRegister = user => {
    // console.log(user);
    return dispatch => {
        const api = axios.create({ baseURL: "https://localhost:5001" })
        api.post('https://localhost:5001/users/register', user)
            .then(result => {
                alert("Register success");
                console.log(result.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const actGetListUsersAPI = () => {
    return dispatch => {
        axios({
            method: "GET",
            url: 'https://localhost:5001/users/get-list'
        })
            .then(result => {
                dispatch({
                    type: ActionType.GET_LIST_USER,
                    listUsers: result.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const actUpdateUser = (user) => {
    // console.log(user);
    const accessToken = (JSON.parse(localStorage.getItem("Admin"))).accessToken
    // console.log(accessToken)
    return dispatch => {
        const config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        const api = axios.create({ baseURL: "https://localhost:5001" })
        api.put(`https://localhost:5001/users/update/${user.id}`, user, config)
            .then(result => {
                alert("Update success");
                // console.log(result.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

