import { BsClock } from "react-icons/bs";
import RequestForm from "../../lib/components/landing/services/RequestForm";
import LandingLayout from "../../lib/components/layout/landing";
import { useParams } from "react-router-dom";

const RequestPage = () => {
  const {id} = useParams()
  return (
    <>
      <LandingLayout>
        <div>
          <div className="h-[250px] lg:h-[300px]  bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1705590870/rsh/Group_59_3_ewquaq.png')] lg:bg-fit">
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
                <p className="text-3xl fw-700 mt-4">
                  Need Help Now? Request Our Expert Services.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="box">
              <div className="lg:w-11/12 mx-auto">
                <RequestForm activeId={`${id}`}/>
              </div>
            </div>
          </div>
        </div>
      </LandingLayout>
    </>
  );
};

export default RequestPage;
