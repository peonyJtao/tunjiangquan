import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

type FlexBetweenProps = BoxProps;

const FlexBetween = ({
  children,
  sx,
  ...props
}: FlexBetweenProps) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default FlexBetween;
