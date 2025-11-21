import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../lib/services/api/serviceApi";

export default function GetKycAdmin({ id }: { id: string }) {
  const query = useQuery({
    queryKey: ["staffKycDetails-admin", id],
    queryFn: async () => {
      let resp = await apiClient.get(`/kyc/user-kyc/${id}`, {
        params: {
          userType: "vendor",
        },
      });
      return resp.data;
    },
  });
  return (
    <div className="bg-white p-6 rounded-shadow flex flex-col min-h-[300px] justify-center items-center">
      <h2 className="text-xl font-bold">Work In Progress</h2>
    </div>
  );
}
