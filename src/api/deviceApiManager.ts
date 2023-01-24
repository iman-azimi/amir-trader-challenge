import apiManager from './apiServiceManager.service'

export const getAllDevices = async () => {
  const response = await apiManager.get('device')
  return response.data
}

export const deleteDevice = async (id: string) => {
  const response = await apiManager.delete(`device/${id}/delete`)
  return response.data
}
