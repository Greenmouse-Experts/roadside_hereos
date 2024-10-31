import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProviderFaqList = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={open === 1 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5"
        >
          <div className="px-5 py-1 rounded-xl">What is AllDrive SOS?</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            AllDrive SOS is a web and mobile platform that connects distressed
            motorists in need of roadside assistance with qualified service
            providers, such as tow truck operators and roadside technicians,
            across the United States.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={open === 2 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            What types of services can I offer on the AllDrive SOS platform?
          </div>
        </AccordionHeader>
        <AccordionBody>
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={open === 3 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            What are the insurance requirements to offer services on the
            platform?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            All Service Providers are required to maintain specific insurance
            coverages, depending on the services they offer:
            <ul className="grid gap-2 mt-4 my-list">
              <li>
                <span className="fw-600">For towing services:</span>
                <ul className="my-list list-inside">
                  <li>
                    Commercial General Liability Insurance: Minimum $1,000,000{" "}
                  </li>
                  <li>Commercial Automobile Insurance: Minimum $1,000,000</li>
                  <li>On-Hook Insurance: Minimum $100,000</li>
                  <li>
                    Garage Keepers Legal Liability Insurance (if you provide
                    storage services): Minimum $100,000
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <span className="fw-600">For roadside/soft services:</span>
                <ul className="my-list list-inside mt-3">
                  <li>
                    Commercial General Liability Insurance: Minimum $1,000,000{" "}
                  </li>
                  <li>Commercial Automobile Insurance: Minimum $1,000,000 </li>
                </ul>
              </li>
            </ul>
            <p className="mt-2">
              Additionally, Service Providers must provide a certificate of
              insurance naming AllDrive SOS as an additional insured on the
              Commercial General Liability and Commercial Automobile Insurance.
            </p>
            <p className="fw-600 mt-4">
              Insurance Policy Requirements keypoints:
            </p>
            <ul className="list-inside list-decimal mt-4 grid gap-3">
              <li>
                <span className="fw-600">Insurance Company Rating:</span> All
                insurance policies must be issued by a reputable insurance
                company with an A- or better rating from{" "}
                <Link
                  to={"https://web.ambest.com/home"}
                  className="text-blue-500"
                >
                  A.M. Best
                </Link>
                .
              </li>
              <li>
                <span className="fw-600">Additional Insured: </span>ALLDRIVE SOS
                LLC must be included as an additional insured on both your
                Commercial General Liability and Commercial Automobile insurance
                policies.
              </li>
              <li>
                <span className="fw-600">Policy Renewal:</span> When your
                insurance policies are renewed, you must provide ALLDRIVE SOS
                LLC with an updated certificate of insurance. You can do this by
                logging into your account and updating your KYC information
                under the "Settings" tab.
              </li>
            </ul>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={open === 4 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            How do I submit my insurance documents to AllDrive SOS?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            You must submit a copy of your certificate of insurance that meets
            the coverage requirements and names AllDrive SOS as an additional
            insured. You can upload the document through your provider account
            on the platform. Upon renewal of your policies, a renewed
            certificate of insurance must also be submitted
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={open === 5 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            What happens if my insurance expires or lapses?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            It is your responsibility to ensure that your insurance coverage is
            current and active. If your insurance expires or lapses, you will be
            temporarily suspended from offering services on the AllDrive SOS
            platform until valid insurance documentation is provided.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={open === 6 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            What is On-Hook Insurance and why is it required?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            On-Hook Insurance provides coverage for damages to vehicles that are
            being towed. If you're offering towing services, this insurance is
            required to cover the cost of any potential damages that might occur
            to the vehicle while it is being towed.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={open === 7 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            How does Garage Keepers Legal Liability Insurance apply to my
            services?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            If you provide storage facility services (such as parking or storing
            vehicles at your facility), Garage Keepers Legal Liability Insurance
            protects against damages to vehicles parked in your care, custody,
            or control. This insurance is required with a minimum limit of
            $100,000.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={open === 8 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How are taxes handled on the AllDrive SOS platform?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            As a Service Provider, you are responsible for paying any taxes
            (including VAT, if applicable) that may be required on the services
            you provide through the AllDrive SOS platform. AllDrive SOS is not
            responsible for paying these taxes on your behalf, other than taxes
            on its own income.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} icon={open === 9 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(9)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What qualifications do I need to become a Service Provider on
            AllDrive SOS?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            You must hold all required licenses and certifications as per state
            or federal laws for the services you offer. You must also carry and
            maintain the necessary insurance coverages. Additionally, your
            business should be in compliance with all applicable laws.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 10}
        icon={open === 10 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(10)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do I register as a Service Provider on AllDrive SOS?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            To register, visit the AllDrive SOS website or mobile app and
            complete the Service Provider registration form. You will need to
            submit proof of licensing, insurance documentation, and any required
            certifications to complete your registration
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 11}
        icon={open === 11 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(11)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do I receive job requests?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Once registered and approved, you will receive job requests through
            the AllDrive SOS app. These requests will be based on your location,
            service availability, and the type of services you offer. You can
            accept or decline requests based on your schedule and capacity.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 12}
        icon={open === 12 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(12)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl"> How are payments handled?</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Payments for jobs are processed directly through the AllDrive SOS
            platform. After completing a job, your payment will be credited to
            your account, minus any applicable platform fees. You can set up
            your bank account details to receive payments via direct deposit.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 13}
        icon={open === 13 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(13)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What are the cancellation fees and policies?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            If a job is canceled, a 15% cancellation fee will be charged to the
            party that initiated the cancellation. If the motorist cancels the
            job after you've already been dispatched, they will be responsible
            for the fee. However, if you cancel the job after accepting it, you
            will be charged the cancellation fee.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 14}
        icon={open === 14 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(14)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl"> Can I set my own rates?</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            AllDrive SOS sets standard pricing for specific services, but you
            may have the ability to adjust rates based on factors like location
            and the complexity of the service. Rate adjustments must comply with
            AllDrive SOS's guidelines.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 15}
        icon={open === 15 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(15)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do I contact support if I have an issue?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            You can contact AllDrive SOS Support through the platform's app or
            website. There is also a dedicated email address and phone number
            for Service Providers experiencing issues or needing assistance with
            their account or jobs.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 16}
        icon={open === 16 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(16)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            Can I operate outside of the United States?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            No, the AllDrive SOS platform operates only within the United
            States. Service Providers must comply with U.S. regulations and
            provide services within the country. You are responsible for legal
            compliance if you attempt to offer services outside of the U.S.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 17}
        icon={open === 17 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(17)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What are the requirements for my business registration?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Your business must be legally registered and hold all necessary
            licenses required by state or federal law to provide roadside
            assistance services. You will need to provide proof of registration
            when signing up as a Service Provider on the platform.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 18}
        icon={open === 18 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(18)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What type of vehicles can I use to offer my services?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            You can use any vehicle that meets the legal and insurance
            requirements for the services you provide. For example, tow truck
            operators must use vehicles properly equipped for towing. Your
            vehicles must also be insured under your Commercial Automobile
            Insurance policy, which should cover both owned and non-owned
            vehicles.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 19}
        icon={open === 19 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(19)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do I handle disputes with customers?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            In the event of a dispute with a customer, you can contact AllDrive
            SOS Support to open a case. The platform provides a mediation
            process to help resolve conflicts fairly. Be sure to provide all
            relevant documentation and evidence, such as photos or service
            reports, to support your case.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 20}
        icon={open === 20 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(20)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do I update my service areas?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            You can update your service areas by logging into your AllDrive SOS
            account and adjusting your geographic availability settings. This
            ensures that you receive job requests only within the regions you
            are able to serve.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 21}
        icon={open === 21 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(21)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do I track my service history?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Your service history, including completed jobs, customer ratings,
            and payment records, is available in your AllDrive SOS account
            dashboard. You can review past jobs, payments received, and your
            overall performance metrics.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 22}
        icon={open === 22 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(22)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            Can I offer multiple services at once?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Yes, you can offer multiple services simultaneously, such as towing
            and roadside assistance. Be sure to select all relevant services
            when setting up your profile to receive job requests that match your
            capabilities. However, make sure you have the required equipment,
            skills, and insurance for each service type.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 23}
        icon={open === 23 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(23)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do customer ratings and reviews affect my account?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Customer ratings and reviews are an essential part of your profile.
            Consistently high ratings can improve your visibility on the
            platform and increase your chances of receiving more job requests.
            Negative reviews may lead to account reviews or suspension if they
            indicate serious performance or customer service issues.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 24}
        icon={open === 24 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(24)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            Can I decline job requests?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Yes, you have the option to decline job requests if you are
            unavailable or unable to complete the job. However, frequent
            declines may affect your ranking on the platform, which could result
            in fewer job opportunities.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 25}
        icon={open === 25 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(25)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What equipment do I need to offer towing services?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            To offer towing services, you will need a properly equipped tow
            truck, including winching equipment, towing cables, and any other
            necessary tools to safely handle vehicles. Ensure your vehicle
            complies with state and federal regulations, and that it is covered
            by your Commercial Automobile Insurance and On-Hook Insurance
            policies.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 26}
        icon={open === 26 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(26)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How does AllDrive SOS ensure the safety of Service Providers?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            AllDrive SOS prioritizes the safety of both motorists and Service
            Providers. The platform uses GPS tracking, secure communication
            tools, and reviews to promote a safe service environment. If you
            ever feel unsafe during a job, you can contact AllDrive SOS Support
            for assistance.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 27}
        icon={open === 27 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(27)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How can I increase my visibility and job opportunities on the
            platform?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            To increase your visibility:
            <ul className="mt-4 my-list grid gap-3">
              <li>Maintain high customer ratings.</li>
              <li>Complete jobs promptly and professionally.</li>
              <li>
                Update your profile regularly, including your service offerings
                and insurance details.
              </li>
              <li>Respond quickly to job requests.</li>
              <li>
                Provide excellent customer service to encourage positive
                reviews.
              </li>
            </ul>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 28}
        icon={open === 28 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(28)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What happens if I damage a customer&apos;s vehicle while providing
            services?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            If a customer&apos;s vehicle is damaged while you are providing
            services, your insurance (e.g., On-Hook Insurance for towing) should
            cover the cost of the damage. Be sure to document the incident and
            notify AllDrive SOS Support immediately. Failure to report damage
            may lead to penalties or removal from the platform.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 29}
        icon={open === 29 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(29)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What if I encounter a technical issue with the AllDrive SOS app
            while on a job?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            If you experience technical difficulties with the app, such as GPS
            malfunction or communication issues, contact AllDrive SOS Support
            for immediate assistance. It's important to keep your app updated
            and have a backup method for contacting the customer if needed.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 30}
        icon={open === 30 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(30)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do I manage my account settings, including payment methods and
            notifications?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            You can manage your account settings by logging into your AllDrive
            SOS dashboard. From there, you can update payment details,
            communication preferences, notification settings, and more. Make
            sure your bank information is accurate to avoid delays in payments.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 31}
        icon={open === 31 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(31)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            Can I operate my services 24/7?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Yes, you can set your availability to operate 24/7 if you choose.
            You have the flexibility to manage your hours of operation through
            your profile settings. If you are available at night or during
            weekends, this can increase your chances of receiving more job
            requests, especially for emergency services.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 32}
        icon={open === 32 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(32)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What support is available if I need assistance with compliance or
            legal matters?{" "}
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            AllDrive SOS provides resources and guidance to help Service
            Providers comply with legal and insurance requirements. If you have
            specific questions or need assistance, you can contact AllDrive SOS
            Support, who may guide you to external resources for legal or
            compliance issues.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 33}
        icon={open === 33 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(33)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            How do I renew my licenses and keep AllDrive SOS updated?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            You must regularly renew your state or federal licenses as required
            by law. After renewing, upload your updated licenses and insurance
            certificates to your AllDrive SOS account to continue operating on
            the platform without interruptions.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 34}
        icon={open === 34 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(34)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What is the response time expectation for Service Providers?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Service Providers are expected to respond to job requests promptly,
            typically within a few minutes, and arrive at the customer’s
            location within the estimated time of arrival (ETA) specified in the
            app. Slow or unprofessional responses may affect your ratings and
            job opportunities on the platform.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 35}
        icon={open === 35 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(35)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            Can I contact the motorist directly once I accept a job?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            Yes, once you accept a job, the platform will provide you with the
            motorist's contact information to coordinate service. All
            communication should be professional, and you should provide timely
            updates on your arrival and progress.{" "}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 36}
        icon={open === 36 ? <FaMinus /> : <FaPlus />}
      >
        <AccordionHeader
          onClick={() => handleOpen(36)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            {" "}
            What are the requirements for keeping my account active?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl text-black">
            To keep your account active, you must:
            <ul className="my-list mt-4 grid gap-3">
              <li>Maintain up-to-date insurance and licenses</li>
              <li>
                Meet performance standards, including response times and
                customer ratings
              </li>
              <li>
                Complete jobs regularly (inactive accounts may be deactivated)
              </li>
              <li>
                Follow all AllDrive SOS policies and guidelines AllDrive SOS
                regularly reviews Service Provider accounts to ensure
                compliance.
              </li>
            </ul>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default ProviderFaqList;
