import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../lib/services/api/serviceApi";
import { DynamicTable } from "../../lib/components/ui/DynamicTable";
import { useState } from "react";
// import { table } from "console";
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
    columnHelper.accessor((row) => row.user.fname, {
      id: "Name",
      cell: (info) => `${info.getValue()} ${info.row.original.user.lname}`,
    }),
    columnHelper.accessor((row) => row.serviceRequest.amount, {
      id: "Amount",
      cell: (info) => info.getValue() ?? "N/A",
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "Date requested",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
    columnHelper.accessor((row) => row.status, {
      id: "Status",
      cell: (info) => {
        const status = info.getValue();
        let badgeColor = "bg-slate-400"; // Default color
        if (status === "approved") {
          badgeColor = "bg-green-600";
        } else if (status === "rejected") {
          badgeColor = "bg-red-600";
        } else if (status === "pending") {
          badgeColor = "bg-yellow-800";
        }
        return (
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${badgeColor} text-white`}
          >
            {status}
          </span>
        );
      },
    }),
  ];
  return (
    <div>
      {/*<>{JSON.stringify(query.data)}</>*/}
      <h2 className="py-2 font-bold text-xl">Refunds</h2>
      {query.isFetching && <>fetching</>}
      {(query.data?.data?.total ?? 0) > 0 ? (
        <DynamicTable
          data={query.data?.data.refundRequests || []}
          next={handleNext}
          page={tableParams.page}
          // maxPage={10}
          columns={columns}
          count={count}
          prev={handlePrev}
        />
      ) : !query.isFetching ? ( // Only show empty state when not fetching
        <> No Refunds Requested</>
      ) : null}
    </div>
  );
}
