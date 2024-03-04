import { useState } from "react";
import MyProfileSettings from "../../lib/components/user/settings/MyProfile";
import SecuritySetting from "../../lib/components/user/settings/Security";

const UserSettings = () => {
  const [active, setActive] = useState(1);
  const handleActive = (val: number) => {
    setActive(val);
  };
  return (
    <>
      <div className="text-black lg:p-5">
        <p className="fw-500 lg:text-xl pl-1">Account Settings</p>
        <div className="w-full bg-white mt-4 rounded-[12px] p-6">
          <div className="flex gap-x-4">
            <div className="w-[17%] bg-gray-100 min-h-[60vh] rounded p-2 lg:p-4">
              <ul className="grid gap-4 mt-2">
                <li
                  className={`cursor-pointer px-4 py-2  whitespace-nowrap rounded-lg hover:scale-105 duration-100 ${
                    active === 1 && "bg-white fw-600"
                  }`}
                  onClick={() => handleActive(1)}
                >
                  My Profile
                </li>
                <li
                  className={`cursor-pointer px-4 py-2  whitespace-nowrap rounded-lg hover:scale-105 duration-100 hover:bg-white ${
                    active === 2 && "bg-white fw-600"
                  }`}
                  onClick={() => handleActive(2)}
                >
                  Security
                </li>
              </ul>
            </div>
            <div className="w-[83%]">
              {active === 1 && <MyProfileSettings />}
              {active === 2 && <SecuritySetting/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSettings