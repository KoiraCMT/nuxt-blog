import { isArray } from 'lodash'

export function filterEmpty(obj: object): object {
  const tmp = {}
  for (const key of Object.keys(obj)) {
    // @ts-ignore
    const isArr = isArray(obj[key])
    // @ts-ignore
    if (isArr && obj[key].length > 0) {
      // @ts-ignore
      tmp[key] = obj[key]
      // @ts-ignore
    } else if ((!isArr && obj[key]) || obj[key] === 0) {
      // @ts-ignore
      tmp[key] = obj[key]
    }
  }
  return tmp
}
export function serialize(obj: object) {
  const str = []
  for (const p in obj)
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(p)) {
      // @ts-ignore
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  return str.join('&')
}
