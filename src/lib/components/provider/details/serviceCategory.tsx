const ServiceCategory = () => {
  const skill = ["E-Fuel", "Battery Replacement", "Tire Change"];
  return (
    <>
      {skill.map((item) => (
        <div className="flex gap-x-3 items-center mb-3" key={item}>
          <div className="relative">
            <div className="absolute w-4 h-4 circle bg-review -top-1 -left-1"></div>
            <div className="relative w-4 h-4 circle bg-review  border border-white"></div>
          </div>
          <p className="">{item}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceCategory;
