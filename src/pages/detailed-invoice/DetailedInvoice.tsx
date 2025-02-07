"use client";

import React, { useState, useEffect } from "react";
import DetailedInvoiceHeader from "./DetailedInvoiceHeader";
import JSONView from "./JSONView";
import CSVView from "./CSVView";

interface InvoiceData {
  rawInvoiceID?: string;
  [key: string]: any;
}

const DetailedInvoice: React.FC = () => {
  const [tab, setTab] = useState<string>("json");
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("data/invoice_data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch invoice data");
        return res.json();
      })
      .then((data) => {
        setInvoiceData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleChangeTab = (_: React.SyntheticEvent, value: string) => {
    setTab(value);
  };

  return (
    <div>
      <DetailedInvoiceHeader value={tab} handleChange={handleChangeTab} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      
      {!loading && !error && invoiceData && (
        <>
          {tab === "csv" && <CSVView />}
          {tab === "json" && <JSONView src={invoiceData} />}
          
        </>
      )}
    </div>
  );
};

export default DetailedInvoice;
