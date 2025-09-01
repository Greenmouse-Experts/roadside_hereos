import { useMutation, useQuery } from "@tanstack/react-query";
import { apiClient } from "../../lib/services/api/serviceApi";
import { Button } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { BiX } from "react-icons/bi";
interface Main_Response {
  data: {
    name: string;
    id: string;
    active: boolean;
  };
}
export default function CarMakes() {
  const edit_mutate = useMutation({
    mutationFn: async () => {
      const response = await apiClient.put(`/vehicle/carmake/${edit_id.id}`, {
        ...edit_id,
      });
      return response.data;
    },
    onSuccess: (e) => {
      toast.success("success");
      car_makes.refetch();
      setEditOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const car_mutate = useMutation({
    mutationFn: async (data: { name: string }) => {
      const response = await apiClient.post("/vehicle/carmake", data);
      return response.data;
    },
    onSuccess: (e) => {
      toast.success("success");
      car_makes.refetch();
      setAddOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const [car_make, setCarMake] = useState("");
  const [edit_id, setEditId] = useState({
    name: "",
    id: "",
  });
  const setEdit = (item: any) => {
    setEditId(item);
    setAddOpen(false);
    setEditOpen(true);
  };
  const car_makes = useQuery<Main_Response>({
    queryKey: ["car-makes"],
    queryFn: async () => {
      const response = await apiClient.get("/carmakes/");
      return response.data;
    },
  });
  const [isEditOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  return (
    <>
      <div className="flex items-center mb-4">
        <div className="text-2xl font-bold">Car Makes</div>
        <Button onClick={() => setAddOpen(true)} className="ml-auto">
          Add Car
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {car_makes.data?.data?.map((make) => {
          return (
            <CarMakeCard
              setEdit={setEdit}
              key={make.id}
              item={make}
              refetch={car_makes.refetch}
            />
          );
        })}
      </div>
      <dialog
        open={isEditOpen}
        // ref={addRef}
        aria-modal
        className="top-0 z-20 bg-transparent"
      >
        <div className="h-screen w-screen grid place-items-center backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm shadow-2xl p-6 rounded-xl flex flex-col gap-4">
            <div className="flex items-center">
              <h2 className="text-3xl mx-auto font-extrabold text-center text-primary">
                Edit Car
              </h2>

              <button className="" onClick={() => setEditOpen(false)}>
                <BiX size={32} />
              </button>
            </div>
            <p className="text-center text-gray-600 text-sm">
              Quickly add new car makes to your collection.
            </p>
            <input
              value={edit_id.name}
              onChange={(e) =>
                setEditId((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              placeholder="Enter new car make name"
              className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
            />
            <Button
              fullWidth
              onClick={(e) => {
                edit_mutate.mutate();
              }}
              disabled={edit_mutate.isPending}
              className="mt-2 text-lg font-bold shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200"
            >
              {car_mutate.isPending ? "Edit..." : "Edit Car"}
            </Button>
          </div>
        </div>
      </dialog>
      <dialog
        open={addOpen}
        // ref={addRef}
        aria-modal
        className="top-0 z-20 bg-transparent"
      >
        <div className="h-screen w-screen grid place-items-center backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm shadow-2xl p-6 rounded-xl flex flex-col gap-4">
            <div className="flex items-center">
              <h2 className="text-3xl mx-auto font-extrabold text-center text-primary">
                Add Car
              </h2>
              <button className="" onClick={() => setAddOpen(false)}>
                <BiX size={32} />
              </button>
            </div>
            <p className="text-center text-gray-600 text-sm">
              Quickly add new car makes to your collection.
            </p>
            <input
              value={car_make}
              onChange={(e) => setCarMake(e.target.value)}
              type="text"
              placeholder="Enter new car make name"
              className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
            />
            <Button
              fullWidth
              onClick={(e) => {
                if (!car_make.trim())
                  return toast.error("name cannot be empty");
                car_mutate.mutate({
                  name: car_make,
                });
              }}
              disabled={car_mutate.isPending}
              className="mt-2 text-lg font-bold shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200"
            >
              {car_mutate.isPending ? "Adding..." : "Add Car"}
            </Button>
          </div>
        </div>
      </dialog>
    </>
  );
}
interface Props {
  item: {
    id: string;
    name: string;
    active: boolean;
  };
  refetch: () => void;
  setEdit: (item: any) => any;
}
const CarMakeCard = ({ item, refetch, setEdit }: Props) => {
  const del_car = useMutation({
    mutationFn: async () => {
      let resp = await apiClient.delete(`vehicle/carmake/${item.id}`);
      refetch();
      return resp.data;
    },
  });
  const change_state = useMutation({
    mutationFn: async () => {
      let resp = await apiClient.put(`vehicle/carmake/${item.id}`, {
        name: item.name,
        active: !item.active,
      });
      refetch();
      return resp.data;
    },
  });
  return (
    <>
      <div className="p-3 flex items-center shadow bg-white">
        <h2>{item.name}</h2>
        <div className="flex items-center gap-2 ml-auto">
          <Button size="sm" onClick={() => setEdit(item)} className="ml-auto">
            Edit Car
          </Button>
          <Button
            size="sm"
            onClick={() => change_state.mutate()}
            className={`ml-auto ${item.active ? "bg-yellow-500" : "bg-green-500"}`}
          >
            {change_state.isPending
              ? "updating"
              : item.active
                ? "Deactivate"
                : "Activate"}
          </Button>
          <Button
            size="sm"
            disabled={del_car.isPending}
            onClick={async () => {
              toast.promise(del_car.mutateAsync(), {
                pending: "Deleting...",
                success: "Deleted!",
                error: "Failed to delete",
              });
            }}
            className="ml-auto bg-red-500 text-white"
          >
            {del_car.isPending ? "Deleting..." : "Delete Car"}
          </Button>
        </div>
      </div>
    </>
  );
};
