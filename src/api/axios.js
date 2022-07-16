import axios from 'axios'

export const api=  axios.create(
    {
      baseURL:'https://jsonplaceholder.typicode.com'  
    }
)

export const getPostsPage = async (pageParam = 1, options = {}) =>{
    const respose = await api.get(`/posts?_page=${pageParam}`,options)
    return respose.data
}