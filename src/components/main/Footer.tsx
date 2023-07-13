import { memo } from 'react'
import { Link } from 'react-router-dom'
import { PATH } from '../../constants'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to={PATH.HOME} className="logo-font">
          conduit
        </Link>
        <span className="attribution">
          An interactive learning project from <Link to={'https://thinkster.io'}>Thinkster</Link>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
  )
}

export default memo(Footer)
