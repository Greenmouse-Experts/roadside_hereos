import { Button } from "@material-tailwind/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FC, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { formatAsNgnMoney } from "../../../../utils";
import RenderTimer from "./Extra/RenderTime";
import { toast } from "react-toastify";
import useRequestStore from "../../../../store/serviceStore";
import { getServiceQoutes } from "../../../../services/api/serviceApi";
import CurveLoader from "../../../ui/loader/curveLoader/CurveLoader";

interface Props {
  next: () => void;
  prev: () => void;
}

const ProviderList: FC<Props> = ({ next, prev }) => {
  const request = useRequestStore((state) => state.request)
  const list = [
    {
      name: "Palistine Abrevate",
      star: 3,
      img: "https://i.pravatar.cc/48994374",
      price: "45000"
    },
    {
      name: "Olucte Indomi",
      star: 5,
      img: "https://i.pravatar.cc/48?u=99437",
      price: "42000",
    },
    {
      name: "Koli Product",
      star: 3,
      img: "https://i.pravatar.cc/48?u=99374",
      price: "44500"
    },
    {
      name: "Sigmond Scar",
      star: 5,
      img: "https://i.pravatar.cc/48?u=494374",
      price: "43500"
    },
    {
      name: "Binge Moluse",
      star: 4,
      img: "https://i.pravatar.cc/49",
      price: "45000"
    },
  ];
  const [loading, setLoading] = useState(false)
  const [providers, setProviders] = useState([])
  const star = Array(5).fill("");
  const [checked, setChecked] = useState<string | number>()
  const [play, setPlay] = useState(false)
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
  useEffect(() => {
    setPlay(true)
  },[])
  return (
    <>
      <div className="bg-gray-100 lg:p-10 lg:pb-20 p-4 pb-8 rounded-md">
        <div className="grid gap-4">
          {play && <RenderTimer action={fetchProviders} play={play}/>}
          {!play && list.map((item, i) => (
           <div key={i} className="bg-white flex justify-between shadow p-4 lg:px-8 rounded-xl">
             <div className="flex gap-x-12">
              <input type="checkbox" checked={checked === i} onChange={() => setChecked(i)} name="provider" className="w-6 h-6 mt-1" />
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
          ))}
          {(!play && !loading && !!providers.length) && (
            <div>
              the Providers
            </div>
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
            onClick={next}
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
