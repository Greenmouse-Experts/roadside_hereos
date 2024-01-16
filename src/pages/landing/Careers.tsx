import { BsClock } from "react-icons/bs";
import LandingLayout from "../../lib/components/layout/landing";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CareersPage = () => {
  return (
    <>
      <LandingLayout>
        <div>
          <div className="h-[250px] lg:h-[300px]  bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1705326925/rsh/Group_59_2_bub8lr.png')] bg-fit">
            <div className="box h-full flex items-center">
              <div>
                <div className="flex">
                  <div className="border-2 flex items-center gap-2 text-white px-3 py-2 rounded-[100px] border-[#172748]">
                    <BsClock className="text-[#4C8700] text-[14px]" />
                    <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#172748]">
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
                <p className="fw-600 text-3xl">Diverse Opportunities</p>
                <div className="mt-6 w-1/12 border-2 border-[#172748]"></div>
              </div>
              <div className="mt-5">
                <p>
                  At Roadside Heroes, we firmly believe that talented
                  professionals are our key resources that sustain our
                  businesses and propel the organisation forward. Exciting
                  career opportunities and enriching jobs in a range of business
                  areas await experienced professionals as well as newcomers.
                </p>
                <p className="mt-3">
                  With our diverse and global business lines, one gets an
                  invaluable opportunity to work with people of different
                  nationalities and cultures. By joining us, you become a member
                  of one of the most respected and reputed global business
                  conglomerates
                </p>
              </div>
              <div className="mt-6 lg:flex items-center lg:mt-16">
                <div className="lg:w-5/12">
                  <img
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705332400/rsh/Group_48097335_1_hg4gsv.png"
                    alt="image"
                    className="w-full lg:w-10/12"
                  />
                </div>
                <div className="lg:w-5/12">
                  <p className="text-3xl fw-600">Join as a Service Personnel</p>
                  <p className="mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque varius erat in sem accumsan vestibulum vel in leo.
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
                        Our commitment to straightforward pricing ensures you
                        only pay for the services you need, with clarity and
                        honesty every step of the way.
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
          <div className="section bg-[#EBEDEF]">
            <div className="box">
              <div className="text-center">
                <p className="fw-600 text-3xl">Our Client and Partners</p>
                <p className="w-6/12 mx-auto mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
              <div className="mt-12">
                <div className="grid grid-cols-5 gap-x-24">
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705333714/rsh/image_7_pzdd3k.png" alt="img" className="w-full" />
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705333714/rsh/image_5_ysidiu.png" alt="img" className="w-full" />
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705333714/rsh/image_7_pzdd3k.png" alt="img" className="w-full" />
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705333714/rsh/image_5_ysidiu.png" alt="img" className="w-full" />
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705333714/rsh/image_7_pzdd3k.png" alt="img" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingLayout>
    </>
  );
};

export default CareersPage;
