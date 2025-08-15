import { FC } from "react";
import ReviewModal from "./ReviewModal";
import Tabs from "../../ui/Tabs";
import QueryModal from "./QueryModal";

interface Props {
  id: string;
  refetch: () => void;
  close: () => void;
}
const ActionModal: FC<Props> = ({ id, refetch, close }) => {
  const tabs = [
    {
      title: <p>Complete Action</p>,
      content: <ReviewModal id={id} close={close} />,
    },
    {
      title: <p>Submit Query</p>,
      content: <QueryModal id={id} close={close} refetch={refetch} />,
    },
  ];
  return (
    <div>
      <Tabs tabs={tabs} type="charts" />
    </div>
  );
};

export default ActionModal;
