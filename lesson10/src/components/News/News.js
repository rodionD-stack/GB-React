import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectArticlesLoading, selectArticlesError, selectArticles } from "../../store/articles/selectors";
import { getArticles } from '../../store/articles/actions';
import './News.css';

export const News = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);
    const articles = useSelector(selectArticles);
  
    const requestArticles = useCallback(() => {
      dispatch(getArticles());
    }, []);
  
    useEffect(() => {
      requestArticles();
    }, []);
  
    if (loading) {
      return <h3>LOADING</h3>;
    }
  
    if (error) {
      return (
        <>
          <h3>Request error</h3>
          <button onClick={requestArticles}>TRY AGAIN</button>
        </>
      );
    }
  
    if (!articles.length) {
      return <h3>No articles</h3>;
    }
  

    return (
        <ul className="newsList">
        {articles.map((a) => (
          <React.Fragment key={a.id}>
            <li className="listItem">{a.title}</li>
          </React.Fragment>
        ))}
      </ul>
    );
};