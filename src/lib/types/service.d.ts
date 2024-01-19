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
