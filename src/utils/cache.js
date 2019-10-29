import Taro from '@tarojs/taro'

export function setCache(key, data) {
  let value = data
  if (typeof data === 'object') {
    value = JSON.stringify(data)
  }

  try {
    Taro.setStorageSync(key, value)
  } catch(e) {
    Taro.clearStorage()
    Taro.setStorageSync(key, value)
  }
}

export function getCache(key) {
  let value = Taro.getStorageSync(key)
  return value
}
