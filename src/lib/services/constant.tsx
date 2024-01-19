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
export const GET_PROVIDERS = '/all/providers'
export const GET_ADMIN_NOTIFY = '/notifications/admin'

// Auth endpoints
export const USER_LOGIN = '/user/login'
export const UPDATE_ACCOUNT = '/user/update-account'
export const UPDATE_PASSWORD ='/user/change-password'
export const USER_SIGNUP = '/user/signup'
export const USER_PROVIDER_SIGNUP = '/user/provider/signup'
export const VERIFY_EMAIL = '/user/verifyemail'
export const RESEND_TOKEN = '/user/resend-token'
export const FORGOT_PASSWORD = '/user/forgot-password'


// service
export const CREATE_CATEGORY = '/services/create'
export const GET_CATEGORY = '/services/all'
export const ADMIN_CATEGORY = '/services/view'
export const EDIT_CATEGORY = '/services/update'
export const PUBLISH_CATEGORY = '/services/publish-unpublish'
export const DELETE_CATEGORY = 'services/action'

// routine endpoints
export const UPLOAD_FILE = '/upload'
