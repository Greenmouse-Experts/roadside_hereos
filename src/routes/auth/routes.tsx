import AdminLogin from "../../pages/auth/AdminLogin";
import ForgetPassword from "../../pages/auth/ForgetPassword";
import OnboardStaff from "../../pages/auth/OnboardStaff";
import PasswordSet from "../../pages/auth/Password";
import ProviderRegister from "../../pages/auth/ProviderRegister";
import ResetPassword from "../../pages/auth/ResetPassword";
import UserLogin from "../../pages/auth/UserLogin";
import VerifyEmail from "../../pages/auth/VerifyEmail";

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
        id: 'auth-5',
        path: 'admin',
        component: <AdminLogin/>
    },
    {
        id: 'auth-6',
        path: 'verify/:code',
        component: <VerifyEmail/>
    },
    {
        id: 'auth-7',
        path: 'reset/:code',
        component: <ResetPassword/>
    },
    {
        id: 'auth-8',
        path: 'onboard/:code',
        component: <OnboardStaff/>
    },
    {
        id: 'auth-8',
        path: 'password/:code',
        component: <PasswordSet/>
    }
]