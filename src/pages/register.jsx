import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.password.length < 6)
      newErrors.password = "Minimum 6 characters";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!form.agree)
      newErrors.agree = "You must accept the terms";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Registered:", form);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-24 lg:pt-28 overflow-hidden">

      {/* Background */}
      <img
        src="/images/cleaning-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Content */}
      <div className="relative w-full max-w-md">

        {/* Top Bar */}
        <div className="flex justify-between mb-6 text-sm">
          <a href="/" className="text-gray-500 hover:text-black">
            ← Back to Home
          </a>
          <span className="text-gray-400">Need Help?</span>
        </div>

        {/* Card */}
        <div className="relative bg-white shadow-xl rounded-2xl p-8 transition hover:shadow-2xl hover:-translate-y-1">

          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full"></div>

          {/* Header */}
          <div className="mb-6 text-center relative">
            
            {/* Icon */}
                <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-primary/10 flex items-center justify-center rounded-full">
                   <div className="  ">
    <img
      src="./images/logo1.png"
      alt="logo"
      className="h-24 w-24 object-cover  "
    />
  </div>
                </div>
                </div>

            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-gray-500 text-sm">
              Join Sparkleaf for cleaning & logistics services
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 relative">

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" name="agree" onChange={handleChange} />
              <p>I agree to Terms & Privacy Policy</p>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-xs">{errors.agree}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 text-center text-gray-400 text-sm">or</div>

          {/* Google */}
          <button className="w-full border py-3 rounded-lg hover:bg-gray-50 transition">
            Continue with Google
          </button>

          {/* Switch */}
          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-primary font-medium">
              Login
            </a>
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Register;