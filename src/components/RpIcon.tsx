
import { Icon, IconButton, IconButtonProps, IconProps } from "@mui/material";

type AppIconButtonProps = Omit<IconButtonProps, "size"> & {
  clickable?: boolean;
  icon: string;
  size?: string;
  onClick?: () => void;
  color?: string;
};
type AppIconProps = Omit<IconProps, "size"> & {
  icon: string;
  size?: string;
  color?: string;
};

function RpIcon(props: AppIconButtonProps);
function RpIcon(props: AppIconProps);

function RpIcon(props) {
  if (props.clickable) {
    const { icon, clickable, size = "medium", sx, className, ...others } = props;
    return (
      <IconButton
        className={`iconfont icon-${icon} ${className ?? ""}`}
        {...others}
        sx={{
          width: "auto",
          height: "auto",
          fontSize: size,
          color: props.color ?? "inherit",
          padding: "6px",
          ...sx,
        }}
      />
    );
  } else {
    const { icon, size = "default", sx, className, ...others } = props;
    return (
      <Icon
        className={`iconfont icon-${icon} ${className ?? ""}`}
        {...others}
        sx={{
          width: "auto",
          height: "auto",
          fontSize: size,
          color: props.color ?? "inherit",
          // padding: "6px",
          ...sx,
        }}
      />
    );
  }
}

export default RpIcon;
