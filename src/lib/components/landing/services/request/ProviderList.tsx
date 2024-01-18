import { Button } from "@material-tailwind/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FC, useState } from "react";
import { FaStar } from "react-icons/fa";
import { formatAsNgnMoney } from "../../../../utils";

interface Props {
  next: () => void;
  prev: () => void;
}

const ProviderList: FC<Props> = ({ next, prev }) => {
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
  const star = Array(5).fill("");
  const [checked, setChecked] = useState<string | number>()
  return (
    <>
      <div className="bg-gray-100 lg:p-10 lg:pb-20 p-4 pb-8 rounded-md">
        <div className="grid gap-4">
          {list.map((item, i) => (
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
