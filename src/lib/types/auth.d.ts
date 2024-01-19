export interface LoginTyping {
  email: string;
  password: string;
}

export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UpdateProfile {
  phone?: string;
  name?: string;
  address?: string;
  state?: string;
  city?: string;
  street?: string;
}

export interface CreateUser {
  name: string;
  email: string;
  userType: string;
  password: string;
  phone: string;
  reference?: string;
  aboutUs?: string;
  platform?: string;
  serviceTypeId?: string[];
}

export interface ResendTokenType {
  email: string
  platform: string
}

export interface ResetPasswordType {
  token: string
  email: string
  password: string
}
