
const ContactForm = () => {
  return (
    <>
        <form action="">
            <div>
                <label htmlFor="name" className='block fw-600'>Full Name</label>
                <input type="text" placeholder='Your Full Name' className='mt-3 p-3 w-full border-0 outline-none bg-[#F3F3F3] rounded-[16px]' />
            </div>
            <div className='mt-3'>
                <label htmlFor="name" className='block fw-600'>Email</label>
                <input type="email" placeholder='Your Email' className='mt-3 p-3 w-full border-0 outline-none bg-[#F3F3F3] rounded-[16px]' />
            </div>
            <div className='mt-3'>
                <label htmlFor="message" className='block fw-600'>Message</label>
                <textarea  placeholder='Your Message' className='mt-3 h-24 p-3 w-full border-0 outline-none bg-[#F3F3F3] rounded-[16px]' />
            </div>
            <div className='mt-6'>
                <button className='w-full py-4 rounded-[16px] bg-[#FEB470] text-xl fw-600'>Send Message</button>
            </div>
        </form>
    </>
  )
}

export default ContactForm