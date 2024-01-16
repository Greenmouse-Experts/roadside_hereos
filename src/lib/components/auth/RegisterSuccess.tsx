import { Link } from "react-router-dom";
import happy from "../../../assets/happystate.gif";

const RegisterSuccess = () => {
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
            have you on board. A verification mail has been sent to your inbox,
            please click on the provided link to verify your account.
          </p>
          <div className="flex justify-center mt-8">
            <Link
              to="/auth/login"
              className="fw-500 text-[#172748] mt-3 lg:mt-0 border-2 border-[#172748] rounded-[100px] px-4 py-2"
            >
              Procced to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSuccess;
