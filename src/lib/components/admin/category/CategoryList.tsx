import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../../ui/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import { getCategories } from "../../../services/api/serviceApi";
import { ServiceCatItem } from "../../../types/service";
import dayjs from "dayjs";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { formatAsNgnMoney } from "../../../utils";

const CategoryList = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['getCat'],
    queryFn: getCategories,
  })
  const openEdit = (item:any) => {
    console.log(item);
    
  }
  // Table components
  const columnHelper = createColumnHelper<ServiceCatItem>();
  const columns = [
    columnHelper.accessor((row) => row.icon, {
      id: "Image",
      cell: (info) => <><img src={info.getValue()} alt="img" className="w-12 h-12" /></>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.name, {
      id: "Category Name",
      cell: (info) => <p className="fw-600 text-primary">{info.getValue()}</p>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.slug, {
      id: "Default Price",
      cell: (info) => <>{formatAsNgnMoney(info.getValue())}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.cretatedAt, {
      id: "Date Created",
      cell: (info) => <>{dayjs(info.getValue()).format("DD  MMMM YYYY")}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.id, {
      id: "Action",
      header: (info) => info.column.id,
      cell: (info) => <><Menu placement="bottom-end">
      <MenuHandler>
        <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none capitalize">
          <BsThreeDotsVertical className="text-xl text-black" />
        </Button>
      </MenuHandler>
      <MenuList className="">
        <MenuItem
          className="my-1 fw-500 flex items-center gap-x-2 pt-1"
          onClick={() => openEdit(info.getValue())}
        >
          <BiEdit/> Edit
        </MenuItem>
      </MenuList>
    </Menu></>,
    }),
  ];
  return (
    <div className="lg:p-4 w-full">
      {isLoading && <p>Loading...</p>}
      {isError && <p>There is Error</p>}
      {data && <DataTable
        columns={columns}
        data={data.data}
      />}
    </div>
  );
};

export default CategoryList;
