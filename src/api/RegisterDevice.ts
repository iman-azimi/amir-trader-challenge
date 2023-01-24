import apiManager from './apiServiceManager.service'

export const registerDeviceFn = async (code: string) => {
  const response = await apiManager.post('device/new/claim', code)
  return response.data
}

export const getDeviceFn = async (id: string) => {
  const response = await apiManager.get(`device/${id}/edit`)
  return response.data
}

export const updateInfoDeviceFn = async (params: any, id: string) => {
  const response = await apiManager.put(`device/${id}/info`, params)
  return response.data
}
export const updateSensorsDeviceFn = async (params: any, id: string) => {
  const response = await apiManager.put(`device/${id}/sensors`, params)
  return response.data
}
