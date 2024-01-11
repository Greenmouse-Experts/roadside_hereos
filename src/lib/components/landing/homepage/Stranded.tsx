import { FaCheck } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Stranded = () => {
  const data = [
    {
      name: "No hidden fees",
      desc: "Our commitment to straightforward pricing ensures you only pay for the services you need, with clarity and honesty every step of the way.",
    },
    {
      name: "Fast, safe and affordable",
      desc: "We provide a affordable, friendly, and reliable road assistance services to road users and on time.",
    },
  ];
  return (
    <>
      <div className="section bg-[#172748] text-white">
        <div className="box">
          <div className="lg:flex items-center flex-row-reverse">
            <div className="lg:w-6/12 flex justify-center">
                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969535/rsh/Rectangle_26_p5iqak.png" alt="stranded-img" className="lg:w-9/12" />
            </div>
            <div className="lg:w-6/12 mt-8 lg:mt-0">
              <span className="text-[#E4B080] border border-[#E4B080] px-2 py-[4px] rounded-[100px] fs-300">
                Who We Are
              </span>
              <div className="mt-6">
                <p className="text-xl lg:text-3xl fw-600">
                  Never Get Stranded Again!
                </p>
                <p className="my-5 mb-6 fs-400 lg:fs-500">
                  We are your trusted partner on the journey, offering prompt
                  and reliable services to drivers in need. From towing and jump
                  starts to tire changes and fuel delivery, our skilled team is
                  committed to getting you back on the road swiftly and safely.
                </p>
              </div>
              <div className="grid gap-5 lg:gap-7">
                {data.map((item) => (
                  <div className="flex gap-x-3">
                    <div className="w-5 lg:w-6 h-5 lg:h-6 mt-2 lg:mt-[4px] circle place-center bg-pri">
                      <FaCheck className="text-ter fs-300 lg:fs-500" />
                    </div>
                    <div className="w-[90%]">
                      <p className="fw-600 lg:text-lg">{item.name}</p>
                      <p className="fs-400 lg:fs-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:flex mt-8 lg:mt-10 gap-x-5">
                <Link
                  to={""}
                  className="btn-feel flex w-6/12 md:w-auto items-center gap-x-4 fs-500 !fw-600 bg-[#FEB470] text-black px-4 py-2"
                >
                  Get Started <HiOutlineArrowNarrowRight />
                </Link>
                <Link
                  to={""}
                  className="btn-feel flex mt-6 lg:mt-0 w-11/12 md:w-auto  items-center gap-x-4 fs-500 !fw-600 bg-[#FEB470] text-black px-4 py-2"
                >
                  Sign Up as a Service Provider <HiOutlineArrowNarrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stranded;
