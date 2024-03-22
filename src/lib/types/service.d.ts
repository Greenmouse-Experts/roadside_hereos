import { UserItemType } from "./auth";

export interface CreateCatType {
  name: string;
  slug: string;
  icon?: string;
  id?: string;
}
interface ServiceCatItem {
  name: string;
  id: string;
  cretatedAt: string;
  slug: string;
  updatedAt: string;
  icon: string | undefined;
  isPublished: boolean;
  questionNote: string;
}

interface PublishCatType {
  published: boolean;
  id?: string;
}

interface ServiceRequestType {
  vehicleMake: string;
  model: string;
  vehicleYear: string;
  color: string;
  location: string;
  zipcode: string;
  requestNote: string;
  serviceId: string;
}

interface ServiceRequestItem {
  id: string;
  ref: string | null;
  userId: string | null;
  userType: string;
  providerId: string | null;
  status: string | null;
  processStatus: string | null;
  serviceId: string;
  amount: string | null;
  vehicleMake: string;
  model: string;
  vehicleYear: string;
  color: string;
  location: string;
  zipcode: string;
  requestNote: string;
  createdAt: string;
  updatedAt: string;
  service: {
    id: string;
    name: string;
    slug: string;
    icon: string;
    isPublished: boolean;
    questionNote: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ServiceQouteItem {
  createdAt: string;
  driver: UserItemType | null;
  id: string;
  quote: number;
  selected: string | null;
  serviceRequestId: string;
  updatedAt: string;
  userId: string | null;
}

export interface ServiceItemUser {
  amount: number | null;
  color: string;
  createdAt: string;
  id: string;
  location: string;
  model: string;
  processStatus: string | null;
  providerId: string | null;
  ref: string | null;
  requestNote: string;
  service: ServiceCatItem;
  serviceId: string;
  status: string;
  updatedAt: string;
  userId: string;
  userType: string;
  vehicleMake: string;
  vehicleYear: string;
  zipcode: string;
}
