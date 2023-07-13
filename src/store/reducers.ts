import { Reducer } from "react";
import { accountAPI } from "../api/conduit";

const reducer = (state: any, action: any) => {
   switch (action.type) {
      case 'SET_CURRENT_USER':
         return {
            ...state,
            currentUser: action.payload
         }
      case 'EDIT_CURRENT_USER':
         accountAPI.userEdit(action.payload).catch(error => console.log(error));
         return {
            ...state,
            currentUser: action.payload.user
         }
      default:
         throw new Error
   }
}

export default reducer