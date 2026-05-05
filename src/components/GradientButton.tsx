
import { Button, useTheme } from "@mui/material";

const GradientButton = ({ children, ...props }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return <Button sx={{
    // @ts-ignore
    background: theme.customGradients.secondary,
  }} {...props}>{children}</Button>
}
export default GradientButton;
