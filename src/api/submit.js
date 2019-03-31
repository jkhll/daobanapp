import axios from 'axios'

export function onSubmit () {
  return axios.get('http://localhost:3000/').then((res) => {
    console.log(res)
  })
}
