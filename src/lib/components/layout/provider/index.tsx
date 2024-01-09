import React from 'react'
import SidebarLayout from './section/sidebar'
import { BiBell } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface Props {
  children: React.ReactNode
}
const ProviderDashboardLayout:React.FC<Props> = ({children}) => {
  return (
    <>
      <div className="flex bg-light">
        <div className="lg:w-[250px]">
          <SidebarLayout />
        </div>
        <div className="w-full lg:w-[calc(100%_-_256px)] min-h-screen bg-light py-4 lg:py-9">
        <div className="">
      <div className="h-[60px] relative index-30">
        <div className="fixed top-0 lg:w-[calc(100%_-_250px)] pl-9 pr-5 py-[26px] bg-light flex items-center justify-between">
          <p className='fw-600'>Provider Dashboard</p>
          <div className="flex gap-x-5 items-center">
            <div className="relative cursor-pointer">
              <p className="w-4 h-4 circle bg-[#B3561B] absolute -top-1 right-0"></p>
              <BiBell className="text-3xl" />
            </div>
            <div className="flex gap-x-4 items-center">
              <img
                src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941410/Gleemora/Rectangle_20040_f4krjt.png'}
                alt=""
                width={70}
                height={70}
                className="h-10 w-10 circle"
              />
              <div className="flex gap-x-4 items-center cursor-pointer">
                <p className="fw-500">Ursula Okolie</p>
                <RiArrowDropDownLine className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 lg:px-9">{children}</div>
    </div>
        </div>
      </div>
    </>
  )
}

export default ProviderDashboardLayout