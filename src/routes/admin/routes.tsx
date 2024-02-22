import AdminCategory from "../../pages/admin/category";
import AdminDashboardHome from "../../pages/admin/home";
import AdminNotification from "../../pages/admin/notify";
import ProviderDetails from "../../pages/admin/providerDetails";
import ServiceProviders from "../../pages/admin/providers";
import AdminRequests from "../../pages/admin/requests";
import AdminRenderedServices from "../../pages/admin/services";
import AdminSettings from "../../pages/admin/settings";
import StaffDetail from "../../pages/admin/staffDetail";
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
        id: 'admin3',
        path: 'providers',
        component: <ServiceProviders/>
    },
    {
        id: 'admin4',
        path: 'category',
        component: <AdminCategory/>
    },
    {
        id: 'admin5',
        path: 'requests',
        component: <AdminRequests/>
    },
    {
        id: 'admin6',
        path: 'services',
        component: <AdminRenderedServices/>
    },
    {
        id: 'admin7',
        path: 'notify',
        component: <AdminNotification/>
    },
    {
        id: 'admin8',
        path: 'settings',
        component: <AdminSettings/>
    },
    {
        id: 'admin9',
        path: 'providers/:id',
        component: <ProviderDetails/>
    },
    {
        id: 'admin10',
        path: 'providers/staff/:id',
        component: <StaffDetail/>
    },
]