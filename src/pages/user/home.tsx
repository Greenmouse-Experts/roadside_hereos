import Alerts from "../../lib/components/user/home/Alerts";
import UserStats from "../../lib/components/user/home/Stats";

const UsersHome = () => {
  return (
    <>
      <div>
        <div className="mb-6">
        <UserStats/>
        </div>
        <div>
            <div>
                <Alerts/>
            </div>
        </div>
      </div>
    </>
  );
};

export default UsersHome;
