import { list } from '@vercel/blob';

const getVideoSrc = async () => {
  const source = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        'https://www.youtube.com/embed/UXiwRmlCZ7E?si=ZCpAo6jh40dWHyNE'
      );
    }, 2000);
  });
  return source;
};

export default async function VideoComponent() {
  const { blobs } = await list({
    prefix: 'thuc-d3Kltg62dcjcEyY2tJyScjD42DlJS5.mp4',
    limit: 1,
  });
  const { url } = blobs[0];
  console.log(url);

  // const src = (await getVideoSrc()) as string;

  return (
    <iframe src={url} frameBorder="0" allowFullScreen />
  );
}
