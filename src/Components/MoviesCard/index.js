import './styles.css'

import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const imageUrl =`https://image.tmdb.org/t/p/w500/` 
function MoviesCard({movie,showLink = true}){
    return(
        <div className='container-card'>
        <img src={imageUrl + movie.poster_path}alt={movie.title}></img>
        <h2>{movie.title}</h2>
        <p>
        <FaStar/>{movie.vote_evarange}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}
export default MoviesCard