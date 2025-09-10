import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Formik submitted:", values);
      }}
    >
      {() => (
        <Form className="space-y-4 max-w-sm mx-auto p-4 border rounded">
          <h2 className="text-xl font-bold">User Registration (Formik)</h2>

          {/* Username */}
          <div>
            <label className="block font-medium">Username</label>
            <Field name="username" type="text" className="border p-2 w-full rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <Field name="email" type="email" className="border p-2 w-full rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium">Password</label>
            <Field name="password" type="password" className="border p-2 w-full rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
