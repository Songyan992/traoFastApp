/* eslint-disable import/no-commonjs */
import Taro from '@tarojs/taro'
import {BASE_URL} from '../config/aip'
import {getCache } from '../utils/cache'

const md5 = require('crypto-js/md5')

function getSign (url, args = {}) {
  let time = parseInt(new Date() / 1000, 10)
  let string = md5(args.sign).toString()
  let header = {
    'x-access-sign': string,
    'x-access-time': time,
  }
  return header
}

export async function getJSON(url, data = {}) {
  let args = data ? data : {}
  const result = await Taro.request({
    url: BASE_URL + url,
    method: 'GET',
    header: {
      ...getSign(url, args),
      'uid': getCache('uid')
    },
    data: data,
  })
  return result
}

export async function postJSON(url, data = {}) {
  let args = data ? data : {}
  return Taro.request({
    url: BASE_URL + url,
    method: 'POST',
    header: {
      ...getSign(url, args),
      'uid': getCache('uid')
    },
    data: data
  }).then(result => {
    return result
  })
}

export async function deleteJSON(url, data = {}) {
  let args = data ? data : {}
  return Taro.request({
    url: BASE_URL + url,
    data: data,
    method: 'DELETE',
    header: {
      ...getSign(url, args),
      'uid': getCache('uid')
    },
  }).then(result => {
    return result
  })
}
