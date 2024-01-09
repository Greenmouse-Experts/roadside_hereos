import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FOOTER_LIST } from "./Routes";
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
    icon: <BiLogoInstagramAlt className="lg:text-3xl text-xl" />,
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
    <div className="bg-black">
      <div className="pt-12 pb-6">
        <div className="border-y lg:pt-20 py-12 border-gray-600">
          <div className="text-white box">
            <ul className=" grid gap-y-4 lg:flex lg:justify-between text-center lg:w-10/12 mx-auto">
              {FOOTER_LIST.map((item, i) => (
                <li key={i}>
                  <Link to={item.url} className="">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 lg:mt-16">
            <p className="lg:w-7/12 text-center text-white mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sit
              hic possimus delectus asperiores fugiat tempore adipisci voluptas
              harum autem nemo.
            </p>
            <div className="mt-6 lg:mt-12">
              <ul className="flex justify-between w-10/12 lg:w-4/12 2xl:w-48 mx-auto">
                {socials.map((item, i) => (
                  <li className="text-white text-xl cursor-pointer" key={i}>
                    {item.icon}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <p className="text-center text-white">
            Copyright © {date.getFullYear()} ROADSIDE HEROES. All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
