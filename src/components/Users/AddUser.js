import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from "../UI/Button";
import classes from './AddUser.module.css';

const AddUser = props => {
    const[enteredUsername, setEnteredUsername] = useState('')
    const[enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    };

    const usernameChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="text" onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )

};
export default AddUser;
