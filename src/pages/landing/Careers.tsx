import { BsClock } from "react-icons/bs";
import LandingLayout from "../../lib/components/layout/landing";
import { FaCheck, FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DownloadApp from "../../lib/components/landing/homepage/DownloadApp";

const CareersPage = () => {
  const data = [
    {
      name: "Set Your Own Rates",
      desc: "Control your earnings by setting competitive service rates that reflect your expertise.",
    },
    {
      name: "Steady Work Opportunities",
      desc: "Receive consistent job alerts straight to your phone, ensuring a constant flow of work from a thriving network.",
    },
    {
      name: "Real-Time Tracking",
      desc: "Our user-friendly app allows you to track job locations and customer information in real-time, ensuring efficient service and clear communication.",
    },
    {
      name: "Less Downtime",
      desc: "Never waste time searching for your next job. The ALLDRIVE SOS app seamlessly connects you with new requests while you're finishing current ones, maximizing your earning potential.",
    },
    {
      name: "Easy-to-Use App",
      desc: "Manage jobs, navigate to customer locations, and access all necessary information through our streamlined and intuitive app, making your workday effortless",
    },
    {
      name: "Flexible Schedule",
      desc: "Be your own boss and work on your terms. Our platform allows you to choose the jobs that fit your availability, giving you the freedom to manage your time effectively.",
    },
    {
      name: "Fair Compensation",
      desc: "Enjoy competitive rates with prompt payments to ensure you're rewarded for your skills and hustle.",
    },
  ];
  return (
    <>
      <LandingLayout>
        <div>
          <div className="h-[250px] lg:h-[300px]  bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1705679269/rsh/Group_59_7_fv41oc.png')] bg-cover lg:bg-fit">
            <div className="box h-full text-white flex items-center">
              <div>
                <div className="flex">
                  <div className="border-2 flex items-center gap-2 text-white px-3 py-2 rounded-[100px] border-[#FEB470]">
                    <BsClock className="text-[#FEB470] text-[14px]" />
                    <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#FEB470]">
                      Available 24/7 for emergency road service
                    </p>
                  </div>
                </div>
                <p className="text-4xl fw-700 mt-5">Careers</p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="box">
              <div className="border-b border-[#172748]">
                <p className="fw-600 text-xl lg:text-3xl">
                  Be a Roadside Hero: Save Motorists & Earn with ALLDRIVE SOS
                </p>
                <div className="mt-2 lg:mt-6 w-6/12 lg:w-1/12 border-2 border-[#172748]"></div>
              </div>
              <div className="mt-5">
                <p>
                  Join the ALLDRIVE SOS team and become part of a growing
                  network of nationwide roadside assistance providers. As a
                  technician on our platform, you'll have the opportunity to
                  help motorists in need while enjoying numerous benefits:
                </p>
                <div className="mt-4 lg:mt-10 grid lg:grid-cols-2 gap-5 lg:gap-7">
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
              </div>
              <div className="mt-6 lg:flex items-center lg:mt-16">
                <div className="lg:w-5/12">
                  <img
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705332400/rsh/Group_48097335_1_hg4gsv.png"
                    alt="image"
                    className="w-full lg:w-10/12"
                  />
                </div>
                <div className="mt-5 lg:mt-0 lg:w-5/12">
                  <p className="text-xl lg:text-3xl fw-600">
                    Join as a Service Personnel
                  </p>
                  <p className="mt-3 lg:mt-6">
                    ALLDRIVE SOS values quality and only partners with trusted
                    service providers. To ensure customer safety and
                    satisfaction, we require all service providers to have a
                    registered business in good standing and comply with their
                    state's insurance requirements.
                  </p>
                  <div className="my-8 lg:my-8 flex gap-x-4">
                    <div>
                      <FaCircleCheck className="text-[#172748] text-xl mt-[4px]" />
                    </div>
                    <div>
                      <p className="fs-700 fw-600 text-[#172748]">
                        Your Career Path
                      </p>
                      <p className="fs-400 mt-3">
                        Ready to make a difference on the road while earning top
                        dollar? Click on the button below to signup today and
                        start making a difference on the road while earning on
                        your terms. Join now, start accepting jobs, and begin
                        your journey as a roadside hero with ALLDRIVE SOS.
                      </p>
                    </div>
                  </div>
                  <div className="pt-5">
                    <Link
                      to="/auth/register"
                      className="text-white fw-600 rounded-3xl px-6 py-3 whitespace-nowrap bg-[#172748]"
                    >
                      Sign Up as a Service Provider &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DownloadApp />
        </div>
      </LandingLayout>
    </>
  );
};

export default CareersPage;
