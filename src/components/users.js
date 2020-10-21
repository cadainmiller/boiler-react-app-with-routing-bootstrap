import React from "react";

const axios = require("axios");

async function getUser() {
  try {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        var persons = res.data;
        console.log(persons);
        return persons;
      });
  } catch (error) {
    console.error(error);
  }
}
class Users extends React.Component {
  render() {
    
    return <div className="p-4"></div>;
  }
}
export default Users;
