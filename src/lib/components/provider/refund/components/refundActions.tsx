import { FC, useRef } from "react";
import Button from "../../../ui/Button";
import useDialog from "../../../../hooks/useDialog";
import ApproveRefund from "./modals/approve-refund";
import DisapproveModal from "./modals/disapprove-refund";
import AdminModal from "./modals/query-refund";
interface Props {
  id: string;
  status: string;
  refetch: () => void;
}
const RefundActions: FC<Props> = ({ id, status, refetch }) => {
  const { Dialog: Query, setShowModal: ShowApprove } = useDialog();
  // const { Dialog: Decline, setShowModal: ShowDecline } = useDialog();
  const { Dialog: Decline, setShowModal: ShowDecline } = useDialog();
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <div>
        <div className="fw-600 flex gap-x-3">
          <Button
            title={"View Query"}
            onClick={() => ShowApprove(true)}
            altClassName="py-2 px-5 btn-primary"
          />
          {status === "pending" && (
            <Button
              title={"Decline"}
              onClick={() => ShowDecline(true)}
              altClassName="py-2 px-5 btn-primary bg-red-600"
            />
          )}
        </div>
      </div>
      <Query
        title="Query Refund"
        size="md"
        close={() => dialogRef.current?.close()}
      >
        <AdminModal id={id} refetch={refetch} />
      </Query>
      {/*<Approve title="Approve Refund" size="md">
        <ApproveRefund
          id={id}
          status={status}
          refetch={refetch}
          close={() => ShowApprove(false)}
        />
      </Approve>*/}
      <Decline title="Decline Refund" size="md">
        <DisapproveModal
          id={id}
          refetch={refetch}
          close={() => ShowDecline(false)}
        />
      </Decline>
    </>
  );
};

export default RefundActions;
