import React, { createContext, useEffect, useReducer } from 'react'
import reducer from './reducers'
import { isAuth } from '../utils'
import { accountAPI } from '../api/conduit'
export const AppContext = createContext<any>({})

interface Props {
  children: React.ReactNode
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
    currentUser: undefined,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>
}

export default AppProvider
