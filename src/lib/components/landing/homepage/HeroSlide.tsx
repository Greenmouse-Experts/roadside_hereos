import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import { register } from "swiper/element/bundle";
import { Autoplay } from "swiper/modules";
import { BsClock } from "react-icons/bs";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
// register Swiper custom elements
register();

const HeroSlide = () => {
  const items = [
    {
      text: "Your Safety, Our Priority - Trust Us to Get You Back on the Road.",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984002/rsh/Property_1_Group_60_tapq5c.png",
    },
    {
      text: "Quick Fix for On-the-Go Emergencies. Fast and Reliable",
      img: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984001/rsh/Property_1_Group_61_dri7o0.png',
    },
    {
      text: "Never Run out of Fuel Again as We've got You Covered.",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984001/rsh/Property_1_Group_62_j1esm6.png",
    },
    {
      text: "Locked Out? We're Here 24/7 to Get You Back Behind the Wheel!",
      img: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984001/rsh/Property_1_Group_63_cvitzu.png',
    },
    {
      text: "On-the-Spot Battery Replacement. Ready to Power Your Journey.",
      img: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984002/rsh/Property_1_Group_64_guu2nz.png',
    }
  ];
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        // effect={"fade"}
        autoplay={{delay: 6000}}
        modules={[Autoplay]}
        className="h-[510px]"
      >
        {items &&
          items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`bg-[url('${item.img}')] bg-cover lg:bg-fit w-full h-full`}>
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
                    <div className="w-full lg:w-[658px] mt-10 lg:mt-3">
                      <p className="text-2xl md:text-3xl lg:text-[45px] fw-600 leading-[40px] lg:leading-normal">
                       {item.text}
                      </p>
                    </div>
                    <div className="lg:flex gap-x-6 itms-center mt-10">
                      <Button
                        title={"Call us now"}
                        altClassName="btn-feel fs-500 bg-[#FEB470] border-2 border-[#FEB470] text-black px-6 py-2"
                      />
                      <Button
                        title={"Sign up as a Service Provider"}
                        altClassName="fw-500 text-[#172748] mt-3 lg:mt-0 border-2 border-[#172748] rounded-[100px] px-4 py-2"
                        onClick={() => navigate("/auth/register")}
                      />
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969535/rsh/Group_35_tlzwtg.png"
                      alt="show"
                      className="absolute top-[39%] right-[6%] animate-pulse cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default HeroSlide;
