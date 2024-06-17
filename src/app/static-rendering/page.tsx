async function getData() {
  // Fetch data from external APIs, databases that may contain security key
  const resp = await fetch(
    'https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1',
    { next: { revalidate: 3 } }
  );
  return resp.json();
}

export default async function AboutPage() {
  const data = await getData();
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Static rendering (Server Component)
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        A number was fetched in <b>Build Time</b>:
        <br />
        {JSON.stringify(data[0], null, 2)}
      </p>
      <div className="mt-4 rounded-md border-s-[6px] border-solid border-blue-600 bg-blue-100 p-2.5 dark:border-white dark:bg-sky-900 ">
        <strong>Note:</strong> Routes are rendered at build
        time, or in the background after data revalidation.
        The result is cached.
      </div>
    </div>
  );
}
