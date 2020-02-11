import React, { Component } from 'react';
import EachUser from './EachUser';

class Users extends Component {
    render() {
        return (
            <div className="row m-3">
                {this.props.users.map((user) =>
                    <div className="col-md-3 mb-3" key={user.id}>
                        <EachUser className="card-deck"
                            user={user}
                            deleteUser={this.props.deleteUser}
                            handleChange={this.props.handleChange}
                            updateUser={this.props.updateUser}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Users;
