import React from "react";

const axios = require("axios");

// async function getUser() {
//   try {
//     await axios
//       .get(`https://jsonplaceholder.typicode.com/users`)
//       .then((res) => {
//         var persons = res.data;
//         console.log(persons);
//         return persons;
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }

class Users extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
      this.setState({ persons });
    });
  }

  
  render() {
    return (
      <div>
        <div className="btn-group m-2" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-sm btn-secondary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add User
          </button>
        </div>

        <div>
          <div
            className="modal fade"
            id="exampleModal"
            //tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body"><div>
                  </div>
                  <form>
                    <div>
                      <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Jon Doe"></input>
                      </div>
                      <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                  </form>
                  </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          {this.state.persons.map((person, key) => (
            <div key={key}>
              <div className="card m-2">
                <div className="card-header">{person.name}</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <ul>
                      <li>Name: {person.name}</li>
                      <li>Username: {person.username}</li>
                      <li>Email: {person.email}</li>
                      <li>Phone: {person.phone}</li>
                      <li>Website: {person.website}</li>
                    </ul>
                    <footer className="blockquote-footer">
                      {person.name}
                      <cite title="Source Title"> Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Users;
