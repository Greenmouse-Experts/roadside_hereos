export const BASE_URL = 'https://roadside-heroes-bea8766012cb.herokuapp.com/api'
export const BASE_UPLOAD = 'https://roadside-heroes-bea8766012cb.herokuapp.com'

export enum HTTP_METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
  }

// Admin endpoints
export const ADMIN_LOGIN = '/admin/login'
export const GET_USERS = '/all/users'
export const GET_PROVIDERS = '/all/users'
export const GET_ADMIN_NOTIFY = '/notifications/admin'

// Auth endpoints
export const USER_LOGIN = '/user/login'
export const UPDATE_ACCOUNT = '/user/update-account'
export const UPDATE_PASSWORD ='/user/change-password'
export const USER_SIGNUP = '/user/signup'


// service
export const CREATE_CATEGORY = '/services/create'
export const GET_CATEGORY = '/services/all'
export const EDIT_CATEGORY = '/services/update'

// routine endpoints
export const UPLOAD_FILE = '/upload'
