'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Client-Component
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        So far you have clicked on the button: {count}{' '}
        time(s)
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Clik here
      </button>
      <div className="mt-3 text-sm text-slate-400 underline">
        <Link href="/">Back to main</Link>
      </div>

      <div className="mt-4 rounded-md border-s-[6px] border-solid border-blue-600 bg-blue-100 p-2.5 dark:border-white dark:bg-sky-900 ">
        <strong>Note:</strong> Client Components can use
        state, effects, and event listeners, meaning they
        can provide immediate feedback to the user and
        update the UI.
      </div>
    </div>
  );
}
