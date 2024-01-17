import { useEffect, useState } from "react";

const CookieModal = () => {
    const [show, setShow] = useState(false)
  let cookie = localStorage.getItem("rhs_cookie");
  const checkCookie = () => {
    localStorage.setItem("rhs_cookie", "no");
    setShow(false)
  }
  useEffect(() => {
    if(cookie !== "no"){
      setShow(true)
    }
  }, [])
  return (
    <>
      {show  && (
        <div className="bg-white new-shade fixed w-[400px] bottom-6 left-5 lg:left-16 p-6 lg:py-9 rounded-xl z-[40000]">
          <p className="text-lg">Our site uses essential cookies to work.</p>
          <div className="grid lg:grid-cols-2 gap-6 mt-7">
            <button className="border py-2 rounded border-[#949494] text-[#949494]" disabled>Decline All</button>
            <button onClick={checkCookie} className="rounded-[5px] bg-[#123373] py-2 fw-500 text-white">Accept All</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieModal;
