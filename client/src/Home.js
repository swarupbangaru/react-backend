import React, { Component } from "react";

class Home extends React.Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
    .then(users => this.setState({ users }));
    }
    render() {
        return (
            <div className="homepage">
                <h2>Home page is fixed</h2>


                <p>React js helps you to create single page application.......</p>
        {this.state.users.map(user =>
        <div key={user.id}>{user.username}</div>
        )}
            </div>
        );
    }
}

export default Home;