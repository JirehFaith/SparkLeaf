import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Left side (image) */}
      <div className="hidden lg:flex w-1/2  items-center justify-center">
        <img
          src="/images/tools.jpg"
          alt="login"
          className="max-w-md"
        />
      </div>

      {/* Right side (form) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20">
        
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 text-sm">
          <button className="text-gray-600 hover:text-black">
            <a href="/">← Back to Home</a>
          </button>

          <div className="flex items-center gap-2">
            <span>Need Help?</span>
            <span className="cursor-pointer">⚙️</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <h1 className="text-2xl font-bold">Log in</h1>
            <p className="text-gray-500">
              Enter your credentials to continue
            </p>
          </div>

          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none"
            required
          />

          <div>
            <input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-4 py-2 focus:outline-none"
              required
            />
            <p className="text-sm text-blue-500 mt-1 cursor-pointer">
              Forgot password?
            </p>
          </div>

          <div>
            <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded hover:opacity-90"
          >
            Login →
          </button>
          <p>Don't have an account? <a href="/register" className="text-primary font-medium hover:underline">Sign Up</a></p>
          </div>
          

          <div className="text-center text-gray-400">or</div>

          <button
            type="button"
            className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            Continue with Google
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;