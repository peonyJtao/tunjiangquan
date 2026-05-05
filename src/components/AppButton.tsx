import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

import { pxToRem } from '@/utils/fontUtils';
import { useTheme } from '@mui/material';

type AppButtonProps = {
} & ButtonProps;

const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ children, sx, ...props }, ref) => {
    const theme = useTheme();
    return (
      <Button
        ref={ref}
        {...props}
        sx={{
          fontWeight: 600,
          borderRadius: pxToRem(32),
          color: 'primary.contrastText',
          background: theme.customGradients.primary,
          backdropFilter: 'blur(4px)',
          ...sx,
        }}
      >
        {children}
      </Button>
    );
  }
);

AppButton.displayName = 'AppButton';

export default AppButton;
