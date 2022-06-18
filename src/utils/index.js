
/*
 * 参数说明：
 * number：要格式化的数字
 * decimals：保留几位小数
 * dec_point：小数点符号
 * thousands_sep：千分位符号
 * */
export function formatNumber (number, decimals, decPoint, thousandsSep) {
  if (!number) {
    return ''
  }
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  let s = ''
  const toFixedFix = function (n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

/**
 * 保留两位有效数字
 * value：要格式化的数字
 */
export function toTwoDecimals (value) {
  if (!value) {
    return ''
  }
  let stringValue = (Math.round(value * 100) / 100).toString()
  let pointIndex = stringValue.indexOf('.')
  if (pointIndex < 0) {
    pointIndex = stringValue.length
    stringValue += '.'
  }
  while (stringValue.length <= pointIndex + 2) {
    stringValue += '0'
  }
  return stringValue
}
