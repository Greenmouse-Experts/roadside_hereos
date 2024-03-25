import { FC } from "react";

interface Props {
  id: string;
}
const ViewReviewsModal: FC<Props> = ({ id }) => {
  console.log(id);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default ViewReviewsModal;
