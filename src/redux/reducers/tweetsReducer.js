//常规thunk对应的 reducer

const initialState = {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null
};
/*export default function tweetsReducer(state = initialState, action) => {
 switch (action.type){
 case "FETCH_USERS_START": {
 return {...state, fetch: true};
 }
 case "FETCH_USER_ERROR": {
 return {...state, fetch: false, error: action.payload};
 }
 case "RECEIVE_USERS": {
 return {
 ...state,
 fetch: false,
 fetched: true,
 users: action.payload
 };
 }
 }

 return state;
 };*/

//redux-promise-middleware 对应的reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_TWEETS": {
            return { ...state, fetch: true };
        }
        case "FETCH_TWEETS_REJECTED": {
            return { ...state, fetch: false, error: action.payload };
        }
        case "FETCH_TWEETS_FULFILLED": {
            return {
                ...state,
                fetch: false,
                fetched: true,
                tweets: action.payload
            };
        }
        case "ADD_TWEET": {
            return {
                ...state,
                tweets: [...state.tweets, action.payload]
            };
        }
        case "UPDATE_TWEET": {
            const { id } = action.payload;
            const newTweets = [...state.tweets];
            const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id);
            newTweets[tweetToUpdate] = action.payload;

            return {
                ...state,
                tweets: newTweets
            };
        }
        case "DELETE_TWEET": {
            return {
                ...state,
                tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
            };
        }
    }
    return state;
}
