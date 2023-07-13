import axios from "axios"
import { API_URL } from "../constants"
import { isAuth } from "../utils"
import { IAddAndEditArticle, IAddComment, IEditUser, ISignIn, ISignUp } from "../types/actions"
const config = {
   headers: {
      Authorization: `Token ${isAuth()}`,
   },
}

export const tagsAPI = {
   getTags: async () => {
      const response = await axios.get(API_URL + '/tags')
      return response.data
   },
}

export const articleAPI = {
   getArticles: async (offset: number) => {
      const response = await axios.get(API_URL + `/articles?offset=${offset}`, config)
      return response.data
   },
   getArticlesByTag: async (tag: string, offset: number) => {
      const response = await axios.get(API_URL + `/articles`, { params: { tag, offset } })
      return response.data
   },
   getArticleByAuthor: async (author: string, offset: number) => {
      const response = await axios.get(API_URL + `/articles?author=${author}&offset=${offset}`, config)
      return response.data
   },
   getArticleByFavorited: async (favorited: string, offset: number) => {
      const response = await axios.get(API_URL + `/articles?favorited=${favorited}&offset=${offset}`, config)
      return response.data
   },
   getArticleSlug: async (slug: string) => {
      const response = await axios.get(API_URL + `/articles/${slug}`, config)
      return response.data
   },
   newArticle: async (newData: IAddAndEditArticle) => {
      const response = await axios.post(API_URL + `/articles`, newData, config)
      return response.data
   },
   editArticle: async (slug: string, newData: IAddAndEditArticle) => {
      const response = await axios.put(API_URL + `/articles/${slug}`, newData, config)
      return response.data
   },
   deleteArticle: async (slug: string) => {
      const response = await axios.delete(API_URL + `/articles/${slug}`, config)
      return response.data
   },
}

export const followAPI = {
   followUser: async (username: string) => {
      const response = await axios.post(API_URL + `profiles/${username}/follow`, null, config)
      return response.data
   },
   unFollowUser: async (username: string) => {
      const response = await axios.delete(API_URL + `profiles/${username}/follow`, config)
      return response.data
   },
}

export const favoriteAPI = {
   setFavouriteArticle: async (slug: string) => {
      const response = await axios.post(API_URL + `/articles/${slug}/favorite`, null, config)
      return response.data
   },
   deleteFavouriteArticle: async (slug: string) => {
      const response = await axios.delete(API_URL + `/articles/${slug}/favorite`, config)
      return response.data
   },
   getFavoutite: async (username: string) => {
      const response = await axios.get(API_URL + `/articles?favorited=${username}`, config)
      return response.data
   }
}

export const commentsAPI = {
   getComments: async (slug: string) => {
      const response = await axios.get(API_URL + `articles/${slug}/comments`, config)
      return response.data
   },
   addComment: async (slug: string, newData: IAddComment) => {
      const response = await axios.post(API_URL + `articles/${slug}/comments`, newData, config)
      return response.data
   },
   deleteComment: async (slug: string, id: number) => {
      const response = await axios.delete(API_URL + `articles/${slug}/comments/${id}`, config)
      return response.data
   }
}

export const profileAPI = {
   getProfileUser: async (username: string) => {
      const response = await axios.get(API_URL + `/profiles/${username}`, config)
      return response.data
   },
   getProfileArticle: async (author: string, limit: number, offset: number) => {
      const response = await axios.get(API_URL + `/articles?author=${author}&limit=${limit}&offset=${offset}`, config)
      return response.data
   },
   getFeedArticles: async (offset: number) => {
      const response = await axios.get(API_URL + `/articles/feed?offset=${offset}`, config)
      return response.data
   },
}

export const accountAPI = {
   userInfo: async () => {
      const response = await axios.get(API_URL + '/user', config)
      return response.data
   },
   userEdit: async (newEdit: IEditUser) => {
      const response = await axios.put(API_URL + '/user', newEdit, config)
      return response.data
   },
   userSign: async (newUser: ISignIn | ISignUp, endpoint: string) => {
      try {
         const result = await axios
            .post(`${API_URL}${endpoint}`, {
               user: newUser,
            })
         return {
            response: result.data,
            error: null,
         }
      } catch (error) {
         return {
            response: null,
            error
         }
      }
   },
}