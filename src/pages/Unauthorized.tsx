import { Link } from "react-router"

export default function Unauthorized() {
  return (
       <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-7xl font-extrabold text-red-500">403</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Access Denied
      </h2>

      <p className="mt-2 max-w-md text-gray-600">
        You are logged in, but you do not have permission to view this page.
        Please contact an administrator if you believe this is a mistake.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Go Home
        </Link>

        <Link
          to="/login"
          className="rounded-md border px-5 py-2 text-gray-700 hover:bg-gray-100"
        >
          Login Again
        </Link>
      </div>
    </div>
  )
}
