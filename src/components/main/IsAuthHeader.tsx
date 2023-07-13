import { Link } from 'react-router-dom'
import { PATH } from '../../constants'
import { useAuthContext } from '../../hooks'

const IsAuthHeader = ({ pathname }: { pathname: string }) => {
  const [state, dispatch] = useAuthContext()
  const { currentUser } = state
  return (
    <>
      <li className="nav-item">
        <Link to={PATH.NEW_ARTICLE} className={`nav-link ${pathname === PATH.NEW_ARTICLE && 'active'}`}>
          <i className="ion-compose"></i>&nbsp;New Article
        </Link>
      </li>
      <li className="nav-item">
        <Link to={PATH.SETTINGS} className={`nav-link ${pathname === PATH.SETTINGS && 'active'}`}>
          <i className="ion-gear-a"></i>&nbsp;Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`${PATH.PROFILE_BASE}/${currentUser?.username}`} className="nav-link">
          <img
            src={currentUser?.image}
            style={{
              width: '26px',
              height: '26px',
              marginRight: '5px',
              borderRadius: '50%'
            }}
          />
          {currentUser?.username}
        </Link>
      </li>
    </>
  )
}

export default IsAuthHeader
