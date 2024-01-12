import AdminCategory from "../../pages/admin/category";
import AdminDashboardHome from "../../pages/admin/home";
import AdminNotification from "../../pages/admin/notify";
import ServiceProviders from "../../pages/admin/providers";
import AdminRequests from "../../pages/admin/requests";
import AdminRenderedServices from "../../pages/admin/services";
import AdminSettings from "../../pages/admin/settings";
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
        component: <ServiceProviders/>
    },
    {
        id: 'admin2',
        path: 'category',
        component: <AdminCategory/>
    },
    {
        id: 'admin2',
        path: 'requests',
        component: <AdminRequests/>
    },
    {
        id: 'admin2',
        path: 'services',
        component: <AdminRenderedServices/>
    },
    {
        id: 'admin2',
        path: 'notify',
        component: <AdminNotification/>
    },
    {
        id: 'admin2',
        path: 'settings',
        component: <AdminSettings/>
    },
]