
// src/ArticlePage.jsx

import { getArticles } from '@polyblog/polyblog-js-client';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticlePage = () => {
  const [article, setArticle] = useState();
  const { locale, slug } = useParams();

  useEffect(() => {
    if (article) return
    const fetchArticle = async () => {
      let articles = await getArticles({
        blogId: '8b3986cac3b6c3d1f119c8d8',
        locale,
        slugLocalized: slug,
      })
      let singleArticle = articles?.[0]
      setArticle(singleArticle)
    }
    fetchArticle()
  }, [article, locale, slug])
  return (
    <div style={{width: '80%', margin: '0 auto'}}>
      <div>
        <h3>
          <Link to="/">Blog</Link>
        </h3>
        <img src={article?.coverUrl} alt={article?.title} style={{width: '80%', margin: '0 auto'}} />
        <div>
          <h1>{article?.title}</h1>
          <h3>{article?.subtitle}</h3>
          <i>
            Posted by <span> {article?.author}</span> on
           <span>
             {new Date(article?.creationTime).toLocaleString(locale, {dateStyle: 'long'})}
            </span>
          </i>
        </div>
      </div>
      <div>
        <div dangerouslySetInnerHTML = {{ __html: article?.content }} />
      </div>
    </div>
  )
}

export default ArticlePage
