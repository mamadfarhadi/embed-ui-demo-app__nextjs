import API from '@/config/API'
import { AuthService } from '@/services/auth.service'

export const ProductService = async (
  gtin: string,
): Promise<IProductResponse> => {
  const clientCredentialsToken = await AuthService()

  const res = await API.get<IProductResponse>(`/v1/products/by-gtin/${gtin}`, {
    headers: {
      Authorization: `Bearer ${clientCredentialsToken}`,
    },
  })
  return res.data
}
