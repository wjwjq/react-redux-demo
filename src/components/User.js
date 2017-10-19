import React from 'react';
import { connect } from 'react-redux';

import { fetchUser, setUserName } from '../redux/actions/userActions';

@connect(store => {
    return {
        user: store.user.user
    };
})


export default class User extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchUser());
    }
    
    changeName(e) {
        this.props.dispatch(setUserName(e.target.value));
    }
    
    

    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>{user.name}</h1>
                <input type="text" defaultValue={user.name}  onChange={this.changeName.bind(this)}/>
            </div>
        );
    }
}
