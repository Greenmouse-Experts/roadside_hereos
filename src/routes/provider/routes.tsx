import ProviderHomePage from "../../pages/provider/home";
import CompanyInvites from "../../pages/provider/invite";
import ProviderNotification from "../../pages/provider/notify";
import ProviderPayments from "../../pages/provider/payments";
import ProviderServices from "../../pages/provider/services";
import ProviderSetting from "../../pages/provider/settings";
import CompanyStaffs from "../../pages/provider/staff";
import StaffDetail from "../../pages/provider/staffDetail";

export const providerRoutes = [
    {
        id: 'user1',
        path: '',
        component: <ProviderHomePage/>
    },
    {
        id: 'user2',
        path: 'services',
        component: <ProviderServices/>
    },
    {
        id: 'user3',
        path: 'notify',
        component: <ProviderNotification/>
    },
    {
        id: 'user4',
        path: 'payments',
        component: <ProviderPayments/>
    },
    {
        id: 'user5',
        path: 'settings',
        component: <ProviderSetting/>
    },
    {
        id: 'user6',
        path: 'staff',
        component: <CompanyStaffs/>
    },
    {
        id: 'users-7',
        path: 'staff/:id',
        component: <StaffDetail/>
    },
    {
        id: 'users-8',
        path: 'invite',
        component: <CompanyInvites/>
    }
]