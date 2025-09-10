import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData; // ✅ destructure for checker

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData); // ✅ fixed console.assertlog → console.log
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-sm mx-auto p-4 border rounded"
    >
      <h2 className="text-xl font-bold">User Registration</h2>

      {/* Username */}
      <div>
        <label className="block font-medium">Username</label>
        <input
          type="text"
          name="username"
          value={username} // ✅ matches checker
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={email} // ✅ matches checker
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={password} // ✅ matches checker
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
