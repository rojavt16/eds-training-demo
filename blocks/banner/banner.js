export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const imageUrl = rows[1]?.textContent.trim();
  const title = rows[2]?.textContent.trim();
  const description = rows[3]?.textContent.trim();

  const ctaData = rows[4]?.textContent.trim();
  const [ctaText, ctaUrl] = ctaData.split('|');

  block.innerHTML = `
    <div class="banner-content">
      ${imageUrl}
      <h2>${title}</h2>
      <p>${description}</p>
      ${ctaUrl}${ctaText}</a>
    </div>
  `;
}
