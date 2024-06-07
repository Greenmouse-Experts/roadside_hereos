// import { getPageCount } from "@/lib/utils/formatHelp";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    flexRender,
  } from "@tanstack/react-table";
  import { FC } from "react";
  import { TbArrowBackUp,  TbArrowForwardUp } from "react-icons/tb";
import { getPageCount } from "../../utils";
  
interface Props {
    data: any[];
    columns: any;
    next: () => void;
    prev: () => void;
    page: number;
    count: number
}
  export const DynamicTable:FC<Props> = ({ data, columns, next, prev, page, count }) => {
    const table = useReactTable({
      data,
      columns,
      // Pipeline
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      //
      debugTable: true,
    });
    return (
      <div>
        <div className="flex flex-col border-t-2 border-l border-b border-gray-400 dark:border-gray-800">
          <div className="overflow-x-auto">
            <div className="align-middle inline-block min-w-full ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead className="thead-light bg-light dark:bg-[#131313]">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          scope="col"
                          className="px-6 align-middle border-r-2 border-b-2 border-gray-400 dark:border-gray-800 py-3 fs-500 whitespace-nowrap text-left"
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
                          className="align-middle fs-500 border-r-2 border-b-2 border-gray-400 dark:border-gray-800 whitespace-nowrap px-6 py-4 text-left"
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
              </table>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-between px-6 border border-gray-400 dark:border-gradient py-2">
          <div className="lg:flex w-full justify-between items-center gap-2">
            <div className="flex gap-x-2">
              <span className="flex items-center gap-1">
                <div>Page</div>
                <strong>
                  {page} of{" "}
                  {getPageCount(count, 10)}
                </strong>
              </span>
            </div>
            <div className="lg:flex gap-x-1 lg:gap-x-3">
              <div className="flex justify-center lg:justify-normal mt-3 lg:mt-0">
                <button
                  className="border-none rounded p-1"
                  onClick={prev}
                //   disabled={!table.getCanPreviousPage()}
                >
                  <span className="w-7 h-7 circle bg-primary text-white flex place-center hover:scale-105 duration-100"><TbArrowBackUp className='text-2xl' /></span>
                </button>
                <button
                  className="border-none rounded p-1"
                  onClick={next}
                //   disabled={!table.getCanNextPage()}
                >
                  <span className="w-7 h-7 circle bg-primary text-white flex place-center hover:scale-105 duration-100"><TbArrowForwardUp className='text-2xl' /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  