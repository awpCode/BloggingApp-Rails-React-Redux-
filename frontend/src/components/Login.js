import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loginMiddleWare, loginUser} from '../actions/sessions';
import * as sessionSelector from '../selectors/sessions';
import {Redirect} from 'react-router-dom';
const Login = () => {

    const dispatch = useDispatch();
    const isLogged = useSelector(sessionSelector.isLogged);
    const [state, setState] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(loginMiddleWare(state))
        .then(res => {
            localStorage.setItem('token', res.token);
            dispatch(loginUser(res.user.id));
        })
        .catch(err => {
            setErrors([err]);
        });
    };

    const handleChangeUserName = e => {
        setState({
            ...state,
            username: e.target.value
        });
    };
    const handleChangePassword = e => {
        setState({
            ...state,
            password: e.target.value
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
            <h1 className = "text-center">Login Form</h1>
            {printErrors()}
            <form onSubmit = {handleSubmit}>
                <label>Username:</label>
                <input type = "text" value = {state.username} onChange = {handleChangeUserName} />
                <br/>
                <label>Password:</label>
                <input type = "password" value = {state.password} onChange = {handleChangePassword} />
                <br/>
                <button type = "submit">Login</button>
                <br/>
                </form>
        </div>
    );
}
 
export default Login;