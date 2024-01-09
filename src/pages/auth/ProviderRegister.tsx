import { Link } from "react-router-dom"
import ProviderRegisterForm from "../../lib/components/auth/ProviderRegisterForm"

const ProviderRegister = () => {
  return (
    <>
    <div className="bg-primary h-screen">
      <div className="w-full h-full bg-login">
      <div className="box h-full place-center">
        <Link to="/" className="lg:hidden absolute top-6 left-2 lg:left-6">
          {/* <img
            src={logo}
            alt="logo"
            className="w-48"
            width={400}
            height={100}
          /> */}
          <p>Roadside Heroes</p>
        </Link>
        
        <div className="lg:w-7/12 mx-auto bg-white lg:px-16 p-6">
        {/* <img
            src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1689001814/globfolio/Group_48319_zrfe2h.png'
            alt="logo"
            className="w-44 mx-auto my-6 hidden lg:block"
            width={400}
            height={80}
          /> */}
          <p className="fw-600 text-center text-xl">Roadside Heroes</p>
          <div className="mt-6 lg:mt-6">
            <p className="text-xl fw-600">Create a Provider Account</p>
            <p className="mt-3 fs-500">Fill in your credentials to create an account on this platform</p>
          </div>
          <div className="my-8 lg:mt-8 mb-5 mx-auto">
            <ProviderRegisterForm />
          </div>
          <div>
                <p className="fs-500">Already registered? <Link to={'/auth/login'} className="underline fw-500 text-primary">Go to login</Link></p>
            </div>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default ProviderRegister