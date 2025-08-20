import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../../../services/api/serviceApi";
import { useState } from "react";

interface ChargesData {
  id: string;
  tax_percent: number;
  service_percent: number;
  company_percent: number;
  driver_cancellation_fee_percent: number;
  client_refund_charge_percent: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Charges {
  success: boolean;
  data: ChargesData;
}
export default function AdminCharges() {
  const queryClient = useQueryClient();
  const {
    data: chargesData,
    isLoading,
    isError,
  } = useQuery<Charges>({
    queryKey: ["charges"],
    queryFn: async () => {
      const response = await apiClient.get("/charge/fetch-charges");
      return response.data;
    },
  });

  const initialCharges: ChargesData = chargesData?.data || {
    id: "",
    tax_percent: 0,
    service_percent: 0,
    company_percent: 0,
    driver_cancellation_fee_percent: 0,
    client_refund_charge_percent: 0,
    active: false,
    createdAt: "",
    updatedAt: "",
  };

  const [charges, setCharges] = useState<ChargesData>(initialCharges);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCharges({
      ...charges,
      [name]: parseFloat(value),
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching charges.</div>;

  return (
    <div>
      <h1>Update Charges</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tax_percent">Tax Percent:</label>
          <input
            type="number"
            id="tax_percent"
            name="tax_percent"
            value={charges.tax_percent}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="service_percent">Service Percent:</label>
          <input
            type="number"
            id="service_percent"
            name="service_percent"
            value={charges.service_percent}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="company_percent">Company Percent:</label>
          <input
            type="number"
            id="company_percent"
            name="company_percent"
            value={charges.company_percent}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="driver_cancellation_fee_percent">
            Driver Cancellation Fee Percent:
          </label>
          <input
            type="number"
            id="driver_cancellation_fee_percent"
            name="driver_cancellation_fee_percent"
            value={charges.driver_cancellation_fee_percent}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="client_refund_charge_percent">
            Client Refund Charge Percent:
          </label>
          <input
            type="number"
            id="client_refund_charge_percent"
            name="client_refund_charge_percent"
            value={charges.client_refund_charge_percent}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Charges</button>
      </form>
    </div>
  );
}
