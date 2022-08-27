import axios from "axios";
export default axios.create({
    baseURL:'https://developers.themoviedb.org/3/search/search-movies',
    headers:{
        'Content-Type':'apllication/json'
    },
    timeout: 10000
})