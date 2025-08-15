import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../lib/services/api/serviceApi";
import { DynamicTable } from "../../lib/components/ui/DynamicTable";
import { useState } from "react";
import { table } from "console";
import { createColumnHelper } from "@tanstack/react-table";
interface TABLE_PARAMS {
  page: number;
}
interface RefundRequest {
  id: string;
  companyName: string;
  amount: number;
  status: string;
  createdAt: string;
}

interface FetchRefundsResponse {
  refundRequests: RefundRequest[];
  total: number;
}

interface APIResponse {
  success: boolean;
  data: FetchRefundsResponse;
}
export default function ComapanyRefunds() {
  const [tableParams, setParams] = useState<TABLE_PARAMS>({
    page: 1,
  });
  const query = useQuery<APIResponse>({
    queryKey: ["refunds"],
    queryFn: async () => {
      let resp = await apiClient.get("/services-quote/fetch-refund-requests", {
        params: {
          ...tableParams,
        },
      });
      return resp.data;
    },
  });
  const count = query.data?.data.total || 10;
  const handleNext = () => {
    if (count <= 10) return;
    setParams((prev) => {
      return { ...prev, page: prev.page + 1 };
    });
  };
  const handlePrev = () => {
    if (tableParams.page <= 1) {
      return;
    }

    setParams((prev) => {
      return { ...prev, page: prev.page - 1 };
    });
  };

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor((row) => row.fname, {
      id: "Name",
      cell: () => "dummy",
    }),
    columnHelper.accessor((row) => row.fname, {
      id: "Amount",
      cell: () => "dummy",
    }),
    columnHelper.accessor((row) => row.fname, {
      id: "Date requested",
      cell: () => "dummy",
    }),
    columnHelper.accessor((row) => row.fname, {
      id: "Status",
      cell: () => "dummy",
    }),
  ];
  return (
    <div>
      {/*<>{JSON.stringify(query.data)}</>*/}
      <h2 className="py-2 font-bold text-xl">Refunds</h2>
      {query.isFetching && <>fetching</>}
      <DynamicTable
        data={query.data?.data.refundRequests || []}
        next={handleNext}
        page={tableParams.page}
        // maxPage={10}
        columns={columns}
        count={count}
        prev={handlePrev}
      />
    </div>
  );
}
