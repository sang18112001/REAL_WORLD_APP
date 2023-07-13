import { Link } from "react-router-dom";
import { PATH } from "../../constants";
import { configTime } from "../../utils";
import ArticleFavouriteBtn from "./ArticleFavouriteBtn";
import ArticleTagList from "./ArticleTagList";
import { ISingleArticle } from "../../types";

const ArticleRender = ({ article }: { article: ISingleArticle}) => {  
  const profilePageUrl = `${PATH.PROFILE_BASE}/${article.author.username}`;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={profilePageUrl}>
          <img src={article.author.image} />
        </Link>
        <div className="info">
          <Link to={profilePageUrl} className="author">
            {article.author.username}
          </Link>
          <span className="date">{configTime(article.createdAt)}</span>
        </div>
        <ArticleFavouriteBtn article={article} typeText={true}/>
      </div>
      <Link
        to={`${PATH.ARTICLE_BASE}/${article.slug}`}
        className="preview-link"
      >
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
      <ul className="tag-list" style={{ float: "right" }}>
        <ArticleTagList tagList={article.tagList} />
      </ul>
    </div>
  );
};

export default ArticleRender;
