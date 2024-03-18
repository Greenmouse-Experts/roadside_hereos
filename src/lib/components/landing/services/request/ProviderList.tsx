import { Button } from "@material-tailwind/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FC, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { formatAsNgnMoney } from "../../../../utils";
import RenderTimer from "./Extra/RenderTime";
import { toast } from "react-toastify";
import useRequestStore from "../../../../store/serviceStore";
import { getServiceQoutes, selectThisQoute } from "../../../../services/api/serviceApi";
import CurveLoader from "../../../ui/loader/curveLoader/CurveLoader";

interface Props {
  next: () => void;
  prev: () => void;
}

const ProviderList: FC<Props> = ({ next, prev }) => {
  const request = useRequestStore((state) => state.request)
  const [loading, setLoading] = useState(false)
  const [providers, setProviders] = useState([])
  const star = Array(5).fill("");
  const [checked, setChecked] = useState<string | number>()
  const [play, setPlay] = useState(false)
  const [forward, setForward] = useState(false)
  const fetchProviders = async () => {
    setPlay(false)
    setLoading(true)
    await getServiceQoutes(request.id)
    .then((res) => {
      toast.success('Providers fetched')
      setProviders(res?.data)
      setLoading(false)
    })
    .catch((err:any) => {
      setLoading(false)
      toast.error(err.response.data.message)
    })
  }
  const selectProvider = async (id:string) => {
    setChecked(id)
    await selectThisQoute(id)
    .then(() => {
      setForward(true)
    })
    .catch((err:any) => {
      toast.error(err.response.data.message)
    })
  }
  useEffect(() => {
    setPlay(true)
  },[])
  const handleNext = () => {
    if(forward){
      next()
    }else{
      toast.info('Please select a service provider')
    }
  }
  return (
    <>
      <div className="bg-gray-100 lg:p-10 lg:pb-20 p-4 pb-8 rounded-md">
        <div className="grid gap-4">
          {play && <RenderTimer action={fetchProviders} play={play}/>}
          {(!play && !loading && !!providers.length) && (
            providers.map((item:any) => (
              <div key={item.id} className="bg-white flex justify-between shadow p-4 lg:px-8 rounded-xl">
              <div className="flex gap-x-12">
               <input type="checkbox" checked={checked === item.id} onChange={() => selectProvider(item.id)} name="provider" className="w-6 h-6 mt-1" />
               <div className="flex gap-x-4">
                 <img src={item.img} alt="image" className="w-16 h-16" />
                 <div>
                   <p>{item.name}</p>
                   <div className="flex mt-2 gap-x-2">
                     {star.map((items, i) => (
                       <p key={i} className="text-gray-500">
                         <FaStar className={`${items} text-xl ${i < item.star && 'text-orange-400'}`} />
                       </p>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
             <p className="text-xl fw-600">{formatAsNgnMoney(item.price)}</p>
            </div>
            ))
          )}
          {loading && (
            <div className="py-12 flex justify-center items-center text-black">
              <div>
                <div className="place-center">
                  <CurveLoader />
                </div>
                <p className="text-center mt-5 fw-500">
                  Providers Requests...
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-16 flex justify-between">
          <Button onClick={prev} className="btn-feel flex gap-x-2 items-center">
            <FaArrowLeftLong /> Prev
          </Button>
          <Button
            onClick={handleNext}
            type={"submit"}
            className="btn-feel flex gap-x-2 items-center"
          >
            Next <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProviderList;
