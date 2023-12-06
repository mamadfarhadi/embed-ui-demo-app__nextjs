export const ProductService = async (
  gtin: string,
): Promise<IProductResponse> => {
  const res = await fetch(`http://localhost:5173/api/product?gtin=${gtin}`, {
    method: 'GET',
    cache: 'no-cache',
  })
  return await res.json()
}
