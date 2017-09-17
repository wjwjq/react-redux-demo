import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTweets, addTweet } from "../redux/actions/tweetsActions";

import { getRandomId } from "../config/utils";

@connect((store) => {
    return {
        tweets: store.tweets.tweets
    };
})

export default class Tweets extends Component {
    constructor() {
        super();
        this.state = { id: "", inputVal: "" };
    }
    fetchTweets() {
        this.props.dispatch(fetchTweets());
    }

    addTweet(e) {
        this.setState({ inputVal: e.target.value });
    }
    handleEnter(e) {
        if (e.keyCode === 13) {
            const id = getRandomId();
            const text = this.state.inputVal;
            this.props.dispatch(addTweet(id, text));
            e.target.value = "";
        }
    }
    render() {
        const { tweets } = this.props;
        if (!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>;
        }
        
        let mappedTweets = tweets.map((tweet,idx) => <li key={idx}><span>{typeof tweet.text === "object" ? tweet.text.tweet : tweet.text}</span></li>);
        
        return (
            <div>
                <ul>
                    {mappedTweets}
                </ul>
                <input
                    type="text"
                    defaultValue={this.state.inputVal}
                    onChange={this.addTweet.bind(this)}
                    onKeyUp={this.handleEnter.bind(this)}
                />
            </div>
        );
    }
}