import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/'
})

instance.defaults.headers.post['Access-Control-Request-Headers'] = 'content-type,x-client-version' // access-control-allow-origin,content-type

// axios.defaults.headers.get['Accepts'] = 'application/json'


export default instance