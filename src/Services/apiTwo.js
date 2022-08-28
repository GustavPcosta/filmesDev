import axios from "axios";
export default axios.create({
    baseURL:'https://api.themoviedb.org/3/search/movie?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR',
    headers:{
        'Content-Type':'apllication/json '
    },
    timeout: 10000
})