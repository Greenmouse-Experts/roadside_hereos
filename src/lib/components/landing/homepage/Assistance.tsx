import Button from "../../ui/Button"

const Assistance = () => {
    const services = [
        {
            name: 'Emergency towing service',
            img: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969535/rsh/Rectangle_20_ewhcb9.png',
            color: 'bg-white',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor orci nibh, vitae laoreet mi hendrerit id. Proin viverra est ac orci lacinia egestas. '
        },
        {
            name: 'Emergency Repairs',
            img: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969535/rsh/Rectangle_21_bstran.png',
            color: 'bg-[#FEB470]',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor orci nibh, vitae laoreet mi hendrerit id. Proin viverra est ac orci lacinia egestas. '
        },
        {
            name: 'Fuel Delivery',
            img: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969535/rsh/Rectangle_22_ee9gws.png',
            color: 'bg-white',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor orci nibh, vitae laoreet mi hendrerit id. Proin viverra est ac orci lacinia egestas. '
        },
        {
            name: 'Lockout Services',
            img: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969536/rsh/Rectangle_23_hfxo8k.png',
            color: 'bg-white',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor orci nibh, vitae laoreet mi hendrerit id. Proin viverra est ac orci lacinia egestas. '
        },
        {
            name: 'Battery Replacement',
            img: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969534/rsh/Rectangle_24_iiikug.png',
            color: 'bg-white',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor orci nibh, vitae laoreet mi hendrerit id. Proin viverra est ac orci lacinia egestas. '
        },
    ]
  return (
    <>
        <div className="section text-black bg-[#F8F8F8]">
            <div className="box">
                <div>
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-[50%]">
                            <p className="text-xl lg:text-3xl fw-700">Get Instant Assistance</p>
                            <p className="mt-3 fs-400 fw-500">Request instant roadside assistance now! Choose through the provided options, the problem you&apos;re having and we&apos;ll be there in minutes.</p>
                        </div>
                        <Button title={'View all'} altClassName="btn-feel mt-5 lg:mt-0 fs-500 fw-500 bg-[#FEB470] text-black px-6 py-2" />
                    </div>
                    <div className="mt-6 lg:mt-12">
                       <div className="grid lg:grid-cols-6 lg:[&>*:first-child]:col-span-3 lg:[&>*:nth-child(2)]:col-span-3 make-2 gap-6 lg:gap-8">
                       {
                            services.map((item) => (
                                <div className={`${item.color} col-span-2 rounded-[12px] p-5 lg:p-10 hover:shadow-lg hover:scale-105 duration-100 `}>
                                    <div>
                                        <img src={item.img} alt="icon" className="w-16" />
                                    </div>
                                    <div>
                                        <p className="mt-4 fw-600 mb-4">{item.name}</p>
                                        <p className="fs-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Assistance