export interface LoginTyping {
    email: string
    password: string
}

export interface ChangePassword {
    oldPassword: string
    newPassword: string
    confirmPassword: string
}

export interface UpdateProfile{
    phone?: string
    name?: string
    address?: string
    state?: string
    city?: string
    street?: string
}