import { Suspense } from 'react';

import { Product } from '@/components/product';
import { Reviews } from '@/components/review';

export default function ProductDetailPage() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Suspense
        fallback={<p>Loading product details...</p>}
      >
        <Product />
      </Suspense>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case,
            Starlight Sport
          </h5>
        </a>
        <Suspense fallback={<p>Loading reviews...</p>}>
          <Reviews />
        </Suspense>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
        <div className="mt-4 rounded-md border-s-[6px] border-solid border-blue-600 bg-blue-100 p-2.5 dark:border-white dark:bg-sky-900 ">
          <strong>Note:</strong> This allows the user to see
          parts of the page immediately, before the entire
          content has finished rendering..
        </div>
      </div>
    </div>
  );
}
