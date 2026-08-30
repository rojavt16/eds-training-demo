export default function decorate(block) {
  const rows = [...block.children];

  const imageUrl = rows[1]?.textContent.trim();
  const title = rows[2]?.textContent.trim();
  const description = rows[3]?.textContent.trim();

  const [ctaText, ctaUrl] =
    rows[4]?.textContent.split('|').map((item) => item.trim());

  block.innerHTML = `
    <div class="banner-content">
      <img src=${imageUrl}/>
      <h2>${title}</h2>
      <p>${description}</p>
      <a href=${ctaUrl}>
        ${ctaText}
      </a>
    </div>
  `;
}