import { FC } from "react"
import ServiceProgress from "./details-comp/ServiceProgress"
import UserInfo from "./details-comp/UserInfo"

interface Props{
    data: any
}
const RequestDetailsIndex:FC<Props> = ({}) => {
  return (
    <div>
        <div>
            <ServiceProgress status="ongoing" query=""/>
        </div>
        <div>
            <UserInfo/>
        </div>
    </div>
  )
}

export default RequestDetailsIndex