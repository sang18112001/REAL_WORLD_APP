import { Link } from "react-router-dom";
import { PATH } from "../../constants";

const IsNotAuthHeader = ({ pathname }: { pathname: string}) => {
  return (
    <>
      <li className="nav-item">
        <Link className={`nav-link ${pathname === PATH.SIGNIN && "active"}`} to={PATH.SIGNIN}>
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${pathname === PATH.SIGNUP && "active"}`} to={PATH.SIGNUP}>
          Sign up
        </Link>
      </li>
    </>
  );
};

export default IsNotAuthHeader;
