import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import { getCompanyProviders } from "../../../../services/api/usersApi"
import StaffList from "./StaffList"

interface Props {
  id: string
}
const CompanyProviders:FC<Props> = ({id}) => {
  const {data} = useQuery({
    queryFn: () => getCompanyProviders(id),
    queryKey: ['companyProviders']
  })
  return (
    <>
        <div className="bg-white p-6 shadow rounded min-h-[350px]">
          <StaffList data={data?.data}/>
        </div>
    </>
  )
}

export default CompanyProviders