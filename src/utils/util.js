import Taro from '@tarojs/taro'

// 获取系统信息
export const systemInfo = Taro.getSystemInfoSync()


export function formatTime(timestamp) {
    // timestamp是整数 否则 parseInt转换
    if (timestamp) {
      let time = new Date(timestamp * 1000)
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let date = time.getDate()
      let hours = time.getHours()
      let minutes = time.getMinutes()
      let seconds = time.getSeconds()
      return year + '年' + month + '月' + date + '日 ' + add(hours) + ':' + add(minutes) + ':' + add(seconds)
    } else {
      return ''
    }
  }
  // 对象类型转字符串
export function objToString(data) {
    let str = ''
    for (let k in data) {
      str += data[k]
    }
    return str
  }

  //显示时间
export const timestampFormat = (timestamp) => {
    function zeroize(num) {
      return (String(num).length == 1 ? '0' : '') + num;
    }
    var curTimestamp = parseInt(new Date().getTime() / 1000) //当前时间戳
    var timestampdiff = curTimestamp - timestamp //当前时间戳与当前时间戳相差秒数
  
    var curDate = new Date(curTimestamp * 1000) //当前时间日期对象
    var tmDate = new Date(timestamp * 1000) //参数时间戳转化成的日期对象
  
    var Y = tmDate.getFullYear(),
      m = tmDate.getMonth() + 1,
      d = tmDate.getDate()
    var curY = curDate.getFullYear()
    // 判断是否是今年
    if (Y == curY) {
      //如果是今年,判断是否是今天
      if (timestampdiff < 3600 * 24) {
        if (timestampdiff < 60) {
          return '刚刚'
        } else if (timestampdiff < 60 * 60) {
          return Math.floor(timestampdiff / 60) + '分钟前'
        } else if (timestampdiff < 60 * 60 * 24) {
          return Math.floor(timestampdiff / 3600) + '小时前'
        }
      } else {
        if (timestampdiff < 3600 * 24 * 30) {
          return Math.floor(timestampdiff / (3600 * 24)) + '天前'
        } else {
          return zeroize(m) + '-' + zeroize(d)
        }
      }
    } else {
      return Y + '-' + zeroize(m) + '-' + zeroize(d)
    }
  }

  //将秒转为时分秒
  export function formateSecondsTxt(s) {
    if (s > 0) {
      let hour = Math.floor(s / 3600)
      let min = Math.floor(s / 60) % 60
      let sec = s % 60
      hour = hour >= 10 ? hour : '0' + hour
      min = min >= 10 ? min : '0' + min
      sec = sec >= 10 ? sec : '0' + sec
      return hour > 0 ? hour + "时" + min + "分" + sec : min + "分" + sec + '秒'
    } else {
      return '00分00秒'
    }
  }