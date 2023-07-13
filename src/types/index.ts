export interface IUser {
   email: string;
   token: string;
   username: string;
   bio: string;
   image: string;
   following: boolean;
}

export interface IProfile {
   username: string;
   bio: string;
   image: string;
   following: boolean;
}

export interface ISingleArticle {
   slug: string,
   title: string,
   description: string,
   body: string,
   tagList: string[],
   createdAt: string,
   updatedAt: string,
   favorited: boolean,
   favoritesCount: number,
   author: IUser
}

export interface IMultipleArticle {
   articles: ISingleArticle[],
   articlesCount: number,
}

export interface IComment {
   id: 1,
   createdAt: string,
   updatedAt: string,
   body: string
   author: IUser
}

export interface IComments {
   comments: IComment[];
}

export interface ITags {
   tags: string[];
}