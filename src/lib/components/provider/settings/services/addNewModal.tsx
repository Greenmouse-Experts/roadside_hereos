import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, FC, useState } from "react";
import { getCategories } from "../../../../services/api/serviceApi";
import { ServiceCatItem } from "../../../../types/service";
import Button from "../../../ui/Button";
import CurveLoader from "../../../ui/loader/curveLoader/CurveLoader";

interface Props{
    refetch: () => void;
    close: () => void;
}
const AddNewSeviceModal:FC<Props> = ({close, refetch}) => {
    const { data: service, isLoading } = useQuery({
        queryKey: ["getCat"],
        queryFn: getCategories,
      });
      const [selected, setSelected] = useState<string[]>([])
      const handleCheck = (e:ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if(e.target.checked){
            if(selected.includes(val)){
                setSelected((old) => [...old, val])
            }
        }else{
            const filtered = selected.filter((item) => item !== val)
            setSelected(filtered)
        }
      }
      const handleSubmit = () => {
        refetch();
        close()
      }
  return (
    <div>
        {isLoading && (
            <div className="py-12 flex justify-center items-center text-black">
              <div>
                <div className="flex place-center">
                  <CurveLoader />
                </div>
                <p className="text-center mt-5 fw-500">
                  Fetching Services...
                </p>
              </div>
            </div>
          )}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-4">
            {service &&
              service.data.length &&
              service.data.map((item: ServiceCatItem) => (
                <div className="bg-white relative flex gap-x-2 items-center p-2 shadow">
                  <div className="w-12">
                    <input type="checkbox" className="w-6 h-6" value={item.id} onChange={(e) => handleCheck(e)} />
                  </div>
                  <div>
                    <p className="fw-500">{item.name}</p>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <Button title={'Continue'} onClick={handleSubmit}/>
          </div>
    </div>
  )
}

export default AddNewSeviceModal