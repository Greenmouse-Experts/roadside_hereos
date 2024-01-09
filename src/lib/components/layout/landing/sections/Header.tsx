import { FC, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import CallOutMenu from "./CallOut";
import { AiOutlineClose } from "react-icons/ai";
import { NAV_LIST } from "./Routes";
import { Link, useLocation } from "react-router-dom";

interface Props {
  fixed?: boolean;
}
const Header: FC<Props> = ({ fixed }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={`w-full lg:p-5 py-5 ${
          fixed ? "absolute w-full top-0 left-0" : ""
        }`}
      >
        <div className="box">
          <div className="flex items-center justify-between">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1704791331/sm_5af3ff321c2f8_e8lure.jpg"
              alt="logo"
              width={100}
              height={60}
              className="lg:w-[60px] w-20"
            />
            <div className="lg:w-9/12 lg:flex hidden justify-between">
              <ul className="flex gap-x-12 items-center justify-between">
                {NAV_LIST.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.url}
                      className={`${
                        pathname === item.url
                          ? "text-black fw-600"
                          : "text-gray-600 fw-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  <Link to="/auth/login" className="btn-like">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:hidden mb-2">
              {!showMenu ? (
                <HiMenuAlt3
                  className="text-4xl text-primary"
                  onClick={() => setShowMenu(true)}
                />
              ) : (
                <AiOutlineClose className="text-4xl text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
      {showMenu && <CallOutMenu show={() => setShowMenu(!showMenu)} />}
    </>
  );
};

export default Header;
