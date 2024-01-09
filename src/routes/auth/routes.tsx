import ForgetPassword from "../../pages/auth/ForgetPassword";
import ProviderRegister from "../../pages/auth/ProviderRegister";
import UserLogin from "../../pages/auth/UserLogin";

export const authRoutes = [
    {
        id: 'auth-1',
        path: 'login',
        component: <UserLogin/>
    },
    {
        id: 'auth-2',
        path: 'register',
        component: <ProviderRegister/>
    },
    {
        id: 'auth-3',
        path: 'forget',
        component: <ForgetPassword/>
    },
    {
        id: 'auth-4',
        path: 'verify/:id',
        component: <ForgetPassword/>
    },
]