import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="text-8xl mb-6">🎨</div>
      <h1 className="font-display text-6xl text-gray-900 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
        Oops — this page got painted over.
      </p>
      <Link to="/" className="px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600
        text-white font-bold transition-all hover:scale-105">
        Go Back Home
      </Link>
    </div>
  );
}
