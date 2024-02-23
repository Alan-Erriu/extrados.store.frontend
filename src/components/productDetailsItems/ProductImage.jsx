import { Box, Paper } from "@mui/material";
import React from "react";
import imgagePath from "../../utils/Data";
const ProductImage = () => {
  return (
    <Box>
      <Box>
        <img src={imgagePath} />
      </Box>
    </Box>
  );
};

export default ProductImage;
