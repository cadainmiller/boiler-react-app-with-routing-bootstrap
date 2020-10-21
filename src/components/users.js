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
    );
  }
}
export default Users;
