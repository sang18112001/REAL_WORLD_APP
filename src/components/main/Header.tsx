import { Link, useLocation } from "react-router-dom";
import IsNotAuthHeader from "./IsNotAuthHeader";
import IsAuthHeader from "./IsAuthHeader";
import { PATH } from "../../constants";
import { isAuth } from "../../utils";
const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to={PATH.HOME}>
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link
              to={PATH.HOME}
              className={`nav-link ${pathname === PATH.HOME && "active"}`}
            >
              Home
            </Link>
          </li>
          {isAuth() ? <IsAuthHeader pathname={pathname}/> : <IsNotAuthHeader pathname={pathname}/>}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
