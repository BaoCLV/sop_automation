import { Box } from "@mui/material";
import React from "react";
import ReactJson from "react-json-view";

interface JSONViewProps {
  src: any;
}

const JSONView: React.FC<JSONViewProps> = ({ src }) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <ReactJson src={src} />
    </Box>
  );
};

export default JSONView;
