import ProviderHomePage from "../../pages/provider/home";
import ProviderNotification from "../../pages/provider/notify";
import ProviderPayments from "../../pages/provider/payments";
import ProviderRequests from "../../pages/provider/requests";
import ProviderServices from "../../pages/provider/services";
import ProviderSetting from "../../pages/provider/settings";

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
        path: 'request',
        component: <ProviderRequests/>
    },
]