import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import LandingLayout from "../../lib/components/layout/landing";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../lib/services/api/serviceApi";
import { ServiceCatItem } from "../../lib/types/service";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesPage = () => {
  const { data: service } = useQuery({
    queryKey: ["getCat"],
    queryFn: getCategories,
  });
  const navigate = useNavigate();
  return (
    <>
      <LandingLayout>
        <div>
          <div className="h-[250px] lg:h-[300px]  bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1705326924/rsh/Group_59_bckau4.png')] bg-cover lg:bg-fit">
            <div className="box h-full flex items-center">
              <div>
                <div className="flex">
                  <div className="border-2 flex items-center gap-2 text-white px-2 py-1 lg:px-3 lg:py-2 rounded-[100px] border-[#172748]">
                    <BsClock className="text-[#4C8700] text-[14px]" />
                    <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#172748]">
                      Available 24/7 for emergency road service
                    </p>
                  </div>
                </div>
                <p className="text-xl lg:text-3xl fw-700 mt-4">
                  Need Help Now? Request Our Expert Services.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="box">
              <div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                  {service &&
                    !!service.data.length &&
                    service.data.map((item: ServiceCatItem) => (
                      <div  onClick={() => navigate(`/request/${item.id}`)} className="new-shade text-center h-[250px] rounded-[13px] bg-white w-full place-center hover:scale-105 duration-100 cursor-pointer">
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
                  <div
                    onClick={() => navigate("/request")}
                    className="bg-[#172748] relative new-shade p-6 h-[250px] rounded-[13px] w-full place-center hover:scale-105 duration-100 cursor-pointer"
                  >
                    <div className="text-white lg:text-xl mb-3">
                      <p className="fw-600">Sign Up as Service Personnel</p>
                      <p className="mt-4 fs-400">
                        Earn on Roadside Heroes by joining our team of
                        experienced Service Personnels
                      </p>
                    </div>
                    <FaArrowRightLong className="absolute top-[190px] right-10 cursor-pointer text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="section">
            <div className="box">
              <div></div>
            </div>
          </div> */}
        </div>
      </LandingLayout>
    </>
  );
};

export default ServicesPage;
