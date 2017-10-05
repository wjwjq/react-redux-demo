const initialState = {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null
};

//redux-promise-middleware 对应的reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_TWEETS': {
            return { ...state, fetch: true };
        }
        case 'FETCH_TWEETS_REJECTED': {
            return { ...state, fetch: false, error: action.payload };
        }
        case 'FETCH_TWEETS_FULFILLED': {
            return {
                ...state,
                fetch: false,
                fetched: true,
                tweets: action.payload
            };
        }
        case 'ADD_TWEET': {
            return {
                ...state,
                tweets: [...state.tweets, action.payload]
            };
        }
        case 'UPDATE_TWEET': {
            const { id } = action.payload;
            const newTweets = [...state.tweets];
            const tweetToUpdate = newTweets.findIndex((tweet) => tweet.id === id);
            newTweets[tweetToUpdate] = action.payload;

            return {
                ...state,
                tweets: newTweets
            };
        }
        case 'DELETE_TWEET': {
            return {
                ...state,
                tweets: state.tweets.filter((tweet) => tweet.id !== action.payload)
            };
        }
    }
    return state;
}
