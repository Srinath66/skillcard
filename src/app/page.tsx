import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Create Your Developer Profile Card
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Showcase your skills, projects, and GitHub stats in a beautiful, shareable card.
        </p>
        <div className="flex justify-center">
          <Link
            href="/create"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            Create Your Card
          </Link>
        </div>
      </div>
    </div>
  );
} 