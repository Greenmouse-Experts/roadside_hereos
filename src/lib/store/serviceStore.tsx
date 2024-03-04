import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Props{
    request: requestProps;
    saveRequest: (data: requestProps) => void;
    clearRequest: () => void;
}
interface requestProps{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    serviceId: string;
    location: string;
    price: string;
    homeAddress: string;
}
const requestInitState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceId: '',
    location: '',
    price: '',
    homeAddress: '',
}
const useRequestStore = create<Props>()(
  persist(
    (set) => ({
      request: requestInitState,
      saveRequest: (data:requestProps) =>
        set(() => ({
          request: data,
        })),
      clearRequest: () =>
        set(() => ({
          request: requestInitState,
        })),
    }),
    {
        name: "rsh_service",
        storage: createJSONStorage(() => localStorage),
      }
  )
);

export default useRequestStore;