import axios from 'axios'

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DOMAIN}/api/`,
  headers: {
    'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
    'Accept': 'application/json',
    'Content-type': 'application/json'
  },
});