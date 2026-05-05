import { useTheme } from "@mui/material";
import { pxToRem } from "@/utils/fontUtils";
import { H5 } from "./Typography";

const GradientLine = ({ title, fontSize }: { title: string, fontSize?: string }) => {
  const theme = useTheme();
  return <H5 sx={{
    // @ts-ignore
    background: theme.customGradients.primary,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    fontSize: fontSize || pxToRem(32)
  }}>{title}</H5>
}
export default GradientLine;
