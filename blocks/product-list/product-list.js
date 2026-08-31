export default async function decorate(block) {
  const jsonUrl = block.querySelector('a')?.href;

  if (!jsonUrl) {
    block.innerHTML = '<p>Products JSON URL is missing.</p>';
    return;
  }

  try {
    const response = await fetch(jsonUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const json = await response.json();

    const products = json.data || [];

    const list = document.createElement('ul');
    list.className = 'products-list';

    products.forEach((product) => {
      const item = document.createElement('li');
      item.className = 'product-item';

      item.innerHTML = `
        <h3>${product.Name}</h3>
        <p>Category: ${product.Category}</p>
        <p>Price: ₹${product.Price}</p>
      `;

      list.append(item);
    });

    block.innerHTML = '';
    block.append(list);
  } catch (error) {
    console.error('Error loading products:', error);
    block.innerHTML = '<p>Unable to load products.</p>';
  }
}