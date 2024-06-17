import { cookies } from 'next/headers';
import Link from 'next/link';

export const metadata = {
  title: 'About codevolution',
  description: 'About page, home-made',
};

export default async function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);
  console.log('About component');
  return (
    <div className="w-sceeen justify-center flex items-center">
      <div className="max-w-md p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Dynamic-rendering (Server Component)
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Current time will be updated any time you reload
          the page: <b>{new Date().toLocaleTimeString()}</b>
        </p>

        <div className="mt-3 text-sm text-slate-400 underline">
          <Link href="/">Back to main</Link>
        </div>
        <div className="mt-4 rounded-md border-s-[6px] border-solid border-blue-600 bg-blue-100 p-2.5 dark:border-white dark:bg-sky-900 ">
          <strong>Note:</strong> With Dynamic Rendering,
          routes are rendered for each user at request time.
          Any server component will be dynamic if they are
          using any of these: <b>cookies()</b>,{' '}
          <b>header()</b>, or
          <b>searchParams</b>
        </div>
      </div>
    </div>
  );
}
