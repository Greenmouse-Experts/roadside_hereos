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
  return <div>{JSON.stringify(query.data)}</div>;
}
