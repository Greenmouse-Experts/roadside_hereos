import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../../services/api/serviceApi";
import { ServiceCatItem } from "../../../../types/service";
import { carsList } from "../../../../services/hardData/cars";

const ServiceInfo = () => {
  const { data: services } = useQuery({
    queryKey: ["getCat"],
    queryFn: getCategories,
  });

  return (
    <>
      <div className="bg-gray-100 p-4 pb-8 rounded-md">
        <div>
          <p className="fw-600">Service Category</p>
          <div className="grid gap-4 grid-cols-2 mt-3">
            {services &&
              services?.data.map((item: ServiceCatItem) => (
                <div className="flex gap-x-2" key={item.id}>
                  <input type="checkbox" className="w-6 h-6" value={item.id} />
                  <label>{item.name}</label>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="fw-600">My Brands</p>
          <div className="grid gap-4 grid-cols-3 mt-3">
            {carsList.map((item: string) => (
              <div className="flex gap-x-2" key={item}>
                <input type="checkbox" className="w-6 h-6" value={item} />
                <label>{item}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceInfo;
