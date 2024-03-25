import { createColumnHelper } from "@tanstack/react-table";
import { FormatStatus } from "../../../utils";
import CurveLoader from "../../ui/loader/curveLoader/CurveLoader";
import { DataTable } from "../../ui/DataTable";
import dayjs from "dayjs";
import { FC } from "react";

interface Props{
    isLoading: boolean;
    data: any[]
}
const PaymentListing:FC<Props> = ({isLoading, data}) => {
   // Table components
   const columnHelper = createColumnHelper<any>();
   const columns = [
    columnHelper.accessor((row) => row.ref, {
        id: "Payment Reference",
        cell: (info) => <p className="fw-600">{info.getValue()}</p>,
      }),
     columnHelper.accessor((row) => row.type, {
       id: "Payment Type",
       cell: (info) => <p className="fw-600">{info.getValue()}</p>,
     }),
     columnHelper.accessor((row) => row.service_name, {
        id: "Service Category",
        cell: (info) => <p className="">{info.getValue()}</p>,
        header: (info) => info.column.id,
      }),
     columnHelper.accessor((row) => row.createdAt, {
       id: "Date Requested",
       header: (info) => info.column.id,
       cell: (info) => (
         <p className="fw-600">
           {dayjs(info.getValue()).format("ddd DD, MMM YYYY")}
         </p>
       ),
     }),
     columnHelper.accessor((row) => row.status, {
       id: "Status",
       header: (info) => info.column.id,
       cell: (info) => (
         <div className="fw-600">
           {FormatStatus[info.getValue() as keyof typeof FormatStatus]}
         </div>
       ),
     }),
   ];
   return (
     <div className="lg:p-4 w-full">
       {isLoading && (
         <div className="py-12 flex justify-center items-center text-black">
           <div>
             <div className="place-center">
               <CurveLoader />
             </div>
             <p className="text-center mt-5 fw-500">
               Fetching  payments...
             </p>
           </div>
         </div>
       )}
       {!isLoading && data && <DataTable columns={columns} data={data} />}
     </div>
   );
}

export default PaymentListing