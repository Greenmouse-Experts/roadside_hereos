import { Link } from "react-router-dom";
import happy from "../../../assets/happystate.gif";

const OnboardSuccess = () => {
  return (
    <>
      <div className="px-3 pb-6">
        <img src={happy} alt="check" className="w-6/12 mx-auto" />
        <p className="text-center text-black fw-600 text-lg lg:text-xl">
          Registration Successful !!
        </p>
        <div className="mt-5">
            <p className="text-center">
            Thanks for signing up. Welcome to our community. We are happy to
            have you on board. Click on the link below to download the App, install it and complete KYC
            </p>
          <div className="flex justify-center mt-8">
            <Link
              to="https://play.google.com/store"
              className="fw-500 text-[#172748] mt-3 lg:mt-0 border-2 border-[#172748] rounded-[100px] px-4 py-2"
            >
              Proceed to Download
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardSuccess;
