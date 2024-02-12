import { MdOutlineGroupAdd } from "react-icons/md"

interface Props{
    data: 
}
const CompanyDetails = () => {
  return (
    <>
        <div className="bg-white p-6 shadow rounded">
            <div className="grid gap-4">
                <div className="flex items-center gap-x-4 lg:gap-x-12">
                    <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
                        <MdOutlineGroupAdd className="text-xl"/>
                        <p>Name</p>
                    </div>
                    <div>
                        <p className="fw-600">Midland International</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-12">
                    <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
                        <MdOutlineGroupAdd className="text-xl"/>
                        <p>Email</p>
                    </div>
                    <div>
                        <p className="fw-600">midlandint@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-12">
                    <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
                        <MdOutlineGroupAdd className="text-xl"/>
                        <p>Contact Phone</p>
                    </div>
                    <div>
                        <p className="fw-600">+1 (913) 400 2345</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-12">
                    <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
                        <MdOutlineGroupAdd className="text-xl"/>
                        <p>Address</p>
                    </div>
                    <div>
                        <p className="fw-600">midlandint@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-12">
                    <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
                        <MdOutlineGroupAdd className="text-xl"/>
                        <p>Services</p>
                    </div>
                    <div>
                        <p className="fw-600">midlandint@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-12">
                    <div className="lg:w-2/12 border-l-2 border-orange-400 flex bg-primary text-white p-3 items-center gap-x-2">
                        <MdOutlineGroupAdd className="text-xl"/>
                        <p>Joined At</p>
                    </div>
                    <div>
                        <p className="fw-600">midlandint@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CompanyDetails