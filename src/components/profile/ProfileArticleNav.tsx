import React, { useState } from "react";
import ArticleNavItem from "../common/ArticleNavItem";

interface IProfileArticleNav {
  artNav: string;
  setArtNav: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileArticleNav = ({ artNav, setArtNav }: IProfileArticleNav) => {
  return (
    <div className="articles-toggle">
      <ul className="nav nav-pills outline-active">
        <ArticleNavItem artNav={artNav} setArtNav={setArtNav} nameItem={"MyArticles"}>
          My Articles
        </ArticleNavItem>
        <ArticleNavItem
          artNav={artNav}
          setArtNav={setArtNav}
          nameItem={"Favourites"}
        >
          Favorited Articles
        </ArticleNavItem>
      </ul>
    </div>
  );
};

export default ProfileArticleNav;
