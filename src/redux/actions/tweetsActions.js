import axios from 'axios';

//异步 -- 方法一: thunk
// store.dispatch((dispatch) => {
//     dispatch({type: "FETCH_USERS_START"});
//     axios.get("http://rest.learncode.academy/api/wstern/users")
//         .then((response) => {
//             dispatch({type: "RECEIVE_USERS", payload: response.data});
//         })
//         .catch((err) => {
//             dispatch({type: "FETCH_USERS_ERROR", payload: err});
//         })
// });
//
// //异步 -- 方法二 :promise-middleware
// store.dispatch({
//     type: "FETCH_USERS",
//     payload: axios.get("http://rest.learncode.academy/api/wstern/users")
// });


export function fetchTweets() {
    return function (dispatch) {
        axios.get('http://rest.learncode.academy/api/test123/tweets')
            .then((response) => {
                dispatch({ type: 'FETCH_TWEETS_FULFILLED', payload: response.data });
            })
            .catch((err) => {
                console.info(err);
            });
    };
}

export function addTweet(id, text) {
    return {
        type: 'ADD_TWEET',
        payload: {
            id,
            text
        }
    };
}

export function  updateTweet(id, text) {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text
        }
    };
}

export function  deleteTweet(id) {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id
        }
    };
}

