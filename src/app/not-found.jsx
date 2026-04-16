import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="text-center bg-white p-10 rounded-2xl shadow-md max-w-md w-full">
        
        <h1 className="text-6xl font-bold text-green-700">404</h1>

        <h2 className="text-2xl font-semibold mt-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="btn btn-primary mt-5">
            Go Back Home
          </button>
        </Link>

      </div>

    </div>
  );
}