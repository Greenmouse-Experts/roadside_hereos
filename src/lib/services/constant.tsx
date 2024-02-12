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
export const MARK_NOTIFY_READ = '/notifications/mark-read'
export const GET_PROVIDER_DETAILS = '/users/get-user'

// Auth endpoints
export const USER_LOGIN = '/user/login'
export const UPDATE_ACCOUNT = '/user/update-account'
export const UPDATE_PASSWORD ='/user/change-password'
export const USER_SIGNUP = '/user/signup'
export const USER_PROVIDER_SIGNUP = '/user/provider/signup'
export const VERIFY_EMAIL = '/user/verifyemail'
export const RESEND_TOKEN = '/user/resend-token'
export const FORGOT_PASSWORD = '/user/forgot-password'
export const RESET_PASSWORD = '/user/reset-password'

// service
export const CREATE_CATEGORY = '/services/create'
export const GET_CATEGORY = '/services/all'
export const ADMIN_CATEGORY = '/services/view'
export const EDIT_CATEGORY = '/services/update'
export const PUBLISH_CATEGORY = '/services/publish-unpublish'
export const DELETE_CATEGORY = '/services/action'
export const SERVICE_REQUEST = '/service-request/service-information/create'
export const GET_SERVICES = '/service-request/service-information/view'

// routine endpoints
export const UPLOAD_FILE = '/upload'

// company Kyc
export const SUBMIT_KYC = '/kyc/service-company/save'
export const GET_KYC = '/kyc/service-company/view'

// company api
export const EXTEND_INVITE = '/invitation-request/create'
export const GET_COMP_INVITE = '/invitation-request'
export const ACCEPT_INVITE = '/invitation-request/join'
export const GET_DRIVERS = '/users/get-drivers'
export const GET_DRIVER_DETAILS = '/users/get-drivers'
export const GET_ME = '/invitation-request/account'
export const GET_USER_NOTIFY = '/notifications/user'