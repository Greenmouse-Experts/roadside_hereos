import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Props{
    kyc: kycProps;
    saveKyc: (data: kycProps) => void;
    clearKyc: () => void;
}
export interface kycProps{
    business_name: string;
    registration_number: string;
    incorporation_date:string;
    address: string;
    business_email:string;
    business_phone:string;
    business_nature: string;
    staff_number: number,
    vat_registration_number:string;
    director_fullname:string;
    director_designation:string;
    director_phone:string;
    director_email:string;
    tax_id:string;
    bank_name:string;
    bank_account_number:string;
    bank_account_name:string;
    account_type:string;
    routing_number: string;
}
const kycInitState = {
    business_name:  "",
    registration_number:  "",
    incorporation_date: "",
    address:  "",
    business_email: "",
    business_phone: "",
    business_nature:  "",
    staff_number: 0,
    vat_registration_number: "",
    director_fullname: "",
    director_designation: "",
    director_phone: "",
    director_email: "",
    tax_id: "",
    bank_name: "",
    bank_account_number: "",
    bank_account_name: "",
    account_type: "",
    routing_number:  "",
}
const useKycStore = create<Props>()(
  persist(
    (set) => ({
      kyc: kycInitState,
      saveKyc: (data:kycProps) =>
        set(() => ({
          kyc: data,
        })),
      clearKyc: () =>
        set(() => ({
          kyc: kycInitState,
        })),
    }),
    {
      name: "rsh_user_kyc",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useKycStore;