import React, { Component } from 'react';

class EachUser extends Component {

    render() {
        return (
            <div className="card bg-light">
                <div className="card-body">
                    <h5 className="card-title">{this.props.user.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">e-Mail: {this.props.user.email}</li>
                        <li className="list-group-item">Age: {this.props.user.age}</li>
                        <li className="list-group-item">Gender: {this.props.user.gender}</li>
                        <li className="list-group-item">
                            Agreed to T and C*
                            <input readOnly className="float-right" type="checkbox" checked={this.props.user.agreed} />
                        </li>
                    </ul>
                    <div className="card-footer">
                        <button onClick={this.props.updateUser.bind(this, this.props.user)} type="button" className="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#exampleModalUpdate">Update UserInfo</button>
                        <button onClick={this.props.deleteUser.bind(this, this.props.user.id)} className="btn btn-outline-danger float-right btn-sm" >Delete User</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EachUser;
