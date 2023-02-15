import axios from 'axios'

const BOOKS_REST_API_URL = 'http://localhost:9000/api/book/all';

export default function getBooks(){
    return axios.get(BOOKS_REST_API_URL);
}

