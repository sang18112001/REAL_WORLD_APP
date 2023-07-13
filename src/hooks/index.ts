import { useContext } from 'react'
import { AppContext } from '../store/context'

export const useAuthContext = () => {
  return useContext(AppContext)
}
