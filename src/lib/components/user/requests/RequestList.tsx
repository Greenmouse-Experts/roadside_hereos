import { FC } from 'react';
import { DataTable } from '../../ui/DataTable';
import { createColumnHelper } from '@tanstack/react-table';
import { FormatStatus } from '../../../utils';

interface Props {
    status: string
}
const RequestList:FC<Props> = ({status}) => {
    interface PropsCheck {
        name: string;
        id: string;
        status: string;
        date: string;
      }
      const datas = [
        {
          name: "Battery Charge",
          id: "39238jjes",
          status: "pending",
          date: "10-12-2023",
        },
        {
            name: "Battery Charge",
            id: "39238jjes",
            status: "ongoing",
            date: "10-12-2023",
          },
        {
          name: "Battery Charge",
          id: "32003320",
          status: "completed",
            date: "10-12-2023",
        },
      ];
      // Table components
      const columnHelper = createColumnHelper<PropsCheck>();
      const columns = [
        columnHelper.accessor((row) => row.name, {
          id: "Service Category",
          cell: (info) => <p className="fw-500 text-pri">{info.getValue()}</p>,
          header: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.id, {
          id: "Ticket Code",
          header: "Ticket Code",
          cell: (info) => <p className='fw-600'>{info.getValue()}</p>,
        }),
        columnHelper.accessor((row) => row.date, {
            id: "Date Requested",
            header: (info) => info.column.id,
            cell: (info) => <p className='fw-600'>{info.getValue()}</p>,
          }),
          columnHelper.accessor((row) => row.status, {
            id: "Status",
            header: (info) => info.column.id,
            cell: (info) => <p className='fw-600'>{FormatStatus[info.getValue() as keyof typeof FormatStatus]}</p>,
          }),
      ];
      const dets = datas.filter((where) => where.status === status)
      return (
        <div className="lg:p-4 w-full">
          <DataTable
            columns={columns}
            data={dets}
          />
        </div>
      );
}

export default RequestList