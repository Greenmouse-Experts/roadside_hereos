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
