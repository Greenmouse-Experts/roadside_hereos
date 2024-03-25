import { UserItemType } from "./auth";

export interface NotifyItem {
  id: string;
  userId: string;
  type: string;
  message: string;
  isRead: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ReviewItem {
  comment: string;
  createdAt: string;
  id: string;
  rating: string;
  updatedAt: string;
  user: UserItemType;
  userId: string;
  vendor: UserItemType;
  vendorId: string;
}
