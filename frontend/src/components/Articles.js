import React from 'react';
import ArticleRow from './ArticleRow';
import {useSelector} from 'react-redux';
import {getArticles} from '../selectors/articles';
const Articles = () => {
    const articles = useSelector(getArticles);
    return (
        <React.Fragment>
        {Object.keys(articles).map((key,index) => (<ArticleRow key = {articles[key].id} article = {articles[key]} />))}
        </React.Fragment>
    );
}
 
export default Articles;
