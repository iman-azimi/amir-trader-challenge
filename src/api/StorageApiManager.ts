import apiManager from './apiServiceManager.service'

export const createStorageFn = async (storage: any) => {
  const response = await apiManager.post('location', storage)
  return response.data
}

export const getStoragesFn = async (params: any) => {
  const response = await apiManager.get('location', { params })
  return response.data
}

export const deleteStorageFn = async (id: string) => {
  const response = await apiManager.delete(`location/${id}`)
  return response.data
}

export const editStorageFn = async (storage: any) => {
  const response = await apiManager.put(`location/${storage.id}`, storage)
  return response.data
}
