const Input = {
  parts: ["field", "addon"],
  baseStyle: {},
  sizes: {},
  variants: {
    outline: {
      field: {
        bg: "white",
        color: "primary.200",
        borderColor: "primary.200",
        _hover: {
          borderColor: "primary.100",
        },
        _focus: {
          zIndex: 1,
          boxShadow: "0 0 0 1px #F27B19",
          borderColor: "secondary",
        },
      },
    },
    filled: {
      field: {
        border: "1px solid",
        _hover: {
          borderColor: "primary.100",
        },
        _focus: {
          zIndex: 1,
          boxShadow: "0 0 0 1px #F27B19",
          borderColor: "secondary",
        },
      },
    },
    flushed: {
      field: {
        _focus: {
          borderColor: "secondary",
          boxShadow: `0px 1px 0px 0px #F27B19`,
        },
      },
    },
  },
  defaultProps: {},
};

export default Input;
