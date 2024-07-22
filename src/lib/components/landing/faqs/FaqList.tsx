import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const FaqList = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={open === 1 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5"
        >
          <div className="px-5 py-1 rounded-xl">
            What roadside assistance services do you provide?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            At AllDrive SOS, we offer comprehensive maintenance and emergency
            roadside assistance services for all motor vehicles. Our service
            list is continually expanding to meet your needs. For the most
            up-to-date list of services, please visit our <Link to={'/request'} className="fw-500 text-primary underline">services page</Link>.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={open === 2 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            How do I request a roadside assistance service?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Getting roadside assistance is simple! Just open the AllDrive SOS
            app or visit our website. Select the service you need, fill out the
            quick request form, and we'll connect you with nearby service
            providers ready to assist you. These providers will then send you
            quotes and their locations so you can choose your preferred option.
            Once you&apos;ve confirmed and paid, you can track the technician's
            progress on their way to you.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={open === 3 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            How do I get charged for my roadside assistance?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Our pricing is transparent and follows a cost-efficient
            pay-as-you-go model, ensuring you save money without worrying about
            membership fees or monthly subscriptions. Pricing varies based on
            factors such as service type, location, and time of day.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={open === 4 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            How long will it take to get help?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            For a faster response, make sure your location services are enabled
            on your device. This helps us find service providers closest to you.
            When you request a service, you&apos;ll be able to choose a nearby
            provider and see their estimated arrival time.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={open === 5 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            Should I tip my roadside assistance providers?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            While tipping roadside assistance providers is not mandatory in the
            US, it&apos;s a common way to show appreciation for good service,
            especially during inconvenient times or challenging tasks. Tipping
            is an individual decision but is always appreciated for exceptional
            work.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={open === 6 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            Do I need Auto Insurance to use AllDrive SOS?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            No! AllDrive SOS offers a convenient pay-as-you-go option. However,
            if your Auto insurance covers roadside assistance, we will provide
            you with a payment receipt via email to help you claim reimbursement
            from your insurance company.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={open === 7 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            Can I cancel a pending roadside assistance request and get a
            refund?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            We aim to fulfill every roadside assistance request promptly and
            professionally. However, if you need to cancel a pending request,
            you can do so and receive a refund, subject to a 15% service charge
            deduction.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={open === 8 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">Why isn't my refund full?</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            We use secure third-party processors for all transactions, including
            banks and payment gateways. These institutions may charge fees for
            processing refunds, which is why a small service fee applies.
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default FaqList;
