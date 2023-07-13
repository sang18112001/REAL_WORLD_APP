import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PATH } from './constants'
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings'
import MainLayout from './components/main/MainLayout'
import AuthLayout from './components/main/AuthLayout'
import SingleArticle from './pages/article/SingleArticle'
import Profile from './pages/profile/Profile'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import MyArticle from './pages/new_article/MyArticle'
import { useAuthContext } from './hooks'
import { useEffect } from 'react'
import { isAuth } from './utils'
import { accountAPI } from './api/conduit'

function App() {
  const [state, dispatch] = useAuthContext()
  useEffect(() => {
    isAuth() && accountAPI.userInfo().then(res => dispatch({ type: 'SET_CURRENT_USER', payload: res.user }))
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<MainLayout />}>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.HOME} element={<AuthLayout />}>
            <Route path={PATH.SIGNIN} element={<SignIn />} />
            <Route path={PATH.SIGNUP} element={<SignUp />} />
          </Route>
          <Route path={PATH.SETTINGS} element={<Settings />} />
          <Route path={PATH.ARTICLE} element={<SingleArticle />} />
          <Route path={PATH.PROFILE} element={<Profile />} />
          <Route path={PATH.NEW_ARTICLE} element={<MyArticle />} />
          <Route path={PATH.EDIT_ARTICLE} element={<MyArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
