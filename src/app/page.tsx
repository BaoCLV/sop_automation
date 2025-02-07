import Navbar from "@/pages/components/navbar";
import DetailedInvoice from "@/pages/detailed-invoice/DetailedInvoice";

export default function Home() {
  const invoiceData = { rawInvoiceID: "12345", amount: 200 };
  
  return (
    <div>
      <h1>SOP Page</h1>
      <DetailedInvoice invoiceData={invoiceData} />
    </div>
  );
}
