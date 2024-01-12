import happy from '../../../assets/happystate.gif'

const RegisterSuccess = () => {
  return (
    <>
      <div className="px-3 pb-6">
        <img
          src={happy}
          alt="check"
          className="w-7/12 mx-auto"
        />
        <p className="text-center text-black fw-600 text-lg lg:text-xl">Registration Successful !!</p>
        <div className="mt-5">
          <p className="text-center">
            Lorem ipsum repellat corrupti voluptatibus reprehenderit, quis
            cupiditate vero sint, repellendus maxime magnam molestiae ullam quos
            aliquam dolor omnis explicabo numquam.
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterSuccess;
