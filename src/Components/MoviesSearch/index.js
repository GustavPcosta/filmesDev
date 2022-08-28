import './styles.css'

import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const searchUrl = "?"
function MoviesSearch({movie,showLink = true}){
    return(
        <div className='container-card'>
        <img src={searchUrl + movie.poster_path}alt={movie.title}></img>
        <h2>{movie.title}</h2>
        <p>
        <FaStar/>{movie.vote_evarange}
        </p>
        {showLink && <Link to={`/search/${movie.id}`}></Link>}
        </div>
    )
}
export default MoviesSearch