const Button = {
  baseStyle: {
    fontWeight: "400",
  },
  sizes: {
    sm: {
      minWidth: "150px",
      fontSize: "sm",
      padding: "4",
    },
    md: {
      minWidth: "150px",
      fontSize: "md",
      padding: "6",
    },
    lg: { fontSize: "lg", padding: "8", minWidth: "150px" },
  },
  variants: {
    primary: {
      bg: "primary.200",
      color: "white",
      ":hover": {
        bg: "primary.100",
      },
      ":focus": {
        boxShadow: "none",
      },
    },
    secondary: {
      bg: "secondary",
      color: "white",
      ":hover": {
        bg: "highlight.100",
      },
      ":focus": {
        boxShadow: "none",
      },
    },
    outline: {
      bg: "muted.100",
      ":hover": {
        color: "white",
        bg: "highlight.100",
      },
      ":focus": {
        boxShadow: "none",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export default Button;
