import React from "react";

const axios = require("axios");

async function getUser() {
  try {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        console.log(persons);
      });
  } catch (error) {
    console.error(error);
  }
}
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };
    getUser();
  }

  render() {
    return <div className="p-4">
      <h1>Users</h1>;
      <h3>Name: {this.state.name}</h3>
      <h3>Username: {this.state.username}</h3>
      <h3>email: {this.state.email}</h3>
    </div>;
  }
}
export default Users;
