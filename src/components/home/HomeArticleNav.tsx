import React from "react";
import ArticleNavItem from "../common/ArticleNavItem";

interface IArticleNav {
  artNav: string;
  setArtNav: React.Dispatch<React.SetStateAction<string>>;
  requiredTag: string;
}
const HomeArticleNav = ({ artNav, setArtNav, requiredTag }: IArticleNav) => {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <ArticleNavItem artNav={artNav} setArtNav={setArtNav} nameItem={"Feed"}>
          Your Feed
        </ArticleNavItem>
        <ArticleNavItem artNav={artNav} setArtNav={setArtNav} nameItem={"Global"}>
          Global
        </ArticleNavItem>
        {requiredTag && (
          <ArticleNavItem artNav={artNav} setArtNav={setArtNav} nameItem={requiredTag}>
            #{requiredTag}
          </ArticleNavItem>
        )}
      </ul>
    </div>
  );
};

export default HomeArticleNav;
