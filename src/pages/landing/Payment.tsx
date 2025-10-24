import Footer from "../../lib/components/layout/landing/sections/Footer";
import Header from "../../lib/components/layout/landing/sections/Header";

export default function PaymentSettlement() {
  return (
    <div>
      <Header />
      <section className="container-sm max-w-[1150px] container  mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Payment Settlement Structure
        </h1>

        <p className="mb-4">
          Below is a fair payment settlement structure for AllDrive SOS,
          including a clear logic flow, and a cancellation policy that ensures
          accountability for both customers and technicians.
        </p>
        <p className="mb-6 text-sm text-gray-600">
          Note: Percentage values are specified in the examples below for
          clarity. But in the platform, percentages should be variables.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          🔹 1. Overview of Transaction Flow
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Customers request roadside assistance.</li>
          <li>
            Technician (through a registered company) quotes a Quoted amount
            (QA).
          </li>
          <li>
            Customer pays the total amount = Quoted Amount + 5% Processing Fee
            (AllDrive SOS) + Applicable Taxes.
          </li>
          <li>
            After job completion, funds are settled among the parties as per the
            structure below.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          🔹 2. Payment Settlement Structure
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Party</th>
                <th className="py-2 px-4 border-b text-left">
                  Settlement Basis
                </th>
                <th className="py-2 px-4 border-b text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">AllDrive SOS</td>
                <td className="py-2 px-4 border-b">
                  5% Processing Fee + 10% from Quote Amount (QA)
                </td>
                <td className="py-2 px-4 border-b">
                  The platform earns a total of 15% — 5% processing (paid by the
                  customer) + 10% from the QA as platform commission.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Roadside Company</td>
                <td className="py-2 px-4 border-b">5% of QA</td>
                <td className="py-2 px-4 border-b">
                  The company receives 5% of the QA to cover insurance and
                  operational expenses.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Technician</td>
                <td className="py-2 px-4 border-b">85% of QA</td>
                <td className="py-2 px-4 border-b">
                  The technician receives the remaining balance (after the
                  platform and company commissions).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">✅ Example:</h3>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Quoted Amount (QA) by Technician = $100.00</li>
          <li>5% Processing Fee (AllDrive SOS) = $5.00</li>
          <li>Total Customer Payment (excluding tax): $105.00</li>
        </ul>
        <p className="font-semibold mb-2">
          Settlement Breakdown (of $100 Quoted Amount):
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>AllDrive SOS: $10 (platform commission)</li>
          <li>Company: $5</li>
          <li>Technician: $85</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          🔹 3. Cancellation Settlement Structure
        </h2>
        <p className="mb-4">
          To ensure fairness and discourage unnecessary cancellations:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">
                  Cancellation Trigger
                </th>
                <th className="py-2 px-4 border-b text-left">
                  Settlement Rule
                </th>
                <th className="py-2 px-4 border-b text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">
                  Customer cancels after making payment
                </td>
                <td className="py-2 px-4 border-b">
                  Customers are charged 15% of the service amount.
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>a. 7.5% goes to Technician.</li>
                    <li>
                      b. 7.5% goes to AllDrive SOS (as administrative charge).
                    </li>
                  </ul>
                </td>
                <td className="py-2 px-4 border-b">
                  <ul className="list-disc list-inside">
                    <li>
                      1. Protects technician’s lost time and ensures
                      accountability.
                    </li>
                    <li>2. AllDrive SOS Payment Processing overhead</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Technician cancels after customer payment
                </td>
                <td className="py-2 px-4 border-b">
                  The technician is charged 15% of the service amount to his
                  wallet.
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>a. 100% QA refunded to Customer.</li>
                    <li>
                      b. 15% of QA charged to Technician is retained by AllDrive
                      SOS.
                    </li>
                  </ul>
                </td>
                <td className="py-2 px-4 border-b">
                  <ul className="list-disc list-inside">
                    <li>
                      1. Protects customer experience and maintains trust.
                    </li>
                    <li>2. AllDrive SOS Payment Processing overhead</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Cancellation before payment
                </td>
                <td className="py-2 px-4 border-b">
                  No charge to either party.
                </td>
                <td className="py-2 px-4 border-b">
                  Fair, as no engagement or commitment was established.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mb-4">🔹 4. Summary Table</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Item</th>
                <th className="py-2 px-4 border-b text-left">Rate / Fee</th>
                <th className="py-2 px-4 border-b text-left">Receiver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">
                  Processing Fee is charged to customer
                </td>
                <td className="py-2 px-4 border-b">5%</td>
                <td className="py-2 px-4 border-b">AllDrive SOS</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Platform Commission is charged to technician QA
                </td>
                <td className="py-2 px-4 border-b">10%</td>
                <td className="py-2 px-4 border-b">AllDrive SOS</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Company Share is charged to technician QA
                </td>
                <td className="py-2 px-4 border-b">5%</td>
                <td className="py-2 px-4 border-b">Company</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Technician Share</td>
                <td className="py-2 px-4 border-b">85%</td>
                <td className="py-2 px-4 border-b">Technician</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Cancellation Fee (if applicable)
                </td>
                <td className="py-2 px-4 border-b">15%</td>
                <td className="py-2 px-4 border-b">
                  Split per cancellation rules
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mb-4">🔹 5. Rationale</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <span className="font-semibold">✅ Fairness:</span> Both technician
            and company are rewarded proportionally while the platform sustains
            operations.
          </li>
          <li>
            <span className="font-semibold">✅ Transparency:</span> Customers
            see clear breakdowns of service, fees, and taxes.
          </li>
          <li>
            <span className="font-semibold">✅ Accountability:</span> The 15%
            cancellation fee deters last-minute cancellations from either side.
          </li>
          <li>
            <span className="font-semibold">✅ Sustainability:</span> AllDrive
            SOS maintains a healthy revenue model without overburdening users or
            providers.
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}
