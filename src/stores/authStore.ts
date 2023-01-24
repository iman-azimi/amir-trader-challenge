import type { IUser, ILoginInput } from '@/types/auth'
import { defineStore } from 'pinia'
import {
  signUpUserFn,
  verifyUserFn,
  loginUserFn,
  logoutUserFn,
} from '../api/authApiManager'

export type AuthStoreState = {
  user: IUser
  loggedIn: boolean
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () =>
    ({
      user: {},
      loggedIn: false,
    } as AuthStoreState),
  getters: {},
  actions: {
    setAuthUser(user: IUser) {
      this.user = user
      this.loggedIn = true
    },
    loginUser(user: ILoginInput) {
      try {
        const res = loginUserFn(user)
        return res
      } catch (error) {
        return error
      }
    },
    registerUser(user: IUser) {
      try {
        const res = signUpUserFn(user)
        return res
      } catch (error) {
        return error
      }
    },
    verifyUser(params: any) {
      try {
        const res = verifyUserFn(params)
        return res
      } catch (error) {
        return error
      }
    },
    logoutUser() {
      try {
        const res = logoutUserFn()
        return res
      } catch (error) {
        return error
      }
    },
  },
})
