"use client";

import { useEffect, useState } from "react";
import { Box, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress } from "@mui/material";

const CSVView: React.FC = () => {
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("data/invoice_data.csv")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch CSV data");
        return response.text();
      })
      .then((csvText) => {
        const rows = csvText.split("\n").map((row) => row.split(","));
        setCsvData(rows);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      {loading && <CircularProgress />}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && csvData.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              {csvData[0].map((header, index) => (
                <TableCell key={index} sx={{ fontWeight: "bold" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {csvData.slice(1).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

export default CSVView;
