import React, { Component } from 'react';
import Users from './components/Users';
import './App.css';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        age: 23,
        gender: "Male",
        agreed: true
      },
      {
        id: 2,
        name: "Carol Barlow",
        email: "CarolRBarlow@armyspy.com",
        age: 72,
        gender: "Female",
        agreed: true
      },
      {
        id: 3,
        name: "Robert Hicks",
        email: "RobertSHicks@rhyta.com",
        age: 85,
        gender: "Male",
        agreed: true
      },
      {
        id: 4,
        name: "Robert Rollins",
        email: "RobertNRollins@teleworm.us",
        age: 81,
        gender: "Male",
        agreed: true
      },
    ],
    userFullName: '',
    userEmail: '',
    userAge: 0,
    userGender: "Male",

    tempid: 0,
    editName: '',
    editEmail: '',
    editAge: 0,
    editGender: "Male"
  }
  //handleChange for managing state
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  //delete user of that particular id which is clicked
  deleteUser = (id) => {
    this.setState({ users: this.state.users.filter(user => user.id !== id) });
  }

  //validate given information
  validateInfo = (user) => {
    let flag = 0;
    //console.log("indise validate omfo");
    if (user.name == null) {
      alert("Name can't be empty, please enter your Full Name...");
      flag++;
      return false;
    } else {
      let regex = /^[a-zA-Z ]+$/;
      if (!regex.test(user.name)) {
        alert("Please enter valid name. e.g. John Doe.");
        flag++;
        return false;
      }
    }

    if (user.email == null) {
      alert("e-Mail can't be empty, please enter your e-Mail ID...");
      flag++;
      return false;
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(user.email)) {
        alert("Please enter valid email. e.g. johndoe@example.com");
        flag++;
        return false;
      }
    }
    if (user.age == null) {
      alert("Age can't be empty, please enter your age...");
      flag++;
      return false;
    } else {
      if (user.age <= 13) {
        alert("Age must be less greater than 13 & less then 85.");
        flag++;
        return false;
      }
    }

    if (user.gender === "") {
      alert("Gender can't be empty, please enter your gender...");
      flag++;
      return false;
    } else {
      if (user.gender !== "Male" && user.gender !== "Female" && user.gender !== "Others") {
        alert("Gender must be Male or Female.");
        flag++;
        return false;
      }
    }

    if (flag === 0) {
      return true;
    }
  }
  //add user with appropriate information
  addUser = (e) => {
    e.preventDefault();
    if (this.state.users.length === 0) {
      const addNewUser = {
        id: 1,
        name: this.state.userFullName,
        email: this.state.userEmail,
        age: this.state.userAge,
        gender: this.state.userGender,
        agreed: true
      }
      if (this.validateInfo(addNewUser)) {
        //console.log("in if created con");
        this.setState({ users: [...this.state.users, addNewUser] });
        this.setState({
          userFullName: "",
          userEmail: "",
          userAge: 0,
          userGender: "Male"
        });
      } else {
        console.log("User can't be added...");
      }
    } else {
      const addNewUser = {
        id: this.state.users[this.state.users.length - 1].id + 1,
        name: this.state.userFullName,
        email: this.state.userEmail,
        age: this.state.userAge,
        gender: this.state.userGender,
        agreed: true
      }
      if (this.validateInfo(addNewUser)) {
        this.setState({ users: [...this.state.users, addNewUser] });
        this.setState({
          userFullName: "",
          userEmail: "",
          userAge: 0,
          userGender: "Male"
        });
      } else {
        console.log("User can't be added...");
      }
    }
  }

  //update user info
  updateUser = (editUser) => {
    //console.log(editUser);
    this.setState({
      tempid: editUser.id,
      editName: editUser.name,
      editEmail: editUser.email,
      editAge: editUser.age,
      editGender: editUser.gender
    });
  }
  updateInfo = (tempid) => {
    //console.log(tempid);
    let user =
    {
      id: tempid,
      name: this.state.editName,
      email: this.state.editEmail,
      age: this.state.editAge,
      gender: this.state.editGender,
      agreed: true
    }
    if (this.validateInfo(user)) {
      let index = this.state.users.findIndex((item) => item.id === tempid);
      this.state.users.splice(index, 1, user);
      this.setState(this.state);
    } else {
      console.log("user can't be added...");
    }
    //console.log(user);
  }


  render() {
    return (
      <div className="App" >
        <div className="bg-dark text-light">
          <h3 className="text-center p-4">CRUD React App</h3>
        </div>
        <button type="button" className="btn-info text-light btn-block" data-toggle="modal" data-target="#exampleModal">Create User</button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Enter user details:</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Full Name:</label>
                    <input type="text" className="form-control" id="recipient-name" name="userFullName" value={this.state.userFullName} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">e-Mail ID:</label>
                    <input type="email" className="form-control" id="recipient-email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Age:</label>
                    <input type="number" className="form-control" id="recipient-age" min="0" max="99" name="userAge" value={this.state.userAge} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Gender: </label>
                    <select className="ml-2"
                      value={this.state.userGender}
                      onChange={this.handleChange}
                      name="userGender"
                    >
                      <option className="dropdown-item" value="Male">Male</option>
                      <option className="dropdown-item" value="Female">Female</option>
                      <option className="dropdown-item" value="Others">Others</option>
                    </select>
                  </div>
                  <div className="form-group ml-4">
                    <input readOnly={true} className="form-check-input" type="checkbox" checked={true} id="defaultCheck1" name="tandc" />
                    <label className="form-check-label">
                      Agreed to T and C*
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.addUser.bind(this)}>Add User</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModalUpdate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update UserInfo</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Full Name:</label>
                    <input type="text" className="form-control" id="recipient-name-update" name="editName" value={this.state.editName} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">e-Mail ID:</label>
                    <input type="email" className="form-control" id="recipient-email-update" name="editEmail" value={this.state.editEmail} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Age:</label>
                    <input type="number" className="form-control" id="recipient-age-update" min="0" max="99" name="editAge" value={this.state.editAge} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Gender: </label>
                    <select className="ml-2"
                      value={this.state.editGender}
                      onChange={this.handleChange}
                      name="editGender"
                    >
                      <option className="dropdown-item" value="Male">Male</option>
                      <option className="dropdown-item" value="Female">Female</option>
                      <option className="dropdown-item" value="Others">Others</option>
                    </select>
                  </div>
                  <div className="form-group ml-4">
                    <input readOnly={true} className="form-check-input" type="checkbox" checked={true} id="defaultCheck1-update" name="tandc" />
                    <label className="form-check-label">
                      Agreed to T and C*
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.updateInfo.bind(this, this.state.tempid)}>Update UserInfo</button>
              </div>
            </div>
          </div>
        </div>
        <Users className="container" users={this.state.users} deleteUser={this.deleteUser} handleChange={this.handleChange} updateUser={this.updateUser} />
      </div>
    );
  }
}

export default App;
