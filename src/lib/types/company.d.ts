export interface SendInviteInput {
  first_name: string;
  last_name: string;
  email: string;
  company_id: string;
}

export interface GetInvitedItem {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company_id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
