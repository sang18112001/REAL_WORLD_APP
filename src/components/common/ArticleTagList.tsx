import React from "react";

const ArticleTagList = ({ tagList }: { tagList: string[] }) => {
  return (
    <>
      {tagList.map((tag: string, index: number) => (
        <li
          key={index}
          className="tag-default tag-pill tag-outline ng-binding ng-scope"
        >
          {tag}
        </li>
      ))}
    </>
  );
};

export default ArticleTagList;
