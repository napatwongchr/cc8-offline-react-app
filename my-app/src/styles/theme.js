import { extendTheme } from "@chakra-ui/react";
import Button from "./Button";
import Input from "./Input";

export const theme = extendTheme({
  colors: {
    text: "#424642",
    primary: {
      200: "#424642",
      100: "#536162",
    },
    secondary: "#C06014",
    highlight: {
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
  components: {
    Button,
    Input,
  },
});
