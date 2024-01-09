import AdminCategory from "../../pages/admin/category";
import AdminDashboardHome from "../../pages/admin/home";
import AdminUsers from "../../pages/admin/users";

export const adminRoutes = [
    {
        id: 'admin1',
        path: '',
        component: <AdminDashboardHome/>
    },
    {
        id: 'admin2',
        path: 'users',
        component: <AdminUsers/>
    },
    {
        id: 'admin2',
        path: 'providers',
        component: <AdminUsers/>
    },
    {
        id: 'admin2',
        path: 'category',
        component: <AdminCategory/>
    },
    {
        id: 'admin2',
        path: 'requests',
        component: <AdminUsers/>
    },
    {
        id: 'admin2',
        path: 'services',
        component: <AdminUsers/>
    },
    {
        id: 'admin2',
        path: 'notify',
        component: <AdminUsers/>
    },
]