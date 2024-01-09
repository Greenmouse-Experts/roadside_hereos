import AdminDashboardLayout from '../../lib/components/layout/admin'
import { Route, Routes } from 'react-router-dom'
import { adminRoutes } from '../../routes/admin/routes'

const AdminDashboard = () => {
  return (
    <>
       <AdminDashboardLayout>
          <Routes>
          {adminRoutes.map((item) => {
            return <Route path={item.path} element={item.component} key={item.id} />;
          })}
          </Routes>
        </AdminDashboardLayout> 
    </>
  )
}

export default AdminDashboard