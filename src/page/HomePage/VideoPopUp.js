// VideoPopup component using react-player
export function VideoPopup({ videoUrl, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl  rounded-lg p-4"
        onClick={(e) => e.stopPropagation()} // Stop click from closing the popup
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
          onClick={onClose}
        >
          ✕
        </button>
        <iframe
          width="100%"
          height="230"
          src={`${getYoutubeEmbedUrl(videoUrl)}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          tabindex="-1"
        ></iframe>
      </div>
    </div>
  );
}

// Function to extract video ID from YouTube URL
const getYoutubeVideoId = (url) => {
  try {
    // Handle youtu.be format
    if (url.includes("youtu.be")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }

    // Handle youtube.com format
    if (url.includes("youtube.com/watch")) {
      const videoId = new URL(url).searchParams.get("v");
      return videoId;
    }

    // Handle youtube.com/embed format
    if (url.includes("youtube.com/embed/")) {
      return url.split("youtube.com/embed/")[1].split("?")[0];
    }

    return null;
  } catch (error) {
    return null;
  }
};

// Function to convert YouTube URL to embed URL
const getYoutubeEmbedUrl = (url) => {
  const videoId = getYoutubeVideoId(url);
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}`;
};
