export interface PayoutItem {
  PayoutRequestId: string;
  amount: number;
  city: string | any | null;
  companyId: string | null;
  createdAt: string;
  email: string;
  expiredAt: string | null;
  fcmToken: string | null;
  fname: string | null;
  hasActiveSubscription: boolean | null;
  id: string;
  invitationId: string | null;
  isActive: number;
  isAvailableForService: boolean | null;
  isSuspended: number;
  last_login: string;
  level: number | null;
  lname: string | null;
  name: string;
  password: string;
  payoutCreatedAt: string;
  pendingBal: string;
  phone: string;
  photo: null;
  planId: string | null;
  referralId: string;
  reviewsAvg: string | null;
  serviceCharge: number;
  state: string | null;
  status: string;
  street: string | null;
  token: string | null;
  updatedAt: string;
  userId: string;
  userType: string;
  verified: number;
  walletBal: string;
}