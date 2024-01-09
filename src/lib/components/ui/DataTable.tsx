import { FC } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { generatePaginationNumbers, isNumber } from "../../utils";
// import { generatePaginationNumbers, isNumber } from "@/shared/utils/format";

interface Props {
  data: any;
  columns: any;
  prev: () => void;
  next: () => void;
  gotoPage: (value: number) => void;
  currentPage: number | undefined;
  pageCount: number | undefined;
  total: number | undefined;
}
export const DataTable: FC<Props> = ({
  data,
  columns,
  pageCount,
  currentPage,
  total,
  next,
  prev,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="flex flex-col min-h-[360px]">
        <div className=" overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full ">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead className="thead-light bg-light">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        scope="col"
                        className="px-6 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="align-middle fs-500 whitespace-nowrap px-6 py-4 text-left"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </table>
            <div className="h-4" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-6">
        <div>
          <p>
            Showing {currentPage}-{pageCount} of {total} entries
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            className={`border px-3 py-1 rounded-[3px] fs-500 ${currentPage || 1 > 1? 'boreder-[#C0C0C0] text-[#C0C0C0]' : 'border-[#888888] text-[#888888]'}`}
            onClick={prev}
          >
            Previous
          </button>
          {generatePaginationNumbers(currentPage || 0, pageCount || 0).map(
            (item, i) =>
              isNumber(item) ? (
                <button
                  className={` border fs-500 px-2 py-1 rounded-[3px] ${
                    currentPage === item
                      ? "border-[#888888] text-[#888888]"
                      : "boreder-[#C0C0C0] text-[#C0C0C0]"
                  }`}
                  key={i}
                >
                  {item}
                </button>
              ) : (
                item
              )
          )}
          <button
            className={`border px-3 py-1 rounded-[3px] fs-500 ${currentPage === pageCount? 'border-[#888888] text-[#888888]' : 'boreder-[#C0C0C0] text-[#C0C0C0]'}`}
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};