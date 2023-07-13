import React, { useRef } from 'react'
import { useAuthContext } from '../../hooks'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const [state, dispatch] = useAuthContext()
  const navigate = useNavigate()
  const { currentUser } = state
  const imgRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const bioRef = useRef<HTMLTextAreaElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const editSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const newInfo = {
      image: imgRef?.current?.value || currentUser.image,
      username: usernameRef?.current?.value || currentUser.username,
      bio: bioRef?.current?.value || currentUser.bio,
      email: emailRef?.current?.value || currentUser.email,
      password: passwordRef?.current?.value || currentUser.password,
    }
    dispatch({ type: 'EDIT_CURRENT_USER', payload: { user: newInfo } })
  }
  if (currentUser) {
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>
              <form onSubmit={event => editSubmitHandler(event)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="URL of profile picture"
                      defaultValue={currentUser.image}
                      ref={imgRef}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Your Name"
                      defaultValue={currentUser.username}
                      ref={usernameRef}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      rows={8}
                      placeholder="Short bio about you"
                      defaultValue={currentUser.bio}
                      ref={bioRef}
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      defaultValue={currentUser.email}
                      ref={emailRef}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      ref={passwordRef}
                    />
                  </fieldset>
                  <button className="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
                </fieldset>
              </form>
              <hr />
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  localStorage.setItem('userToken', '')
                  navigate('/')
                }}
              >
                Or click here to logout.
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
