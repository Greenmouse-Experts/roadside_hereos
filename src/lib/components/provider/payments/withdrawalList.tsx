import EmptyState from "../../ui/EmptyState";

const WithdrawalList = () => {
  return (
    <div>
      <div>
        <EmptyState msg="You currently do not have any withdrawal record on the system." />
      </div>
    </div>
  );
};

export default WithdrawalList;
