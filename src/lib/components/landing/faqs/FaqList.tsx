import React from "react";
import { Link } from "react-router-dom";

const FaqList = () => {
  const [open, setOpen] = React.useState(1);

  const faqArray = [
    {
      label: "What roadside assistance services do you provide?",
      key: 1,
    },
    {
      label: "How do I request a roadside assistance service?",
      key: 2,
    },
    {
      label: "How do I get charged for my roadside assistance?",
      key: 3,
    },
    {
      label: "How long will it take to get help?",
      key: 4,
    },
    {
      label: "Should I tip my roadside assistance providers?",
      key: 5,
    },
    {
      label: "Do I need Auto Insurance to use AllDrive SOS?",
      key: 6,
    },
    {
      label:
        "Can I cancel a pending roadside assistance request and get a refund?",
      key: 7,
    },
    {
      label: "Why isn't my refund full?",
      key: 8,
    },
  ];

  const Accordion1 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      At AllDrive SOS, we offer comprehensive maintenance and emergency roadside
      assistance services for all motor vehicles. Our service list is
      continually expanding to meet your needs. For the most up-to-date list of
      services, please visit our{" "}
      <Link to={"/request"} className="fw-500 text-primary underline">
        services page
      </Link>
      .
    </div>
  );

  const Accordion2 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      Getting roadside assistance is simple! Just open the AllDrive SOS app or
      visit our website. Select the service you need, fill out the quick request
      form, and we'll connect you with nearby service providers ready to assist
      you. These providers will then send you quotes and their locations so you
      can choose your preferred option. Once you&apos;ve confirmed and paid, you
      can track the technician's progress on their way to you.
    </div>
  );

  const Accordion3 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      Our pricing is transparent and follows a cost-efficient pay-as-you-go
      model, ensuring you save money without worrying about membership fees or
      monthly subscriptions. Pricing varies based on factors such as service
      type, location, and time of day.
    </div>
  );

  const Accordion4 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      For a faster response, make sure your location services are enabled on
      your device. This helps us find service providers closest to you. When you
      request a service, you&apos;ll be able to choose a nearby provider and see
      their estimated arrival time.
    </div>
  );

  const Accordion5 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      While tipping roadside assistance providers is not mandatory in the US,
      it&apos;s a common way to show appreciation for good service, especially
      during inconvenient times or challenging tasks. Tipping is an individual
      decision but is always appreciated for exceptional work.
    </div>
  );

  const Accordion6 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      No! AllDrive SOS offers a convenient pay-as-you-go option. However, if
      your Auto insurance covers roadside assistance, we will provide you with a
      payment receipt via email to help you claim reimbursement from your
      insurance company.
    </div>
  );

  const Accordion7 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      We aim to fulfill every roadside assistance request promptly and
      professionally. However, if you need to cancel a pending request, you can
      do so and receive a refund, subject to a 15% service charge deduction.
    </div>
  );

  const Accordion8 = () => (
    <div className="px-5 py-1 rounded-xl text-black">
      We use secure third-party processors for all transactions, including banks
      and payment gateways. These institutions may charge fees for processing
      refunds, which is why a small service fee applies.
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

export default FaqList;
