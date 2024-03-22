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
export const SUSPEND_USER = `/admin/suspend-user`
export const UNSUSPEND_USER =`/admin/unsuspend-user`
export const GET_COMPANY_PROVIDERS = `/admin/get-provider-drivers`

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
export const GET_SERVICES = '/service-request/service-information/view'
export const GET_AVAILABLE_SERVICE = `/service-quote/fetch-quotes`
export const SELECT_SERVICE_PROVIDER = `/service-quote/select-driver-quote`
export const ADMIN_GET_REQUESTS = `/service-request/admin-fetch-details`
export const GET_COMPANY_SERVICES = `/company/services`
export const REMOVE_COMPANY_SERVICE = `company/remove-service`
export const ADD_COMPANY_SERVICE = `company/add-service`

// service request
export const SERVICE_REQUEST = '/service-request/service-information/create'
export const SEND_PROFILE_INFO = `/service-request/profile-information/create`
export const GET_SERVICE_QOUTES = `/service-quote/fetch-quotes`
export const SELECT_QOUTE = `/service-quote/select-driver-quote`
export const INITIATE_PAYMENT = `/service-quote/pay-selected-quote`
export const CONFIRM_PAYMENT = `/service-quote/pay-selected-quote/verify-selected-quote`

// routine endpoints
export const UPLOAD_FILE = '/upload'

// company Kyc
export const SUBMIT_KYC = '/kyc/service-company/save'
export const GET_KYC = '/kyc/service-company/view'
export const GET_COMPANY_KYC = '/kyc/service-company/fetch'
export const GET_DRIVER_KYC = '/kyc/driver/fetch-details'
export const APPROVE_COMPANY_KYC = '/kyc/document/approval'
export const APPROVE_DRIVER_KYC = '/kyc/document/driver-approval'

// company api
export const EXTEND_INVITE = '/invitation-request/create'
export const GET_COMP_INVITE = '/invitation-request'
export const ACCEPT_INVITE = '/invitation-request/join'
export const GET_DRIVERS = '/users/get-drivers'
export const GET_DRIVER_DETAILS = '/users/get-drivers'
export const GET_ME = '/invitation-request/account'
export const GET_USER_NOTIFY = '/notifications/user'
export const SUSPEND_DRIVER = '/users/suspend-driver'
export const UNSUSPEND_DRIVER = '/users/unsuspend-driver'

// user endpoints
export const GET_MY_SERVICES = '/service-request/user-fetch-details'