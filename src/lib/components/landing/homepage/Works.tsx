import arrow from '../../assets/arrow-down.svg'
import arr from '../../assets/arrow-up.svg'

const Works = () => {
  return (
    <>
        <div className='section'>
            <div className='box lg:pb-16'>
                <div>
                    <div>
                        <p className='fw-700 text-center text-4xl'>How It Works</p>
                        <p className='text-center fs-500 lg:fs-600 lg:w-6/12 mx-auto mt-2'>Four easy steps to carry out when you experience a problem with your vehicle on the road.</p>
                    </div>
                    <div className='relative w-8/12 lg:w-full mx-auto grid lg:grid-cols-4 lg:gap-28 gap-8 lg:mt-24 mt-12 lg:pb-32'>
                        <div>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969534/rsh/Ellipse_6_pfy53l.png" alt="assit" className='w-full' />
                            <div className='mt-7 text-center'>
                                <p className='fw-600'>Select an Assistance</p>
                                <p className='fs-500 mt-2'>Select the problem you are facing with your vehicle.</p>
                            </div>
                        </div>
                        <img src={arrow} alt="arrow" className='hidden lg:block absolute w-44 -top-[12px] left-[17%]' />
                        <div className='relative lg:top-[120px]'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969534/rsh/Ellipse_7_afgypr.png" alt="phone" className='w-full' />
                            <div className='mt-7 text-center'>
                                <p className='fw-600'>Fill Request Form</p>
                                <p className='fs-500 mt-2'>Provide the required details on the request form.</p>
                            </div>
                        </div>
                        <img src={arr} alt="arrow" className='absolute hidden lg:block w-44 -bottom-[12px] left-[47%]' />
                        <div>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969534/rsh/Ellipse_8_zsqs6n.png" alt="caution" className='w-full' />
                            <div className='mt-7 text-center'>
                                <p className='fw-600'>Submit Request</p>
                                <p className='fs-500 mt-2'>Click on submit once done filling your request form </p>
                            </div>
                        </div>
                        <img src={arrow} alt="arrow" className='absolute hidden lg:block w-44 -top-[12px] right-[11%]' />
                        <div className='relative lg:top-[120px]'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1704969534/rsh/Ellipse_9_j3wjkc.png" alt="rain" className='w-full' />
                            <div className='mt-7 text-center'>
                                <p className='fw-600'>Receive Assistance</p>
                                <p className='fs-500 mt-2'>Get effective help once your request has been confirmed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Works