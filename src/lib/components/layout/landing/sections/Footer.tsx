import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export const socials = [
  {
    name: "twitter",
    to: "/",
    icon: <SiTwitter className="lg:text-3xl text-xl" />,
  },
  {
    name: "facebook",
    to: "/",
    icon: <SiFacebook className="lg:text-3xl text-xl" />,
  },
  {
    name: "instagram",
    to: "/",
    icon: <BiLogoInstagramAlt className="lg:text-4xl text-xl" />,
  },
  {
    name: "linkedin",
    to: "/",
    icon: <SiLinkedin className="lg:text-3xl text-xl" />,
  },
];

const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-[#172748] ">
      <div className="box text-white">
        <div className="lg:pt-20 py-12 lg:grid lg:grid-cols-6">
          <div className="col-span-2">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706192917/rsh/Group_48097864_1_mopmlj.png"
              alt="logo"
              className="w-full lg:w-6/12"
            />
            <div className="mt-4 lg:pl-6">
              {/* <p className="fs-500">+0 123 456 7890</p>
              <p className="mt-3 fs-500 ">N0 1 Company physical address, Country. Earth</p> */}
              <ul className="flex gap-x-2 lg:gap-x-4 mt-12">
                {socials.map((item, i) => (
                  <li className="text-white cursor-pointer" key={i}>
                    {item.icon}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="fw-600 mb-4 mt-10 lg:mt-0">Company</p>
            <ul className="grid gap-6 fs-500">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/faqs'}>FAQs</Link></li>
              <li><Link to={'/request'}>Request a Service</Link></li>
              <li><Link to={'/auth/register'}>Signup as a Provider</Link></li>
            </ul>
          </div>
          <div>
            <p className="fw-600 mb-4 mt-10 lg:mt-0">Legal</p>
            <ul className="grid gap-6 fs-500">
              <li><Link to={'/terms'}>Terms and Conditions</Link></li>
              <li><Link to={'/privacy'}>Privacy Policy</Link></li>
              {/* <li><Link to={'/cookie'}>Cookies Policy</Link></li> */}
            </ul>
          </div>
          <div>
            <p className="fw-600 mb-4 mt-10 lg:mt-0">Support</p>
            <ul className="grid gap-6 fs-500">
              <li><Link to={'/contact'}>Help</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
              <li><Link to={'/'}>Feedback</Link></li>
            </ul>
          </div>
          <div>
            <p className="fw-600 mt-10 lg:mt-0">Subscribe to Newsletter</p>
            <p className="mt-3 fs-400">Subscribe to our newsletter to get updates from us</p>
            <div className="mt-4 border rounded-[10px] flex bg-white">
                <input type="text" name="email" placeholder="Your email" className="rounded-l-[10px] pl-2 border-none outline-none w-full" />
                <button className="p-3 rounded-[10px] bg-[#FEB470] text-black fw-500">Join</button>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-500">
          <p className="text-center pb-4 fs-500 text-white">
            Copyright © {date.getFullYear()} ROADSIDE HEROES. All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
