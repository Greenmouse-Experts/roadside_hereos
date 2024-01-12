import { BsClock } from "react-icons/bs";
import Button from "../../ui/Button";
import HeroSlide from "./HeroSlide";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-[480px] relative bg-hero z-0">
      <div className="h-[480px] w-full overflow-hidden absolute z-10 top-0 left-0">
            <HeroSlide/>
          </div>
        <div className="box relative z-10 h-full text-black flex items-center">
          <div className="">
            <div className="flex">
              <div className="border-2 flex items-center gap-2 text-white px-3 py-2 rounded-[100px] border-[#172748]">
                <BsClock className="text-[#4C8700] text-[14px]" />
                <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#172748]">
                  Available 24/7 for emergency road service
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[758px] mt-10 lg:mt-3">
                <p className="text-2xl md:text-3xl lg:text-[45px] fw-600 leading-[40px] lg:leading-normal">Your Safety, Our Priority <br/>&#8211; Trust Us to Get You<br/> Back on the Road.</p>
            </div>
            <div className="lg:flex gap-x-6 itms-center mt-10">
                <Button title={'Call us now'} altClassName="btn-feel fs-500 bg-[#FEB470] border-2 border-[#FEB470] text-black px-6 py-2" />
                <Button title={'Sign up as a Service Provider'} altClassName="fw-500 text-[#172748] mt-3 lg:mt-0 border-2 border-[#172748] rounded-[100px] px-4 py-2" onClick={() => navigate('/auth/register')}/>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969535/rsh/Group_35_tlzwtg.png" alt="show" className="absolute top-[39%] right-[6%] animate-pulse cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
