import LandingLayout from "../../lib/components/layout/landing";
import paid from "../../assets/paid.gif";
import Button from "../../lib/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useServiceSec } from "../user/components/request-comps/service-sec";

const RequestSuccess = () => {
  const navigate = useNavigate();
  const [serv_info, setServiceInfo] = useServiceSec();
  return (
    <LandingLayout>
      <div className="section">
        <div className="box">
          <div className="lg:w-10/12 mx-auto shadow-xl p-4 lg:p-8">
            <div>
              <img src={paid} alt="paid" className="mx-auto" />
              <p className="text-2xl fw-600 text-center">
                Service Requested Successfully!
              </p>
              <div className="mt-4">
                <p className="lg:w-10/12 mx-auto text-center">
                  You have successfully requested a service. If you are a new
                  user, please check your mailbox to verify your details.
                  Otherwise, click the on the right button to redirect to your
                  dashboard and monitor service details.
                </p>
              </div>
              <div className="lg:w-10/12 mx-auto mt-10">
                <div className="flex items-center gap-x-2 md:gap-x-0 justify-between">
                  <div className="w-6/12 md:w-5/12">
                    <Button
                      title={"Dashboard"}
                      onClick={() => {
                        setServiceInfo(null);
                        navigate("/user");
                      }}
                    />
                  </div>
                  <div className="w-6/12 md:w-5/12">
                    <Button
                      title={"Request Status"}
                      onClick={() => {
                        const id = serv_info.data.serviceRequest.id;
                        console.log(id);
                        navigate(`/user/requests/${id}`);
                        setServiceInfo(null);
                      }}
                      altClassName="border-2 border-black py-2 fw-500 text-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default RequestSuccess;
