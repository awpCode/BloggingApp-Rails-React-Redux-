import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as sessionSelector from '../selectors/sessions';
import {Redirect} from 'react-router-dom';
import {createUserMiddleWare} from '../actions/users';
import {loginUser} from '../actions/sessions';
import {fetchUsersMiddleWare} from '../actions/users';
const SignUp = () => {

    const dispatch = useDispatch();
    const isLogged = useSelector(sessionSelector.isLogged);
    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createUserMiddleWare(state))
        .then(res => {
            localStorage.setItem('token', res.token);
            dispatch(fetchUsersMiddleWare);
            dispatch(loginUser(res.user));
        })
        .catch(err => {
            setErrors(err);
        });
    };

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    const printErrors = () => {
        if(errors.length === 0)
            return '';  
        else{
            return (
                    <div className="alert alert-danger">
                    <h4 className="alert-heading">The following errors prevented the Interview from getting saved.</h4>
                    <ul>
                        {errors.map(error => <li key = {error}>{error}</li>)}
                    </ul>
                     <button onClick = {() => setErrors([])} >Close</button>
                 </div> 
            );
        }
    };
    if(isLogged){
        return (
            <Redirect to = '/' />
        );
    }
    return (
        <div className = "container m-2">
            <h1 className = "text-center">SignUp Form</h1>
            {printErrors()}
            <form onSubmit = {handleSubmit}>
                 <label>Username:</label>
                <input type = "text" name = "username" value = {state.username} onChange = {handleChange} />
                <br/>
                <label>Email:</label>
                <input type = "text" name = "email" value = {state.email} onChange = {handleChange} />
                <br/>
                <label>Password:</label>
                <input type = "password" name = "password" value = {state.password} onChange = {handleChange} />
                <br/>
                <button type = "submit">Register</button>
                <br/>
                </form>
        </div>
    );
}
 
export default SignUp;