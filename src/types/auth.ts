export interface IUser {
  id: number
  username: string
  password: string
  mobile: string
}

export interface GenericResponse {
  status: string
  message: string
}

export interface ILoginInput {
  mobile: string
  password: string
}

export interface ISignUpInput {
  username: string
  password: string
  mobile: string
}
export interface IVerifyInput {
  code: string
  mobile: string
}
export interface ILoginResponse {
  id: number
  status: string
  token: string
}

export interface ISignUpResponse {
  data: {
    token: string
    user: IUser
  }
}

export interface IUserResponse {
  user: IUser
}
