import jsonp from 'jsonp'

export function GetTheaters () {
  let options = {
    key: ';superagentCallback1539693291707915'
  }
  return new Promise((resolve, reject) => {
    let url = 'https://api.douban.com/v2/movie/in_theaters?count=8&apikey=0df993c66c0c636e29ecbb5344252a4a'
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
export function GetTop () {
  let options = {
    key: ';superagentCallback1540262304444510'
  }
  let url = 'https://api.douban.com/v2/movie/top250?count=8&apikey=0df993c66c0c636e29ecbb5344252a4a'
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

export function GetComingSoon () {
  let options = {
    key: ';superagentCallback1540262304444510'
  }
  let url = 'https://api.douban.com/v2/movie/coming_soon?count=8&apikey=0df993c66c0c636e29ecbb5344252a4a'
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
