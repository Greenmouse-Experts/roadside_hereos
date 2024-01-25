import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { RouteType, Routes } from "./routes";
import { Link, useLocation } from "react-router-dom";

const SidebarLayout = () => {
  const path = useLocation();

  return (
    <div className="left-0 top-0 fixed overflow-y-hidden rounded-r-3xl index-30">
      <Sidebar
        customBreakPoint="1024px"
        className="h-screen overflow-y-hidden scroll-pro pb-4 fs-700 fw-500 px-4"
        backgroundColor=""
      >
        <div className="py-6 text-center lg:pb-8">
          <Link to="/" className="block flex justify-center gap-x-1">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706192917/rsh/Group_48097864_1_mopmlj.png"
              alt="logo"
              className="w-10/12"
            />
          </Link>
          <div className="mt-10">
            <img
              src={
                "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941410/Gleemora/Rectangle_20040_f4krjt.png"
              }
              alt="profile"
              className="w-[70%] aspect-square border border-gray-400 mx-auto circle"
            />
          </div>
        </div>
        <Menu
          className="overflow-y-auto scroll-pro "
          transitionDuration={600}
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  color: active ? "black" : "#343635",
                  marginTop: "4px",
                  height: "auto",
                  padding: "3px 15px 3px 0px !important ",
                  textAlign: "left",
                  fontWeight: active ? "600" : "500",
                  borderLeft: active ? "5px solid #090979" : "",
                  background: active ? "#e3f9ff" : "",
                  "&:hover": {
                    color: "black",
                    background: "#e3f9ff",
                    borderLeft: "5px solid #090979",
                    fontWeight: "500",
                  },
                };
            },
          }}
        >
          {Routes.map((item) => {
            return (
              <>
                {!!item.submenu.length ? (
                  <SubMenu label={item.name} icon={item.icon} key={item.name}>
                    {item.submenu.map((item: RouteType, i) => (
                      <MenuItem
                        component={<Link to={item.route} />}
                        active={path.pathname === item.route && true}
                        key={i}
                      >
                        <p className="fs-400">{item.name}</p>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    component={<Link to={item.route} />}
                    icon={item.icon}
                    active={path.pathname === item.route && true}
                    key={item.name}
                  >
                    <p className="fs-400">{item.name}</p>
                  </MenuItem>
                )}
              </>
            );
          })}
        </Menu>
      </Sidebar>
      {/* <Modal title="" noHead>
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Modal> */}
    </div>
  );
};

export default SidebarLayout;
