import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../../constants'
import { accountAPI } from '../../api/conduit'
import { useAuthContext } from '../../hooks'
import { IUserResponse } from '../../types/actions'

const SignUp = () => {
  const [errorKeys, setErrorKeys] = useState<string[] | []>([])
  const [errorValues, setErrorValues] = useState<string[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useAuthContext()
  const navigate = useNavigate()
  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)
    const originalData = Object.fromEntries(formData)
    const newUser = {
      email: originalData.email,
      password: originalData.password,
      username: originalData.username,
    }
    setIsLoading(true)
    accountAPI
      .userSign(newUser, 'users')
      .then(({ response, error }: IUserResponse) => {
        if (error) {
          const { errors } = error.response.data
          setErrorKeys(Object.keys(errors))
          setErrorValues(Object.values(errors))
        } else {
          setErrorKeys([])
          setErrorValues([])
          localStorage.setItem('userToken', response.user.token)
          dispatch({ type: 'SET_CURRENT_USER', payload: response.user })
          navigate('/')
        }
      })
      .then(() => setIsLoading(false))
  }
  return (
    <div>
      <h1 className="text-xs-center">Sign up</h1>
      <p className="text-xs-center">
        <Link to={PATH.SIGNIN}>Have an account?</Link>
      </p>
      {errorKeys.length > 0 && (
        <ul className="error-messages">
          {errorKeys.map((key: string, index: number) => (
            <li>
              {key} {errorValues[index]}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={event => signUpHandler(event)}>
        <fieldset className="form-group" disabled={isLoading}>
          <input className="form-control form-control-lg" type="text" name="username" placeholder="Your Name" />
        </fieldset>
        <fieldset className="form-group" disabled={isLoading}>
          <input className="form-control form-control-lg" type="text" name="email" placeholder="Email" />
        </fieldset>
        <fieldset className="form-group" disabled={isLoading}>
          <input className="form-control form-control-lg" type="password" name="password" placeholder="Password" />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right" disabled={isLoading}>
          Sign up
        </button>
      </form>
    </div>
  )
}

export default SignUp
