import { TYPOGRAPHY_SIZES } from "@/utils/fontUtils";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

import clsx from "clsx";
const StyledBox = styled(Box)(({ ellipsis }) => ({
  ...(ellipsis && {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }),
}));
export const H1 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.h1}
      component="h1"
      fontWeight={600}
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H2 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.h2}
      component="h2"
      fontWeight={600}
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H3 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.h3}
      component="h3"
      fontWeight={600}
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H4 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.h4}
      component="h4"
      fontWeight={600}
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H5 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.h5}
      component="h5"
      fontWeight={600}
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H6 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.h6}
      component="h6"
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Paragraph = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.paragraph}
      component="p"
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Small = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.small}
      component="small"
      fontWeight={500}
      lineHeight={1.6}
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Span = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={TYPOGRAPHY_SIZES.span}
      component="span"
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Tiny = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      component="p"
      fontSize={TYPOGRAPHY_SIZES.tiny}
      fontWeight={500}
      lineHeight={1.65}
      color="text.secondary"
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Tiny2 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      component="p"
      fontSize={TYPOGRAPHY_SIZES.tiny2}
      fontWeight={500}
      lineHeight={1.65}
      color="text.secondary"
      ellipsis={ellipsis ? 1 : 0}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};


