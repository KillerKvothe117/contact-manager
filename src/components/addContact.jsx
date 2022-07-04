import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input
              type={"text"}
              id="name"
              name="name"
              placeholder="Enter Name..."
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email:</label>
            <input
              type={"email"}
              id="email"
              name="email"
              placeholder="Enter Email..."
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
