import { Suspense } from 'react';

import VideoComponent from '@/components/video-component';

export default function Page() {
  return (
    <section>
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent />
      </Suspense>
      {/* Other content of the page */}
    </section>
  );
}
