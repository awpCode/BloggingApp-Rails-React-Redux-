import React from 'react';
import ArticleRow from './ArticleRow';
import {useSelector} from 'react-redux';
import {getArticles} from '../selectors/articles';
import * as sessionSelector from '../selectors/sessions';
import {Link} from 'react-router-dom';
const Articles = () => {
    const articles = useSelector(getArticles);
    const isLogged = useSelector(sessionSelector.isLogged);
    return (
        <React.Fragment>
        {isLogged && <Link to = '/articles/new' className = "btn btn-secondary m-2">Create Article</Link>}
        {Object.keys(articles).map((key,index) => (<ArticleRow key = {articles[key].id} article = {articles[key]} />))}
        </React.Fragment>
    );
}
 
export default Articles;
