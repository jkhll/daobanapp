// import jsonp from 'jsonp'
import axios from 'axios'

export function GetTheaters () {
  let url = `http://localhost:8080/jsonp1?count=8`
  return axios.get(url)
  // let options = {
  //   key: ';superagentCallback1539693291707915'
  // }
  // return new Promise((resolve, reject) => {
  //   let url = 'http://t.yushu.im/v2/movie/in_theaters?count=8&apikey=0df993c66c0c636e29ecbb5344252a4a'
  //   // let url = '/jsonp'
  //   jsonp(url, options, (err, data) => {
  //     if (err) {
  //       reject(err)
  //     }
  //     resolve(data)
  //   // axios.get('/jsonp').then(res => {
  //   //   console.log(res)
  //   // })
  // })
  // })
}
export function GetTop () {
  let url = `http://localhost:8080/jsonp2?count=8`
  return axios.get(url)
  // let options = {
  //   key: ';superagentCallback1540262304444510'
  // }
  // let url = 'http://t.yushu.im/v2/movie/top250?count=8&apikey=0df993c66c0c636e29ecbb5344252a4a'
  // return new Promise((resolve, reject) => {
  //   jsonp(url, options, (err, data) => {
  //     if (err) {
  //       reject(err)
  //     }
  //     resolve(data)
  //   })
  // })
}

export function GetComingSoon () {
  let url = `/jsonp3?count=8`
  return axios.get(url)
  // let options = {
  //   key: ';superagentCallback1540262304444510'
  // }
  // let url = 'http://t.yushu.im/v2/movie/coming_soon?count=8'
  // return new Promise((resolve, reject) => {
  //   jsonp(url, options, (err, data) => {
  //     if (err) {
  //       reject(err)
  //     }
  //     resolve(data)
  //   })
  // })
}
