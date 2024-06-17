export default function ProductDetailPage() {
  return (
    <div
      className="w-full max-w-sm bg-white border
    border-gray-200 rounded-lg shadow dark:bg-gray-800
    dark:border-gray-700 flex justify-center"
    >
      <video width="600" height="400" controls>
        <source src="./video/MIB2.mp4" type="video/mp4" />
        <source src="./video/MIB2.webm" type="video/webm" />
        <track
          label="pt"
          kind="subtitles"
          srcLang="pt"
          src="./video/MIB2-subtitles-pt-BR.vtt"
        />
        <track
          label="vi"
          kind="subtitles"
          srcLang="vi"
          src="./video/MIB2-subtitles-vi-BR.vtt"
        />
      </video>
    </div>
  );
}
