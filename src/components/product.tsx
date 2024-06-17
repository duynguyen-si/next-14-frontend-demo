export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <a href="#">
      <img
        className="p-8 rounded-t-lg"
        src="/apple-watch.png"
        alt="product image"
      />
    </a>
  );
};
