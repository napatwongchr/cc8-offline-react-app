import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    text: "#424642",
    brand: {
      200: "#424642",
      100: "#536162",
    },
    highlight: {
      200: "#C06014",
      100: "#F27B19",
    },
    muted: {
      300: "#F3F4ED",
      200: "#FCFCFC",
      100: "#FFFFFF",
    },
  },
  fonts: {
    heading: "Prompt",
    body: "Prompt",
  },
});
