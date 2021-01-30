import React, {useState, useEffect} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createArticleMiddleWare, fetchArticlesMiddleWare} from '../actions/articles';
const NewArticle = () => {
    const dispatch = useDispatch();
    const [state,setState] = useState({
        title: "",
        description: "",
        done: false,
        errors: [],
    });
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        dispatch(createArticleMiddleWare(state))
        .then(res => {
            dispatch(fetchArticlesMiddleWare);
            setState({...state, errors: [], done: true});
        })
        .catch(err => {
            if(typeof err === "string")
                setState({...state, errors: [err]});
            else
                setState({...state, errors: err});
        });
        
    };

    const printErrors = () => {

        if(state.errors.length === 0)
            return '';  
        else{
            return (
                    <div className="alert alert-danger">
                    <h4 className="alert-heading">The following errors prevented the Interview from getting saved.</h4>
                    <ul>
                        {state.errors.map(error => <li key = {error}>{error}</li>)}
                    </ul>
                     <button onClick = {() => setState({...state, errors: []})} >Close</button>
                 </div> 
            );
        }
    };
    if(state.done)
    {
        return(
            <Redirect to = '/articles' />
        );
    }
    return (
        <React.Fragment>
            <h1>New Article</h1>
            {printErrors()}
            <form onSubmit = {handleSubmit}>
                <label>Title:</label>
                <input type = "text" name = "title" value = {state.title} onChange = {handleChange} />
                <br />
                <label>Description:</label>
                <textarea name = "description" rows="4" cols="50" value = {state.description} onChange = {handleChange} />
                <br />
                <button type = "submit">Submit</button>
            </form>
        </React.Fragment>
    );
}
 
export default NewArticle;