import apiManager from './apiServiceManager.service'

import type {
  GenericResponse,
  ILoginInput,
  ILoginResponse,
  ISignUpInput,
  IVerifyInput,
} from '../types/auth'

export const signUpUserFn = async (user: ISignUpInput) => {
  const response = await apiManager.post<GenericResponse>('/register', user)
  return response.data
}
export const verifyUserFn = async (params: IVerifyInput) => {
  const response = await apiManager.post<GenericResponse>('/active', params)
  return response.data
}
export const loginUserFn = async (user: ILoginInput) => {
  const response = await apiManager.post<ILoginResponse>('/login', user)
  return response.data
}

export const logoutUserFn = async () => {
  const response = await apiManager.post<GenericResponse>('/logout')
  return response.data
}
