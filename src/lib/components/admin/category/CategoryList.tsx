import { useMutation, useQuery } from "@tanstack/react-query";
import { DataTable } from "../../ui/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import {
  deleteCategory,
  getAdminCategories,
  publishCategory,
} from "../../../services/api/serviceApi";
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
import { FormatStatus, formatAsNgnMoney } from "../../../utils";
import useModal from "../../../hooks/useModal";
import { useState } from "react";
import EditCategory from "./EditCategory";
import ReusableModal from "../../ui/ReusableModal";
import { toast } from "react-toastify";
import { MdOutlinePublish, MdOutlineUnpublished } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const CategoryList = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["getCat"],
    queryFn: getAdminCategories,
  });
  const publishCat = useMutation({
    mutationFn: publishCategory,
  });
  const deleteCat = useMutation({
    mutationFn: deleteCategory,
  });
  const [isBusy, setIsBusy] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ServiceCatItem>();
  const [selectedId, setSelectedId] = useState<string>();
  const { Modal, setShowModal } = useModal();
  const { Modal: Publish, setShowModal: setPublish } = useModal();
  const { Modal: Unpublish, setShowModal: setUnpublish } = useModal();
  const { Modal: Delete, setShowModal: setDelete } = useModal();
  const openEdit = (item: ServiceCatItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  const openPublish = (item: string) => {
    setSelectedId(item);
    setPublish(true);
  };
  const openUnpublish = (item: string) => {
    setSelectedId(item);
    setUnpublish(true);
  };
  const openDelete = (item: string) => {
    setSelectedId(item);
    setDelete(true);
  };
  const handlePublish = (type: string) => {
    const payload = {
      id: selectedId,
      published: type === "active" ? true : false,
    };
    publishCat.mutateAsync(payload, {
      onSuccess: (data) => {
        toast.success(data.message);
        setIsBusy(false);
        setPublish(false);
        setUnpublish(false);
        refetch();
      },
      onError: (error:any) => {
        toast.error(error.response.data.message)
        setIsBusy(false);
      },
    });
  };
  const delCategory = () => {
    deleteCat.mutateAsync(selectedId || "", {
      onSuccess: (data) => {
        toast.success(data.message);
        setIsBusy(false);
        setDelete(false);
        refetch();
      },
      onError: (error:any) => {
        toast.error(error.response.data.message)
        setIsBusy(false);
      },
    });
  };
  // Table components
  const columnHelper = createColumnHelper<ServiceCatItem>();
  const columns = [
    columnHelper.accessor((row) => row.icon, {
      id: "Image",
      cell: (info) => (
        <>
          <img src={info.getValue()} alt="img" className="w-12 h-12" />
        </>
      ),
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
    columnHelper.accessor((row) => row.isPublished, {
      id: "Published Status",
      cell: (info) => <>{info.getValue()? FormatStatus['Active'] : FormatStatus['Deactivate']}</>,
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
      cell: (info) => (
        <>
          <Menu placement="bottom-end">
            <MenuHandler>
              <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none capitalize">
                <BsThreeDotsVertical className="text-xl text-black" />
              </Button>
            </MenuHandler>
            <MenuList className="">
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => openEdit(info.row.original)}
              >
                <BiEdit /> Edit
              </MenuItem>
            {info.row.original.isPublished?  <MenuItem
              className="my-1 fw-500 flex items-center gap-x-2 pt-1"
              onClick={() => openUnpublish(info.getValue())}
            >
              <MdOutlineUnpublished/> Unpublish
            </MenuItem> : <MenuItem
              className="my-1 fw-500 flex items-center gap-x-2 pt-1"
              onClick={() => openPublish(info.getValue())}
            >
              <MdOutlinePublish /> Publish 
            </MenuItem>}
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => openDelete(info.getValue())}
              >
                <RiDeleteBin5Line className='text-red-500'/> Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      ),
    }),
  ];
  return (
    <>
      <div className="lg:p-4 w-full">
        {isLoading && <p>Loading...</p>}
        {isError && <p>There is Error</p>}
        {data && <DataTable columns={columns} data={data.data} />}
      </div>
      <Modal title="Edit Service Category" size="md">
        <EditCategory
          item={selectedItem}
          close={() => setShowModal(false)}
          refetch={refetch}
        />
      </Modal>
      <Publish title="" size="xs">
        <ReusableModal
          title="Are you sure you want to publish this service Category"
          actionTitle="Publish"
          action={() => handlePublish('active')}
          cancelTitle="Close"
          closeModal={() => setPublish(false)}
          isBusy={isBusy}
        />
      </Publish>
      <Unpublish title="" size="xs">
        <ReusableModal
          title="Are you sure you want to unpublish this service Category"
          actionTitle="Unpublish"
          action={() => handlePublish('inctive')}
          cancelTitle="Close"
          closeModal={() => setPublish(false)}
          isBusy={isBusy}
        />
      </Unpublish>
      <Delete title="" size="xs">
        <ReusableModal
          title="Are you sure you want to delete this category"
          actionTitle="Yes, Delete"
          action={() => delCategory()}
          cancelTitle="Close"
          closeModal={() => setDelete(false)}
          isBusy={isBusy}
        />
      </Delete>
    </>
  );
};

export default CategoryList;
