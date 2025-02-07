import { Tabs, Tab, Box } from "@mui/material";
import React from "react";

interface DetailedInvoiceHeaderProps {
  value: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const allTabs = [
  { value: "csv", label: "CSV VIEW" },
  { value: "json", label: "JSON VIEW" },
  
];

const DetailedInvoiceHeader: React.FC<DetailedInvoiceHeaderProps> = ({ value, handleChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        {allTabs.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} wrapped />
        ))}
      </Tabs>
    </Box>
  );
};

export default DetailedInvoiceHeader;
