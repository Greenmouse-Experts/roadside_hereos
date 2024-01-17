import { useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";
import { getCategories } from "../../../services/api/serviceApi";
import { ServiceCatItem } from "../../../types/service";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Assistance = () => {
  const { data: service } = useQuery({
    queryKey: ["getCat"],
    queryFn: getCategories,
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="section text-black bg-[#F8F8F8]">
        <div className="box lg:pt-12">
          <div>
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-[50%]">
                <p className="text-xl lg:text-3xl fw-700">
                  Get Instant Assistance
                </p>
                <p className="mt-3 fs-400 fw-500">
                  Request instant roadside assistance now! Choose through the
                  provided options, the problem you&apos;re having and
                  we&apos;ll be there in minutes.
                </p>
              </div>
              <Button
                title={"View all"}
                altClassName="btn-feel mt-5 lg:mt-0 fs-500 fw-500 bg-[#FEB470] text-black px-6 py-2"
              />
            </div>
            <div className="mt-6 lg:mt-12">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                {service &&
                  !!service.data.length &&
                  service.data.filter((where:ServiceCatItem) => where.isPublished ).map((item: ServiceCatItem) => (
                    <div onClick={() => navigate(`/request/${item.id}`)} className="new-shade text-center h-[250px] rounded-[13px] bg-white w-full place-center hover:scale-105 duration-100 cursor-pointer">
                      <div>
                        <img
                          src={item.icon}
                          alt="icon"
                          className="w-16 mx-auto"
                        />
                        <p className="mt-4 fw-600">{item.name}</p>
                      </div>
                    </div>
                  ))}
                <div onClick={() => navigate('/request')} className="bg-[#172748] relative new-shade p-6 h-[250px] rounded-[13px] w-full place-center hover:scale-105 duration-100 cursor-pointer">
                  <div className="text-white lg:text-xl mb-3">
                    <p className="fw-600">Sign Up as Service Personnel</p>
                    <p className="mt-4 fs-400">
                      Earn on Roadside Heroes by joining our team of experienced
                      Service Personnels
                    </p>
                  </div>
                  <FaArrowRightLong className="absolute top-[190px] right-10 cursor-pointer text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assistance;
