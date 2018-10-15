import jsonp from 'jsonp'
let option = {}
export function getList (count, start) {
  let url = `https://api.douban.com/v2/event/list?loc=108288&start=${start}&count=${count}`
  return new Promise((resolve, reject) => {
    jsonp(url, option, function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
