export function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="border rounded p-2 w-full h-12"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="border rounded p-2 w-full h-12"
              required
            />
          </div>

          <div>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full h-12"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <span>Don't have an account? </span>
            <a href="#" className="text-blue-500 hover:underline">
              Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
