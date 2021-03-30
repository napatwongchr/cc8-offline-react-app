import { Formik, Field, Form } from "formik";
import {
  Text,
  Box,
  Stack,
  Flex,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const MyInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

function SignUpPage() {
  return (
    <Flex direction="column" align="center" p="10" bg="muted.200" minH="100vh">
      <Heading mb="5">Sign Up</Heading>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <Stack
                spacing="5"
                width="400px"
                bg="muted.300"
                p="10"
                borderRadius="2xl"
              >
                <Box>
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="Jane"
                    isInvalid={errors.firstName && touched.firstName}
                    component={MyInput}
                  />
                  {errors.firstName && touched.firstName ? (
                    <Text color="red">{errors.firstName}</Text>
                  ) : null}
                </Box>

                <Box>
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    isInvalid={errors.lastName && touched.lastName}
                    component={MyInput}
                  />
                  {errors.lastName && touched.lastName ? (
                    <Text color="red">{errors.lastName}</Text>
                  ) : null}
                </Box>

                <Box>
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    isInvalid={errors.email && touched.email}
                    component={MyInput}
                  />
                  {errors.email && touched.email ? (
                    <Text color="red">{errors.email}</Text>
                  ) : null}
                </Box>

                <Button type="submit">Submit</Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
}

export default SignUpPage;
