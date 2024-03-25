import PaymentListing from "../../lib/components/admin/payments/paymentListing";

const AdminPayments = () => {
    const data = [
        {
            ref: "EWUIWW22221",
            service_name: "Emergency Towing Service",
            createdAt: "2024-01-16T14:24:26.000Z",
            amount: 3450,
            status: "successful",
            type: "card"
        },
        {
            ref: "EWUIWW22221",
            service_name: "Emergency Towing Service",
            createdAt: "2024-01-16T14:24:26.000Z",
            amount: 3450,
            status: "successful",
            type: "card"
        },
        {
            ref: "EWUIWW22221",
            service_name: "Emergency Towing Service",
            createdAt: "2024-01-16T14:24:26.000Z",
            amount: 3450,
            status: "successful",
            type: "card"
        },
        {
            ref: "EWUIWW22221",
            service_name: "Emergency Towing Service",
            createdAt: "2024-01-16T14:24:26.000Z",
            amount: 3450,
            status: "successful",
            type: "card"
        },
        {
            ref: "EWUIWW22221",
            service_name: "Emergency Towing Service",
            createdAt: "2024-01-16T14:24:26.000Z",
            amount: 3450,
            status: "successful",
            type: "card"
        },
        {
            ref: "EWUIWW22221",
            service_name: "Emergency Towing Service",
            createdAt: "2024-01-16T14:24:26.000Z",
            amount: 3450,
            status: "successful",
            type: "card"
        },
    ]
  return (
    <>
      <div>
        <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
            <p className="text-lg lg:p-2 lg:text-2xl fw-600">Service Payments</p>
            <div>
                <PaymentListing isLoading={false} data={data}/>
            </div>
        </div>
      </div>
    </>
  );
}

export default AdminPayments