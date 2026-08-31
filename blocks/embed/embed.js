export default function decorate(block) {
    console.log('Embed block loaded');
  const url = block.textContent.trim();

  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = '';

    if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1];
    }

    // Remove any additional URL parameters
    videoId = videoId.split('&')[0].split('?')[0];

    if (videoId) {
      block.innerHTML = `
        <div class="embed-wrapper">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/${videoId}"
            title="YouTube Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      `;
    }
  }
}