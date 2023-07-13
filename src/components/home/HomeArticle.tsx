import React, { useState } from "react";
import HomeArticleNav from "./HomeArticleNav";
import ArticleList from "../common/ArticleList";

interface IHomeArticle {
  requiredTag: string;
  artNav: string;
  setArtNav: React.Dispatch<React.SetStateAction<string>>;
}

const HomeArticle = ({ requiredTag, artNav, setArtNav }: IHomeArticle) => {
  return (
    <div className="col-md-9">
      <HomeArticleNav
        artNav={artNav}
        setArtNav={setArtNav}
        requiredTag={requiredTag}
      />
      <ArticleList artNav={artNav}/>
    </div>
  );
};

export default HomeArticle;
