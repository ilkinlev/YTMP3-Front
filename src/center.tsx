import { useState } from "react";
import "./App.css";

function Converter() {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const handleConvert = async () => {
    setIsLoading(true);

    // Simulate a conversion process (replace with actual conversion logic)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // After conversion, set the download link (replace with actual link generation)
    setDownloadLink("https://example.com/download/file.mp3");

    setIsLoading(false);
  };

  return (
    <>
      <form className="bg-zinc-800 w-full text-white border-t-2 border-t-[#0085ff] rounded-[3px] mx-auto mb-[30px] p-[15px]">
        <div>Please insert a valid YouTube video URL</div>
        <div>
          <input
            className="w-1/2 h-8 mt-3 mr-2 border p-1 border-blue-500 outline-none"
            type="text"
            name="url"
            placeholder="https://www.youtube.com/watch?v=url"
            autoFocus
            required
          />

          {downloadLink ? (
            <a
              href={downloadLink}
              download
              className="text-white bg-blue-500 p-2 rounded mt-4"
            >
              Download
            </a>
          ) : (
            <button
              onClick={handleConvert}
              className="text-white bg-[#191919] w-auto border border-[#0179e6] outline-none box-border p-2 mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              ) : (
                "Convert"
              )}
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default Converter;
