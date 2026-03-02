import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center bg-gray-900 dark:bg-dark-bg">
      <div className="mb-6 text-8xl">🎨</div>
      <h1 className="mb-4 text-6xl text-gray-500 font-display dark:text-white">
        404
      </h1>
      <p className="mb-8 text-xl text-gray-500 dark:text-gray-400">
        Oops — this page got painted over.
      </p>
      <Link
        to="/"
        className="px-8 py-4 font-bold text-white transition-all rounded-full bg-brand-500 hover:bg-brand-600 hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
}
