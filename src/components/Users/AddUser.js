import React, {useState} from 'react';
import Card from '../UI/Card';
import classes  from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser = (prop) => {   
    const [enterUsername, setEnteredUsername]= useState('');
    const [enterAge, setEnteredAge] = useState('');
    const addUserHandlerFunction = (event) => {
        event.preventDefault();
        console.log(enterUsername, enterAge);
    }

    const usernameChangeHandler = (event)=> {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const clickHandler=(event)=> {
        console.log(enterUsername, enterAge)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandlerFunction}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>)
};

export default AddUser;