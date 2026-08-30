export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const imageUrl = rows[1]?.textContent.trim();
  const title = rows[2]?.textContent.trim();
  const description = rows[3]?.textContent.trim();

  const ctaData = rows[4]?.textContent.trim() || '';
  const [ctaText, ctaUrl] = ctaData.split('|');

  block.innerHTML = `
    <div class="banner-content">
      <img src=${imageUrl}/>
      
      <div class="banner-text">
        <h2>${title}</h2>
        <p>${description}</p>
        <a class="banner-btn" href=${ctaUrl}>
          ${ctaText}
        </a>
      </div>
    </div>
  `;
}