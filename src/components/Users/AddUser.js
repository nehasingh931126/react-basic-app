import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (prop) => {
    const [enterUsername, setEnteredUsername] = useState('');
    const [enterAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandlerFunction = (event) => {
        event.preventDefault();
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age'
            }
            )
            return;
        }
        if (+enterAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter valid age'
            })
            return;
        }

        prop.onAddUser({ name: enterUsername, age: enterAge, id: Math.random().toString() });
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
       setError(null);
    }
    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandlerFunction}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enterUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" value={enterAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>)
};

export default AddUser;