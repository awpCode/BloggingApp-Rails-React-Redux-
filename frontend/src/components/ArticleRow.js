import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionSelector from '../selectors/sessions';
import {Link} from 'react-router-dom';
import {deleteArticleMiddleWare} from '../actions/articles';
const ArticleRow = ({article}) => {
    const loggedUserId = useSelector(sessionSelector.loggedUserId);
    const category_ids = article.category_ids;
    const dispatch = useDispatch();
    var categories = [];

    for(let i = 0; i < category_ids.length ; i++){
        let id = category_ids[i];
        let category = useSelector(state => state.categories[id]);
        categories.push(category.name);
    }

    return (
        <div className = "container">
            <div className=" card col-8 mt-4">
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    {categories.map(category => (<span key = {category} className = "badge badge-primary m-1">{category}</span>))}
                    <br/>
                    {loggedUserId === article.user_id && <button onClick = {() => dispatch(deleteArticleMiddleWare(article.id))} className = "float-right btn btn-dark m-1">Delete</button>}
                    {loggedUserId === article.user_id && <Link to = {{pathname: `/articles/${article.id}/edit`}} className = "float-right btn btn-dark m-1">Edit</Link>}
                    
                    
                </div>
            </div>
        </div>
    );
}
 
export default ArticleRow;