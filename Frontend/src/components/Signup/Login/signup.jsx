import { useState } from "react";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Signup</h2>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="border rounded p-3 w-full h-12"
              required
            />
          </div>

          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              id="password"
              className="border rounded p-3 w-full h-12"
              required
            />
          </div>

          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirm-password"
              className="border rounded p-3 w-full h-12"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full h-12"
          >
            Signup
          </button>

          <div className="mt-4 text-center">
            <span>Already have an account? </span>
            <a href="#" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
