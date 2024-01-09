import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { RouteType, Routes } from './routes';
import { Link, useLocation } from 'react-router-dom';

const SidebarLayout = () => {
  const path = useLocation();
  console.log(path.pathname);
  
  return (
    <div className="left-0 top-0 fixed overflow-y-hidden rounded-r-3xl index-30  bg-primary text-white">
      <Sidebar
        customBreakPoint="1024px"
        className="h-screen overflow-y-hidden scroll-pro pb-4 fs-700 fw-500 px-4"
        backgroundColor=""
      >
        <div className="flex justify-center py-6 lg:py-9 lg:pb-8 items-center">
          <Link to="/" className="block flex gap-x-1">
            {/* <Image
              src={logo}
              alt="logo"
              width={170}
              height={60}
              className="w-8 h-8"
            /> */}
            <p className="fw-700 text-[19px] uppercase">Roadside Heroes</p>
          </Link>
        </div>
        <Menu
          className="overflow-y-auto scroll-pro h-[84vh]"
          transitionDuration={600}
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  color: active ? 'black' : '#b5b3b3',
                  marginTop: '4px',
                  height: 'auto',
                  padding: '3px 15px 3px 0px !important ',
                  textAlign: 'left',
                  fontWeight: active ? '600' : '500',
                  borderLeft: active ? '5px solid #090979' : '',
                  background: active ? '#e3f9ff' : '',
                  '&:hover': {
                    color: 'black',
                    background: '#e3f9ff',
                    borderLeft: '5px solid #090979',
                    fontWeight: '500',
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
                    {item.submenu.map((item:RouteType, i) => (
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