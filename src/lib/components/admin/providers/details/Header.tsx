import { FC, useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { FormatStatus } from "../../../../utils";
import useModal from "../../../../hooks/useModal";
import SuspendModal from "./SuspendModal";
import { useMutation } from "@tanstack/react-query";
import { unsuspendUser } from "../../../../services/api/usersApi";
import { toast } from "react-toastify";
import ReusableModal from "../../../ui/ReusableModal";

interface Props {
  id: string;
  name: string;
  picture: string;
  status: string;
  email: string;
  refetch: () => void;
}
const ProviderDetailsHeader: FC<Props> = ({
  id,
  picture,
  status,
  email,
  name,
  refetch,
}) => {
  const { Modal: Suspend, setShowModal: ShowSuspend } = useModal();
  const { Modal: Unsuspend, setShowModal: ShowUnsuspend } = useModal();
  const [isBusy, setIsBusy] = useState(false);
  const unsus = useMutation({
    mutationFn: unsuspendUser,
    mutationKey: ["unsuspend"],
  });
  const UnsuspendAction = () => {
    const payload = {
      userId: id,
    };
    unsus.mutate(payload, {
      onSuccess: (data) => {
        toast.success(data.message);
        setIsBusy(false);
        refetch();
        ShowUnsuspend(false);
      },
      onError: (error) => {
        toast.error(error.message);
        setIsBusy(false);
      },
    });
  };
  return (
    <>
      <div className="relative">
        <div className="bg-primary flex justify-end gap-x-3 p-8 w-full rounded-lg">
          <div className="text-end">
            <div className="flex items-center gap-x-5">
              <p className="text-white fw-600 lg:text-lg">{name}</p>
              <Menu placement="bottom-end">
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none capitalize">
                    <>
                      {!status
                        ? FormatStatus["active"]
                        : FormatStatus["inactive"]}
                    </>
                  </Button>
                </MenuHandler>
                <MenuList className="">
                  {!status ? (
                    <MenuItem
                      className="my-1 fw-500 flex bg-red-600 text-white items-center gap-x-2 pt-2"
                      onClick={() => ShowSuspend(true)}
                    >
                      Suspend Provider
                    </MenuItem>
                  ) : (
                    <MenuItem
                      className="my-1 fw-500 flex  bg-green-600 text-white items-center gap-x-2 pt-2"
                      onClick={() => ShowUnsuspend(true)}
                    >
                      Unsuspend Provider
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </div>
            <div>
              <p className="text-gray-300 italic">{email}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-16 left-6">
          <ProfileAvatar url={picture} name={name} size={130} font={35} />
        </div>
      </div>
      <Suspend title="Suspend Comapny" size="sm" type="withCancel">
        <SuspendModal
          id={id}
          close={() => ShowSuspend(false)}
          refetch={refetch}
        />
      </Suspend>
      <Unsuspend title="" size="sm">
        <ReusableModal
          title="Do you want to unsuspend this company/provider"
          action={UnsuspendAction}
          closeModal={() => ShowUnsuspend(true)}
          actionTitle="Unsuspend"
          cancelTitle="Close"
          isBusy={isBusy}
        />
      </Unsuspend>
    </>
  );
};

export default ProviderDetailsHeader;
