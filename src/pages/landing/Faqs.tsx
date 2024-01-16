import { BsClock } from "react-icons/bs";
import LandingLayout from "../../lib/components/layout/landing";
import FaqList from "../../lib/components/landing/faqs/FaqList";

const FaqPage = () => {
  return (
    <>
      <LandingLayout>
        <div>
          <div className="h-[250px] lg:h-[300px]  bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1705326924/rsh/Group_59_bckau4.png')] bg-fit">
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
                <p className="text-3xl fw-700 mt-4">
                  Frequently Asked Questions
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="box py-10">
              <div className="lg:w-11/12 mx-auto">
                <FaqList />
              </div>
            </div>
          </div>
        </div>
      </LandingLayout>
    </>
  );
};

export default FaqPage;
