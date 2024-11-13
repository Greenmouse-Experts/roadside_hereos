import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import LandingLayout from "../../lib/components/layout/landing";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../lib/services/api/serviceApi";
import { ServiceCatItem } from "../../lib/types/service";
import { FaArrowRightLong } from "react-icons/fa6";
import DownloadApp from "../../lib/components/landing/homepage/DownloadApp";

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
          <div className="h-[250px] lg:h-[300px]  bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1705590870/rsh/Group_59_3_ewquaq.png')] bg-cover lg:bg-fit">
            <div className="box h-full text-white flex items-center">
              <div>
                <div className="flex">
                  <div className="border-2 flex items-center gap-2 text-white px-2 py-1 lg:px-3 lg:py-2 rounded-[100px] border-[#FEB470]">
                    <BsClock className="text-[#FEB470] text-[14px]" />
                    <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#FEB470]">
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
                    service.data
                      .filter((where: ServiceCatItem) => where.isPublished)
                      .map((item: ServiceCatItem) => (
                        <div
                          onClick={() => navigate(`/request/${item.id}`)}
                          className="new-shade text-center h-[250px] rounded-[13px] bg-white w-full place-center hover:scale-105 duration-100 cursor-pointer"
                        >
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
                    onClick={() => navigate("/join-us")}
                    className="bg-[#172748] relative new-shade p-6 h-[250px] rounded-[13px] w-full place-center hover:scale-105 duration-100 cursor-pointer"
                  >
                    <div className="text-white lg:text-xl mb-3">
                      <p className="fw-600">Become a Service Provider</p>
                      <p className="mt-4 fs-400">
                        Join our nationwide network of service providers and
                        start earning with ALLDRIVE SOS!
                      </p>
                    </div>
                    <FaArrowRightLong className="absolute top-[190px] right-10 cursor-pointer text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="box">
              <p className="text-2xl fw-600">Explanation of Services</p>
              <p className="text-lg lg:w-9/12 fw-500 mt-4 mb-7">
                Here's a breakdown of our services to help you select the best
                option:
              </p>

              <div className="my-8">
                <div className="w-full">
                  <ul
                    className="flex flex-col md:mx-9 gap-6"
                    style={{ listStyle: "circle" }}
                  >
                    <li>
                      <span className="fw-700 text-base">Basic Tow</span>:
                      Designed for standard towing needs, this service helps
                      transport your vehicle to a nearby repair shop, home, or
                      other safe location when it cannot be driven.
                    </li>
                    <li>
                      <span className="fw-700 text-base">
                        Exotic Car Transport
                      </span>
                      : Specialized service to handle high-end, classic, or
                      exotic cars with extra care, using appropriate equipment
                      to ensure secure and damage-free transport.
                    </li>
                    <li>
                      <span className="fw-700 text-base">
                        Motorcycle Towing
                      </span>
                      : Towing service specifically for motorcycles, with secure
                      equipment to keep your bike safe during transport to a
                      repair facility or chosen destination.Towing service
                      specifically for motorcycles, with secure equipment to
                      keep your bike safe during transport to a repair facility
                      or chosen destination.
                    </li>
                    <li>
                      <span className="fw-700 text-base">Jump-Starts</span>: If
                      your vehicle battery dies, this service provides a
                      jump-start to get your car running again.
                    </li>
                    <li>
                      <span className="fw-700 text-base">
                        Battery Installation
                      </span>
                      : This service provides the delivery and installation of a
                      new battery if your current battery needs replacement. You
                      can request this service in two ways:
                      <ol
                        className="md:mx-6 flex flex-col gap-4 mt-2"
                        style={{ listStyle: "decimal" }}
                      >
                        <li>
                          <span className="fw-700">
                            Option 1: Installation Only
                          </span>
                          - If you already have a new battery, you can request a
                          technician to install it on-site.
                        </li>
                        <li>
                          <span className="fw-700">
                            Option 2: Battery Delivery and Installation
                          </span>
                          - If you don’t have a battery, a technician will bring
                          the right battery for your vehicle, install it, and
                          recycle your old one. Be sure to provide accurate
                          information about your battery specifications to
                          ensure a smooth and quick service.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <span className="fw-700 text-base">
                        Flat Tire Assistance
                      </span>
                      : If you experience a flat, this service offers help to
                      get you moving again. Choose between the following
                      options:
                      <ol
                        className="md:mx-6 flex flex-col gap-4 my-2"
                        style={{ listStyle: "decimal" }}
                      >
                        <li>
                          <span className="fw-700">
                            Option 1: Tire Inflation
                          </span>
                          - The technician will inflate a low or flat tire to
                          get you back on the road if no further damage is
                          present.
                        </li>
                        <li>
                          <span className="fw-700">
                            Option 2: Tire Replacement
                          </span>
                          - If the tire is damaged or you need to switch to a
                          spare, the technician will replace the flat with your
                          spare tire.
                        </li>
                      </ol>
                    </li>

                    <li>
                      <span className="fw-700 text-base">Vehicle Lockout</span>:
                      This service helps you regain access to your locked
                      vehicle and includes options based on your situation:
                      <ol
                        className="md:mx-6 flex flex-col gap-4 my-2"
                        style={{ listStyle: "decimal" }}
                      >
                        <li>
                          <span className="fw-700">
                            Option 1: Vehicle Unlock Only
                          </span>
                          - If you simply need your vehicle unlocked without
                          additional services, the technician will open the door
                          so you can regain entry.
                        </li>
                        <li>
                          <span className="fw-700">
                            Option 2: Vehicle Unlock and Rekeying
                          </span>
                          - If you've lost your key, the technician can unlock
                          the vehicle and provide rekeying services to ensure a
                          matching set of keys.
                        </li>
                        <li>
                          <span className="fw-700">
                            Option 3: Rekeying Only
                          </span>
                          - If you need a new key set without unlocking the
                          vehicle, the technician will provide rekeying services
                          to fit your existing locks.
                        </li>
                      </ol>
                      Please specify the exact service you need when requesting
                      vehicle lockout assistance to ensure we dispatch the right
                      technician.
                    </li>

                    <li>
                      <span className="fw-700 text-base">Fuel Delivery</span>:
                      If you run out of gas, we’ll deliver enough fuel to get
                      you to the nearest station or a safe location where you
                      can refuel.
                    </li>

                    <li>
                      <span className="fw-700 text-base">
                        Vehicle Fluid Top-Up
                      </span>
                      : Helps you top up critical fluids like oil, coolant, or
                      windshield washer fluid to keep your vehicle running
                      smoothly.
                    </li>

                    <li>
                      <span className="fw-700 text-base">Winch-Out Rescue</span>
                      : This service assists if your vehicle is stuck in mud,
                      snow, sand, or a ditch. Using a winch, we can safely pull
                      your vehicle back onto stable ground.
                    </li>

                    <li>
                      <span className="fw-700 text-base">Mobile Detailing</span>
                      : On-site car detailing to clean and maintain the
                      appearance of your vehicle, with both interior and
                      exterior cleaning options for convenience.
                    </li>

                    <li>
                      <span className="fw-700 text-base">Mobile Mechanic</span>:
                      Offers mobile mechanic services for minor repairs and
                      diagnostics at the vehicle’s location. Common issues like
                      brake repairs, oil change, belt replacements, or battery
                      installation can be handled without the need for a tow.
                    </li>

                    <li>
                      <span className="fw-700 text-base">
                        Mobile Motorcycle Repair
                      </span>
                      : Designed for motorcycle riders, this service provides
                      on-the-spot repairs for minor issues to get you back on
                      the road quickly.
                    </li>

                    <li>
                      <span className="fw-700 text-base">Accident Cleanup</span>
                      : Following an accident, this service offers a
                      professional cleanup to remove debris and any hazardous
                      materials, ensuring safety for all drivers in the area.
                    </li>
                  </ul>
                </div>
              </div>

              <span className="text-lg">
                AllDrive SOS is here to make roadside assistance straightforward
                and accessible, giving you reliable help wherever and whenever
                you need it. Have a question or need more help? Contact our
                support team.
              </span>
            </div>
          </div>
          <DownloadApp />
        </div>
      </LandingLayout>
    </>
  );
};

export default ServicesPage;
