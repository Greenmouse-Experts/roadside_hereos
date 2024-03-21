import { useState } from 'react'
import { BASE_URL } from '../../lib/services/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const PasswordSet = () => {
    const [isBusy, setIsBusy] = useState(false)
    const { code } = useParams();
  const navigate = useNavigate();
  const hash = code?.split("&");
  const token = !!hash?.length ? hash[1]?.replace("token=", "") : ""
    const email = !!hash?.length ? hash[0]?.replace("email=", "") : ""
    console.log(isBusy, email);
    
    const submitAction = async (data: any) => {
        setIsBusy(true);
        const payload = {
          address: data.address,
          password: data.password,
          phone_number: data.phone,
        };
        try {
          const response = await fetch(`${BASE_URL}/invitation-request/join`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
            body: JSON.stringify(payload)
          });
    
          const result = await response.json();
          if (result) {
            toast.success(result?.message);
            setIsBusy(false);
          }
        } catch (error: any) {
          setIsBusy(false)
          toast.error(error.message);
        }
      };
  return (
    <div onClick={() => submitAction('')} onMouseDown={() => navigate('/')}>PasswordSet</div>
  )
}

export default PasswordSet