export default async function decorate(block) {
  const response = await fetch('/products.json');
  const json = await response.json();

  const products = json.data || [];

  const pageSize = 20;
  let currentPage = 1;

  function renderPage(page) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const currentProducts = products.slice(start, end);

    const totalPages = Math.ceil(products.length / pageSize);

    block.innerHTML = `
      <div class="products">
        ${currentProducts.map((product) => `
          <div class="product-card">
            <h3>${product.Name}</h3>
            <p><strong>Category:</strong> ${product.Category}</p>
            <p><strong>Price:</strong> ₹${product.Price}</p>
          </div>
        `).join('')}
      </div>

      <div class="pagination">
        <button id="prevBtn" ${page === 1 ? 'disabled' : ''}>
          Previous
        </button>

        <span class="page-info">
          Page ${page} of ${totalPages}
        </span>

        <button id="nextBtn" ${page === totalPages ? 'disabled' : ''}>
          Next
        </button>
      </div>
    `;

    const prevBtn = block.querySelector('#prevBtn');
    const nextBtn = block.querySelector('#nextBtn');

    prevBtn.addEventListener('click', () => {
      currentPage--;
      renderPage(currentPage);
    });

    nextBtn.addEventListener('click', () => {
      currentPage++;
      renderPage(currentPage);
    });
  }

  renderPage(currentPage);
}