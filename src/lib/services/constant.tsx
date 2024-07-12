export const BASE_URL = 'https://api.alldrivesos.com/api'
export const BASE_UPLOAD = 'https://api.alldrivesos.com'
export const GOOGLE_API_KEY = `${import.meta.env.VITE_GOOGLE_KEY}`
export const PAYMENT_KEY = `${import.meta.env.VITE_PAYMENT_KEY}`

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
export const GET_ALL_PAYMENTS = `/services-quote/get-all-paid-quote`
export const ADMIN_ADD_RATES = `/charge/save-charges`
export const ADMIN_GET_RATES = `/charge/fetch-charges`
export const ADMIN_GET_PAYOUT_CAP = `/payout/fetch`
export const ADMIN_SET_PAYOUT_CAP = `/payout/save`
export const ADMIN_GET_PAYOUT_REQUESTS = `/service-request/fetch-withdrawals`
export const ADMIN_APPROVE_PAYOUT = `/service-request/approve-withdrawal`
export const ADMIN_INITIATE_PAYOUT = `/service-request/initiate-company-payout`
export const ADMIN_DECLINE_PAYOUT_REQUESTS = `/service-request/disapprove-withdrawal`
export const FETCH_PAYOUT_TRANSACTIONS = `/transactions`

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
export const GET_ALL_REVIEWS = 'review/fetch-service-reviews'
export const GET_DRIVER_REVIEWS = 'review/fetch-service-reviews'

// service
export const CREATE_CATEGORY = '/services/create'
export const GET_CATEGORY = '/services/all'
export const ADMIN_CATEGORY = '/services/view'
export const EDIT_CATEGORY = '/services/update'
export const PUBLISH_CATEGORY = '/services/publish-unpublish'
export const DELETE_CATEGORY = '/services/action'
export const GET_SERVICES = '/service-request/service-information/view'
export const GET_SINGLE_SERVICE = '/service-request/service-information/view'
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
export const CONFIRM_PAYMENT = `/service-quote/verify-selected-quote`

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
export const REQUEST_PAYOUT = '/service-request/request-withdrawal'
export const GET_STAFF_REQUEST = `/service-request/fetch-withdrawals`
export const DECLINE_STAFF_REQUEST = `/service-request/disapprove-withdrawal`


// user endpoints
export const GET_MY_ACCOUNT = `/user/me`
export const GET_MY_SERVICES = '/service-request/user-fetch-details'
export const SUBMIT_REVIEW = '/review/create-service-review'
export const SUBMIT_QUERY = "/service-request/submit-query";
export const COMPLETE_SERVICE = "/service-request/client-update";
export const GET_ONE_SERVICE = '/service-request/user-fetch-details'
export const GET_MY_PAYMENTS = '/service-request/payments'
export const GET_PROVIDER_PAYMENTS = `/service-request/fetch-driver-payments`
export const GET_CLIENT_DASHBOARD_STATS = `/service-request/client-stat`
export const GET_PAYOUT_RECORDS = `/service-request/fetch-user-withdrawals`

// payments
export const ADMIN_GET_PAYMENTS = `service-request/fetch-payments`