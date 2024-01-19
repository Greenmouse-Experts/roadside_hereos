import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactForm = () => {
  const [value, setValue] = useState<any>();
  return (
    <>
      <form action="">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block fw-600">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="mt-3 p-3 w-full border-0 outline-none bg-[#F3F3F3] rounded-[16px]"
            />
          </div>
          <div>
            <label htmlFor="name" className="block fw-600">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="mt-3 p-3 w-full border-0 outline-none bg-[#F3F3F3] rounded-[16px]"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="block fw-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-3 p-3 w-full border-0 outline-none bg-[#F3F3F3] rounded-[16px]"
            />
          </div>
          <div className="mt-4">
            <label className="block fw-600">Phone Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="US"
              country="US"
              value={value}
              onChange={setValue}
              className="mt-[7px] p-2 py-3 rounded-[16px] bg-[#F3F3F3] input-gray"
            />
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="message" className="block fw-600">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            className="mt-3 h-24 p-3 w-full border-0 outline-none bg-[#F3F3F3] rounded-[16px]"
          />
        </div>
        <div className="mt-6">
          <button className="w-full py-4 rounded-[16px] bg-[#FEB470] text-xl fw-600">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
