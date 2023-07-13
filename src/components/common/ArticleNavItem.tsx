import React, { ReactNode } from "react";

interface INavItem {
  nameItem: string;
  children: ReactNode;
  artNav: string;
  setArtNav: React.Dispatch<React.SetStateAction<string>>;
}

const ArticleNavItem = ({ children, artNav, setArtNav, nameItem }: INavItem) => (
  <li className="nav-item" style={{ cursor: "pointer" }}>
    <div
      onClick={() => setArtNav(nameItem)}
      className={`nav-link ${artNav === nameItem && "active"}`}
    >
      {children}
    </div>
  </li>
);

export default ArticleNavItem;
