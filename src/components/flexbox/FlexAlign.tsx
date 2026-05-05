import { Box, type BoxProps } from "@mui/material";

type FlexAlignProps = BoxProps;

const FlexAlign = ({ children, sx, ...props }: FlexAlignProps) => (
  <Box sx={{ display: "flex", alignItems: "center", ...(typeof sx === "object" && !Array.isArray(sx) ? sx : {}) }} {...props}>
    {children}
  </Box>
);

export default FlexAlign;
