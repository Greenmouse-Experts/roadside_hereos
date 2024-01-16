export interface CreateCatType {
    name: string;
    slug: string;
    icon?: string;
    id?: string
}
interface ServiceCatItem {
    name: string;
    id: string;
    cretatedAt: string;
    slug: string;
    updatedAt: string;
    icon:string | undefined
  }