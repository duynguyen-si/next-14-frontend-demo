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
  const src = (await getVideoSrc()) as string;

  return (
    <iframe src={src} frameBorder="0" allowFullScreen />
  );
}
