import React from 'react';

const AddUser = (prop) => {
    const addUserHandlerFunction = (event)=> {
        event.preventDefault();

    }
    return (
        <form onSubmit={addUserHandlerFunction}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
        </form>)
};

export default AddUser;