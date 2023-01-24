import apiManager from './apiServiceManager.service'

export const createProductFn = async (product: string) => {
  const response = await apiManager.post('products', product)
  return response.data
}
export const getProductsEnumFn = async () => {
  const response = await apiManager.get('products/enums')
  return response.data
}

export const getProductsFn = async () => {
  const response = await apiManager.get('products')
  return response.data
}
