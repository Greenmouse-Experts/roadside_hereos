import React from "react";
import { Link } from "react-router-dom";

const ProviderFaqList = () => {
  const [open, setOpen] = React.useState(1);

  const faqArray = [
    {
      label: "What is AllDrive SOS?",
      key: 1,
    },
    {
      label: "What types of services can I offer on the AllDrive SOS platform?",
      key: 2,
    },
    {
      label:
        "What are the insurance requirements to offer services on the platform?",
      key: 3,
    },
    {
      label: "How do I submit my insurance documents to AllDrive SOS?",
      key: 4,
    },
    {
      label: "What happens if my insurance expires or lapses?",
      key: 5,
    },
    {
      label: "What is On-Hook Insurance and why is it required?",
      key: 6,
    },
    {
      label:
        "How does Garage Keepers Legal Liability Insurance apply to my services?",
      key: 7,
    },
    {
      label: "How are taxes handled on the AllDrive SOS platform?",
      key: 8,
    },
    {
      label:
        "What qualifications do I need to become a Service Provider on AllDrive SOS?",
      key: 9,
    },
    {
      label: "How do I register as a Service Provider on AllDrive SOS?",
      key: 10,
    },
    {
      label: "How do I receive job requests?",
      key: 11,
    },
  ];

  const Accordion1 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      AllDrive SOS is a web and mobile platform that connects distressed
      motorists in need of roadside assistance with qualified service providers,
      such as tow truck operators and roadside technicians, across the United
      States.
    </div>
  );

  const Accordion2 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      As a Service Provider, you can offer a range of roadside assistance
      services, including but not limited to:
      <ul className="grid gap-2 mt-4 my-list">
        <li>Towing</li>
        <li>Jump-starts</li>
        <li>Flat tire replacements</li>
        <li>Lockout services</li>
        <li>Fuel delivery</li>
        <li>Battery replacement</li>
        <li>Winching</li>
        <li>On-hook services</li>
        <li>Winch-Out</li>
        <li>Mobile Detailing</li>
      </ul>
    </div>
  );

  const Accordion3 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      All Service Providers are required to maintain specific insurance
      coverages, depending on the services they offer:
      <ul className="grid gap-2 mt-4 my-list">
        <li>
          <span className="fw-600">For towing services:</span>
          <ul className="my-list list-inside">
            <li>Commercial General Liability Insurance: Minimum $1,000,000 </li>
            <li>Commercial Automobile Insurance: Minimum $1,000,000</li>
            <li>On-Hook Insurance: Minimum $100,000</li>
            <li>
              Garage Keepers Legal Liability Insurance (if you provide storage
              services): Minimum $100,000
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <span className="fw-600">For roadside/soft services:</span>
          <ul className="my-list list-inside mt-3">
            <li>Commercial General Liability Insurance: Minimum $1,000,000 </li>
            <li>Commercial Automobile Insurance: Minimum $1,000,000 </li>
          </ul>
        </li>
      </ul>
      <p className="mt-2">
        Additionally, Service Providers must provide a certificate of insurance
        naming AllDrive SOS as an additional insured on the Commercial General
        Liability and Commercial Automobile Insurance.
      </p>
      <p className="fw-600 mt-4">Insurance Policy Requirements keypoints:</p>
      <ul className="list-inside list-decimal mt-4 grid gap-3">
        <li>
          <span className="fw-600">Insurance Company Rating:</span> All
          insurance policies must be issued by a reputable insurance company
          with an A- or better rating from{" "}
          <Link to={"https://web.ambest.com/home"} className="text-blue-500">
            A.M. Best
          </Link>
          .
        </li>
        <li>
          <span className="fw-600">Additional Insured: </span>ALLDRIVE SOS LLC
          must be included as an additional insured on both your Commercial
          General Liability and Commercial Automobile insurance policies.
        </li>
        <li>
          <span className="fw-600">Policy Renewal:</span> When your insurance
          policies are renewed, you must provide ALLDRIVE SOS LLC with an
          updated certificate of insurance. You can do this by logging into your
          account and updating your KYC information under the "Settings" tab.
        </li>
      </ul>
    </div>
  );

  const Accordion4 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      You must submit a copy of your certificate of insurance that meets the
      coverage requirements and names AllDrive SOS as an additional insured. You
      can upload the document through your provider account on the platform.
      Upon renewal of your policies, a renewed certificate of insurance must
      also be submitted
    </div>
  );

  const Accordion5 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      It is your responsibility to ensure that your insurance coverage is
      current and active. If your insurance expires or lapses, you will be
      temporarily suspended from offering services on the AllDrive SOS platform
      until valid insurance documentation is provided.
    </div>
  );

  const Accordion6 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      On-Hook Insurance provides coverage for damages to vehicles that are being
      towed. If you're offering towing services, this insurance is required to
      cover the cost of any potential damages that might occur to the vehicle
      while it is being towed.
    </div>
  );

  const Accordion7 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      If you provide storage facility services (such as parking or storing
      vehicles at your facility), Garage Keepers Legal Liability Insurance
      protects against damages to vehicles parked in your care, custody, or
      control. This insurance is required with a minimum limit of $100,000.
    </div>
  );

  const Accordion8 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      As a Service Provider, you are responsible for paying any taxes (including
      VAT, if applicable) that may be required on the services you provide
      through the AllDrive SOS platform. AllDrive SOS is not responsible for
      paying these taxes on your behalf, other than taxes on its own income.
    </div>
  );

  const Accordion9 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      You must hold all required licenses and certifications as per state or
      federal laws for the services you offer. You must also carry and maintain
      the necessary insurance coverages. Additionally, your business should be
      in compliance with all applicable laws.
    </div>
  );

  const Accordion10 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      To register, visit the AllDrive SOS website or mobile app and complete the
      Service Provider registration form. You will need to submit proof of
      licensing, insurance documentation, and any required certifications to
      complete your registration
    </div>
  );

  const Accordion11 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      Once registered and approved, you will receive job requests through the
      AllDrive SOS app. These requests will be based on your location, service
      availability, and the type of services you offer. You can accept or
      decline requests based on your schedule and capacity.
    </div>
  );

  const renderContent = () => {
    switch (open) {
      case 1:
        return <Accordion1 />;
      case 2:
        return <Accordion2 />;
      case 3:
        return <Accordion3 />;
      case 4:
        return <Accordion4 />;
      case 5:
        return <Accordion5 />;
      case 6:
        return <Accordion6 />;
      case 7:
        return <Accordion7 />;
      case 8:
        return <Accordion8 />;
      case 9:
        return <Accordion9 />;
      case 10:
        return <Accordion10 />;
      case 11:
        return <Accordion11 />;
    }
  };

  // const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="w-full flex flex-row">
        <div className="lg:w-1/4 md:w-1/3 py-6 px-3 hidden lg:flex md:flex">
          <div className="w-full flex flex-col border-r-2 border-gray-500">
            {faqArray.map((item) => (
              <div key={item.key} className="w-full p-2">
                <span
                  className={`text-base cursor-pointer ${
                    open === item.key ? "font-bold" : ""
                  }`}
                  onClick={() => setOpen(item.key)}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-3/4 md:w-2/3 flex flex-col my-4">
          <div className="hidden lg:flex md:flex w-full">{renderContent()}</div>

          {/* For mobile view, all content is displayed */}
          <div className="lg:hidden md:hidden block w-full">
            <Accordion1 />
            <Accordion2 />
            <Accordion3 />
            <Accordion4 />
            <Accordion5 />
            <Accordion6 />
            <Accordion7 />
            <Accordion8 />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderFaqList;
