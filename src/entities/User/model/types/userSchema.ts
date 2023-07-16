export interface User {
  password: string;
  username: string;
}

export interface UserSchema {
  authData?: User;
}
