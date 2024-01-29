import InviteStaff from "../../lib/components/provider/staff/InviteStaff"
import StaffList from "../../lib/components/provider/staff/StaffList"
import useModal from "../../lib/hooks/useModal"

const CompanyStaffs = () => {
  const {Modal, setShowModal} = useModal()
  return (
    <>
        <div  className='bg-white p-6 rounded-lg shadow min-h-[80vh]'>
           <div className='flex justify-between'>
            <p className='fw-500 lg:text-xl'>Registered Staff</p>
            <p className='btn-primary px-5 py-1 cursor-pointer' onClick={() => setShowModal(true)}>Add New Staff</p>
           </div>
           <div className="mt-12">
            <StaffList/>
           </div>
        </div>
      <Modal title="Invite New Staff" size="md" type="withCancel">
        <InviteStaff close={() => setShowModal(false)}/>
      </Modal>
    </>
  )
}

export default CompanyStaffs