export interface IAddAndEditArticle {
   article: {
      body: string,
      description: string,
      title: string,
      tagList: string[]
   }
}

export interface IAddComment {
   comment: {
      body: string
   }
}

export interface IEditUser {
   user: {
      email: string;
      token: string;
      username: string;
      bio: string;
      image: string;
   }
}

export interface ISignIn {
   email: FormDataEntryValue;
   password: FormDataEntryValue;
}

export interface ISignUp {
   username: FormDataEntryValue;
   email: FormDataEntryValue;
   password: FormDataEntryValue;
}

export interface IUserResponse {
   response: any
   error: any
 }